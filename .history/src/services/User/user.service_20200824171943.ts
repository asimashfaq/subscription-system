import { injectable } from 'inversify';
import _ from 'lodash';

import { createEverLogger } from '../../helpers/Log';
import { ErrorGenerator } from '../../shared/errors.generator';
import {
  BadRequestError,
  ConflictError,
  NotFoundError,
  ParseError,
} from '../../shared/errors.messages';
import { DatabaseService } from '../database/database.service';
import { servicesContainer } from '../inversify.config';
import { IService } from '../IService';
import { Users } from './model/user.model';
import {
  DeleteUserResponse,
  IUserService,
  UpdateUserResponse,
  User,
  UserFilter,
  UserInputPayload,
  UserResponse,
  UserUpdatePayload,
} from './types/user.types';
import { UserCreateSchema } from './validators/user.create.yup';
import { UserFilterSchema } from './validators/user.filter.yup';
import { UserUpdateSchema } from './validators/user.update.yup';

/**
 * User Service
 * CRUD operation for User
 * @export
 * @class UserService
 * @implements {IUserService}
 * @implements {IService}
 */
@injectable()
export class UserService implements IUserService, IService {
  private logger = createEverLogger({ name: 'UserService' });
  private dbService = servicesContainer.get<DatabaseService>(DatabaseService);
  /**
   * Create a User
   *
   * Returns the newly created user object with id
   *
   * @param {UserInputPayload} payload
   * @returns {Promise<User>}
   * @memberof UserService
   */
  async create(payload: UserInputPayload): Promise<User> {
    let result: User;
    try {
      // Validate the payload
      await UserCreateSchema.validate(payload, {
        abortEarly: false,
      });
      const email = payload.email;

      // Check for existing slug
      const isExist = await this.dbService.findOne<User, UserFilter>({ email });
      if (!_.isNil(isExist)) {
        throw ConflictError(ErrorGenerator.Duplicate('User'));
      }

      // set hashed_password
      const hashed_password = Users.generate_hashed_password(
        payload.raw_password,
      );
      // Make db call
      result = await this.dbService.create<User, Users>(
        new Users({ ...payload, hashed_password }),
      );
      this.logger.debug('User added Successfully', result);
    } catch (e) {
      this.logger.error(e);
      ParseError(e, ErrorGenerator.Duplicate('User'));
    }
    if (!_.isEmpty(result?.id)) {
      return result;
    }
    throw BadRequestError(ErrorGenerator.UnableSave('User'));
  }

  /**
   * Get the User by id only
   * will return single object
   * @param {UserFilter} where
   * @returns {Promise<User>}
   * @memberof UserService
   */
  async findOne(where: UserFilter): Promise<User> {
    let edge: User;
    try {
      // Validate Input
      await UserFilterSchema.validate(where, {
        abortEarly: false,
      });
      // Get the User id
      // TODO: Implement other filters
      const id = where?.id;
      if (!_.isNil(id)) {
        // make db call
        edge = await this.dbService.findOne<User, UserFilter>(
          new Users({ id }),
        );
      }
    } catch (e) {
      this.logger.error(e);
      ParseError(e, ErrorGenerator.NotFound('User'));
    }
    if (!_.isEmpty(edge)) {
      this.logger.debug('User loaded Successfully', edge);

      return edge;
    }
    throw NotFoundError(ErrorGenerator.NotFound('User'));
  }

  /**
   * Get all the Users
   * with pagination
   * @param {UserFilter} [where]
   * @returns {Promise<UserResponse>}
   * @memberof UserService
   */
  async findAll(where?: UserFilter): Promise<UserResponse> {
    // Validate the Input

    let edges: User[];
    let count: number; // Rows counts
    let recordLimit = 10; // Pagination Limit
    let recordSkip = 0; // Pagination: SKIP

    // TODO
    // Transform from Object to Array
    // { id: SortDirection.ASC } to [ "id", "ASC"]
    // for (const [key, value] of Object.entries(sortBy)) {
    //   sortOrder.push([key, value]);
    // }
    try {
      await UserFilterSchema.validate(where, {
        abortEarly: false,
      });
      if (where) {
        // TODO: Implement other filters
        const { id, limit, skip } = where;
        // isNil check for for null or undefined
        if (!_.isNil(id) && !_.isNil(limit) && !_.isNil(skip)) {
          // Set Limit and Skip for `page_info`
          recordLimit = limit;
          recordSkip = skip;
          // Load the User with ID and Pagination
          [edges, count] = await this.dbService.findAll<
            User,
            Partial<UserFilter>
          >(new Users({ id }), recordLimit, recordSkip);
        } else if (!_.isNil(limit) && !_.isNil(skip)) {
          // Set Limit and Skip for `page_info`
          recordLimit = limit;
          recordSkip = skip;
          // Load All User with default pagination
          [edges, count] = await this.dbService.findAll<
            User,
            Partial<UserFilter>
          >(new Users(), recordLimit, recordSkip);
        } else if (!_.isNil(id)) {
          // Load All User with id with default pagination
          [edges, count] = await this.dbService.findAll<
            User,
            Partial<UserFilter>
          >(new Users({ id }), recordLimit, recordSkip);
        }
      } else {
        // Load All User with default pagination
        [edges, count] = await this.dbService.findAll<
          User,
          Partial<UserFilter>
        >(new Users(), recordLimit, recordSkip);
      }
    } catch (error) {
      this.logger.error(error);
      // Empty
      ParseError(error, ErrorGenerator.NotFound(' User'));
    }
    // Validate edges are not empty
    if (!_.isEmpty(edges)) {
      this.logger.debug('Users loaded Successfully', edges);

      return {
        edges,
        page_info: {
          total: count,
          limit: recordLimit,
          skip: recordSkip,
          has_more: count > recordLimit + recordSkip ? true : false,
        },
      };
    }
    throw NotFoundError(ErrorGenerator.NotFound('User'));
  }
  count(where?: UserFilter): Promise<number> {
    throw new Error('Method not implemented.');
  }

  /**
   * Update the user
   * by id only
   * @param {UserUpdatePayload} payload
   * @param {UserFilter} where
   * @returns {Promise<UpdateUserResponse>}
   * @memberof UserService
   */
  async update(
    payload: UserUpdatePayload,
    where: UserFilter,
  ): Promise<UpdateUserResponse> {
    let modified: number;
    let edges: User[];

    try {
      // Validate the input
      await UserUpdateSchema.validate(
        { ...payload, ...where },
        { abortEarly: false },
      );
      // Check where is defined
      if (where) {
        const { id } = where;
        // Get Subscription plan id
        if (!_.isNil(id)) {
          // Generate the slug
          const email = payload.email;
          // Check for existing slug
          const isExist = await this.dbService.findOne<User, UserFilter>({
            email,
          });
          // Validate the ID is not same
          // Return document can have the same ID as of update
          if (!_.isNil(isExist) && isExist?.id != id) {
            throw ConflictError(ErrorGenerator.Duplicate('Subscription Plan'));
          }
          // Make db call
          [edges, modified] = await this.dbService.update<
            User,
            Partial<User>,
            UserFilter
          >(new Users({ ...payload, email }), new Users({ id }));
          this.logger.debug('Subscription Plan Update Successfully', edges);
        }
      }
    } catch (e) {
      this.logger.error(e);
      ParseError(e, ErrorGenerator.Duplicate('Subscription Plan'));
    }
    if (modified > 0) {
      // Return the update data with count
      return { modified, edges };
    }
    throw NotFoundError(ErrorGenerator.NotFound('Subscription Plan'));
  }
  /**
   * Delete the subscription plan
   * by id only
   * @param {SubscriptionPlanFilter} where
   * @returns {Promise<DeleteSubscriptionPlanResponse>}
   * @memberof SubscriptionPlanService
   */
  async delete(where: UserFilter): Promise<DeleteUserResponse> {
    let modified: number;
    let edges: User[];

    try {
      this.logger.info(where, 'Delete request');
      // Validate the payload
      await UserFilterSchema.validate(where, { abortEarly: false });
      // Check where is defined
      if (where) {
        // Get the subscription plan id
        const { id } = where;
        if (!_.isNil(id)) {
          // Make db call
          [edges, modified] = await this.dbService.delete<User, UserFilter>(
            new Users({ id }),
          );
          this.logger.debug('User deleted Successfully', edges);
        }
      }
    } catch (e) {
      this.logger.error(e);
      ParseError(e, ErrorGenerator.UnableToDelete('Subscription Plan'));
    }
    if (modified > 0) {
      return { modified, edges };
    }
    throw NotFoundError(ErrorGenerator.NotFound('Subscription Plan'));
  }
}
