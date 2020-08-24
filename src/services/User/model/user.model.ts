/* eslint-disable @typescript-eslint/tslint/config */
import { IUser } from '../interfaces/user.interface';
import { UserRole } from '../types/user.types';

/**
 * User Model
 * @CollectionName  User
 *
 * @export
 * @class SubscriptionPlanModel
 * @implements {IUser} interface
 */
export class Users implements Partial<IUser> {
  protected readonly collection_name = 'Users';
  // Note: All the properties must be partial
  id?: string;
  name?: string;
  email?: string;
  phone_number?: string;
  role?: UserRole;
  hashed_Password?: string;
  //raw_password?: string;

  constructor(payload?: Partial<IUser>) {
    Object.assign(this, payload);
  }
  // not the  real implemetatation
  static generate_hashed_password(rawPassword: string): string {
    let hashedPassword = '';
    hashedPassword = `!${rawPassword}`;
    return hashedPassword;
  }
  // not the  real implemetatation
  static password(hashedPassword: string): string {
    let result = '';
    result = hashedPassword.slice(0, hashedPassword.length);
    return result;
  }
}
