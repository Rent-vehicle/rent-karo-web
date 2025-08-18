import { User } from '@/models/entities/user';
import {
  AuthFetchMeCompletedAction,
  AuthLoginCompletedAction,
  AuthSignUpCompletedAction,
} from '@/store/actions/types/auth';

export enum UserActionType {
  UPDATE_PROFILE = 'user/update/profile',
  UPDATE_PROFILE_COMPLETED = 'user/update/profile/completed',
  UPDATE_PROFILE_ERROR = 'user/update/profile/error',

  UPDATE_PASSWORD = 'user/update/password',
  UPDATE_PASSWORD_COMPLETED = 'user/update/password/completed',
  UPDATE_PASSWORD_ERROR = 'user/update/password/error',
}

export interface UserUpdateProfileAction {
  type: UserActionType.UPDATE_PROFILE;
  payload: {
    firstName: string;
    lastName: string;
  };
}

export interface UserUpdateProfileCompletedAction {
  type: UserActionType.UPDATE_PROFILE_COMPLETED;
  payload: User;
}

export interface UserUpdateProfileErrorAction {
  type: UserActionType.UPDATE_PROFILE_ERROR;
  payload: string;
}

export interface UserUpdatePasswordAction {
  type: UserActionType.UPDATE_PASSWORD;
  payload: {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
  };
}

export interface UserUpdatePasswordCompletedAction {
  type: UserActionType.UPDATE_PASSWORD_COMPLETED;
}

export interface UserUpdatePasswordErrorAction {
  type: UserActionType.UPDATE_PASSWORD_ERROR;
  payload: string;
}

export type UserAction =
  | AuthLoginCompletedAction
  | AuthFetchMeCompletedAction
  | AuthSignUpCompletedAction
  | UserUpdateProfileAction
  | UserUpdateProfileCompletedAction
  | UserUpdateProfileErrorAction
  | UserUpdatePasswordAction
  | UserUpdatePasswordCompletedAction
  | UserUpdatePasswordErrorAction;
