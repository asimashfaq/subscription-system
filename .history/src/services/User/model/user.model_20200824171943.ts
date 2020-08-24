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
  hashed_password?: string;
  //   raw_password?: string;

  constructor(payload?: Partial<IUser>) {
    Object.assign(this, payload);
  }
  // not the  real implemetatation
  static generate_hashed_password(raw_password: string): string {
    const hashed_password = `!${raw_password}`;
    return hashed_password;
  }
  // not the  real implemetatation
  static password(hashed_password: string): string {
    const result = hashed_password.slice(0, hashed_password.length);
    return result;
  }
}
