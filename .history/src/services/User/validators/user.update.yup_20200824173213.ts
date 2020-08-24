// import _ from 'lodash';
import * as yup from 'yup';

import { ErrorGenerator } from '../../../shared/errors.generator';
// import {UserErrorMessage } from '../message/error.message';
import { UserRole, UserRoleEnum, UserUpdatePayload } from '../types/user.types';

/**
 * Validator for Updating the User
 */
export const UserUpdateSchema = yup.object({
  name: yup
    .string()
    .trim()
    .min(3, ErrorGenerator.MiniLength<UserUpdatePayload>('name', 3))
    .max(50, ErrorGenerator.MaxLength<UserUpdatePayload>('name', 50))
    .required(ErrorGenerator.Required<UserUpdatePayload>('name')),
  email: yup
    .string()
    .min(10, ErrorGenerator.MiniLength<UserUpdatePayload>('email', 10))
    .max(50, ErrorGenerator.MaxLength<UserUpdatePayload>('email', 50))
    .required(ErrorGenerator.Required<UserUpdatePayload>('email')),
  raw_password: yup
    .string()
    .min(6, ErrorGenerator.MinValue<UserUpdatePayload>('raw_password', 6))
    .max(20, ErrorGenerator.MaxValue<UserUpdatePayload>('raw_password', 20))
    .required(ErrorGenerator.Required<UserUpdatePayload>('raw_password')),
  role: yup.mixed<UserRole>().oneOf(Object.values(UserRoleEnum)),
  phone_number: yup
    .number()
    .min(11, ErrorGenerator.MiniLength<UserUpdatePayload>('phone_number', 11)),
});
