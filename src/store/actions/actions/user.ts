import {
  UserActionType,
  UserUpdateProfileAction,
  UserUpdatePasswordAction,
  UserUpdateProfileCompletedAction,
  UserUpdateProfileErrorAction,
  UserUpdatePasswordCompletedAction,
  UserUpdatePasswordErrorAction,
} from '@/store/actions/types/user';

export const userUpdateProfileAction = (
  payload: UserUpdateProfileAction['payload']
): UserUpdateProfileAction => ({
  type: UserActionType.UPDATE_PROFILE,
  payload,
});

export const userUpdateProfileCompletedAction = (
  payload: UserUpdateProfileCompletedAction['payload']
): UserUpdateProfileCompletedAction => ({
  type: UserActionType.UPDATE_PROFILE_COMPLETED,
  payload,
});

export const userUpdateProfileErrorAction = (
  payload: UserUpdateProfileErrorAction['payload']
): UserUpdateProfileErrorAction => ({
  type: UserActionType.UPDATE_PROFILE_ERROR,
  payload,
});

export const userUpdatePasswordAction = (
  payload: UserUpdatePasswordAction['payload']
): UserUpdatePasswordAction => ({
  type: UserActionType.UPDATE_PASSWORD,
  payload,
});

export const userUpdatePasswordCompletedAction =
  (): UserUpdatePasswordCompletedAction => ({
    type: UserActionType.UPDATE_PASSWORD_COMPLETED,
  });

export const userUpdatePasswordErrorAction = (
  payload: UserUpdatePasswordErrorAction['payload']
): UserUpdatePasswordErrorAction => ({
  type: UserActionType.UPDATE_PASSWORD_ERROR,
  payload,
});
