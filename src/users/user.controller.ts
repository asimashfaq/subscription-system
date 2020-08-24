/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller } from '@nestjs/common';
import { GrpcMethod, RpcException } from '@nestjs/microservices';
import { HttpError } from 'http-json-errors';
import { inject, LazyServiceIdentifer } from 'inversify';

import { rpc, user } from '../codegen/rpc';
import { UserService } from '../services/User/user.service';

import UserResponse = user.UserResponse;
import UserFilter = user.UserFilter;
import User = user.User;
import DeleteUserResponse = user.DeleteUserResponse;
import UpdateUserResponse = user.UpdateUserResponse;
import UpdateUserRequest = user.UpdateUserRequest;
import UserInput = user.UserInput;
import IEmpty = rpc.IEmpty;

@Controller()
export class UserController {
  constructor(
    // @inject(new LazyServiceIdentifer(() => UserService))
    private readonly userService: UserService,
  ) {}
  /**
   * Get all subscription plans
   * Test command : grpcurl -plaintext  -proto rpc/rpc.proto 127.0.0.1:5000 rpc.UserService/FindAll
   * @param {IEmpty} req
   * @returns {Promise<Users>}
   * @memberof UserController
   */
  @GrpcMethod('UserService', 'FindAll')
  async findAll(req: IEmpty): Promise<UserResponse> {
    try {
      const obj = await this.userService.findAll();
      return UserResponse.create((obj as unknown) as UserResponse);
    } catch (error) {
      const errorInfo = error as HttpError;
      throw new RpcException({
        code: errorInfo.statusCode,
        message: JSON.stringify(error),
      });
    }
  }

  /**
   * Get One subscription plan
   * Test command : grpcurl -d '{"id":"513-A"}' -plaintext  -proto rpc/rpc.proto 127.0.0.1:5000 rpc.userService/FindOne
   * @param {UserFilter} where
   * @returns {Promise<User>}
   * @memberof UserController
   */
  @GrpcMethod('UserService', 'FindOne')
  async findOne(where: UserFilter): Promise<User> {
    try {
      const id = where?.id;
      const obj = await this.userService.findOne({ id });
      return User.create((obj as unknown) as User);
    } catch (error) {
      const errorInfo = error as HttpError;
      throw new RpcException({
        code: errorInfo.statusCode,
        message: JSON.stringify(error),
      });
    }
  }

  /**
   * Create subscription plan
   * Test command : grpcurl -d '{
      "name": "Test GRPC",
      "code": "12312",
      "description": "test",
      "price": 10,
      "invoicePeriod": 10,
      "invoiceDuration":"DAY"
    }' -plaintext  -proto rpc/rpc.proto 127.0.0.1:5000 rpc.userService/Create

   * @param {UserInput} payload
   * @returns {Promise<User>}
   * @memberof UserController
   */
  @GrpcMethod('UserService', 'Create')
  async create(payload: UserInput): Promise<User> {
    try {
      const obj = await this.userService.create({
        name: payload?.name,
        email: payload?.email,
        role: payload?.role as any,
        phone_number: payload?.phone_number,

        raw_password: payload?.raw_password,
      });
      return User.create((obj as unknown) as User);
    } catch (error) {
      const errorInfo = error as HttpError;
      throw new RpcException({
        code: errorInfo.statusCode,
        message: JSON.stringify(error) || error,
      });
    }
  }

  /**
   * Update subscription plan
   * Test command :
   * grpcurl -d '{"payload":{"name":"Update Text"},"where":{"id":"97-A"}}'
   * -plaintext  -proto rpc/rpc.proto 127.0.0.1:5000 rpc.userService/Update
   * @param {UpdateUserRequest} data
   * @returns {Promise<UpdateUserResponse>}
   * @memberof UserController
   */
  @GrpcMethod('UserService', 'Update')
  async update(data: UpdateUserRequest): Promise<UpdateUserResponse> {
    try {
      const { payload, where } = data;
      const obj = await this.userService.update(payload as any, where);
      return UpdateUserResponse.create((obj as unknown) as UpdateUserResponse);
    } catch (error) {
      const errorInfo = error as HttpError;
      throw new RpcException({
        code: errorInfo.statusCode,
        message: JSON.stringify(error),
      });
    }
  }

  /**
   * Delete subscription plan
   * Test command : grpcurl -d '{"id":"513-A"}' -plaintext  -proto rpc/rpc.proto 127.0.0.1:5000 rpc.userService/Delete
   * @param {UserFilter} where
   * @returns {Promise<DeleteUserResponse>}
   * @memberof UserController
   */
  @GrpcMethod('UserServicee', 'Delete')
  async delete(where: UserFilter): Promise<DeleteUserResponse> {
    try {
      const id = where?.id;
      const obj = await this.userService.delete({ id });
      return DeleteUserResponse.create((obj as unknown) as DeleteUserResponse);
    } catch (error) {
      const errorInfo = error as HttpError;
      throw new RpcException({
        code: errorInfo.statusCode,
        message: JSON.stringify(error),
      });
    }
  }
}
