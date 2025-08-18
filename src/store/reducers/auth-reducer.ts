import { User } from '@/models/entities/user';

import { produce } from 'immer';
import { AuthAction, AuthActionType } from '@/store/actions/types/auth';
import { UserActionType } from '../actions/types/user';

export interface AuthState {
  userID?: number;
  user?: User;
  loading?: boolean;
  error?: string;
  isCodeVerified?: boolean;
  code?: string;
}

const initialState: AuthState = {};

export const authReducer = (
  state: AuthState = initialState,
  action: AuthAction
): AuthState =>
  produce(state, (draft: AuthState) => {
    switch (action.type) {
      case AuthActionType.LOGIN:
      case AuthActionType.FETCH_ME:
      case AuthActionType.SIGNUP: {
        draft.loading = true;
        break;
      }
      case AuthActionType.LOGIN_COMPLETED:
      case AuthActionType.FETCH_ME_COMPLETED:
      case AuthActionType.SIGNUP_COMPLETED:
      case UserActionType.UPDATE_PROFILE_COMPLETED: {
        draft.userID = +action.payload.id;
        draft.user = action.payload;
        draft.loading = false;
        draft.error = undefined;
        break;
      }
      case AuthActionType.LOGIN_ERROR:
      case AuthActionType.FETCH_ME_ERROR:
      case AuthActionType.SIGNUP_ERROR: {
        draft.loading = false;
        draft.error = action.payload;
        break;
      }

      case AuthActionType.VERIFY_CODE: {
        draft.loading = true;
        draft.code = action.payload.code;
        break;
      }
      case AuthActionType.VERIFY_CODE_COMPLETED: {
        draft.loading = false;
        draft.isCodeVerified = true;
        break;
      }
      case AuthActionType.VERIFY_CODE_ERROR: {
        draft.loading = false;
        draft.error = action.payload;
        draft.isCodeVerified = false;

        break;
      }

      case AuthActionType.FORGET_PASSWORD: {
        draft.loading = true;
        break;
      }
      case AuthActionType.FORGET_PASSWORD_COMPLETED: {
        draft.loading = false;
        break;
      }
      case AuthActionType.FORGET_PASSWORD_ERROR: {
        draft.loading = false;
        break;
      }

      case AuthActionType.LOGOUT: {
        draft.loading = true;
        break;
      }

      case AuthActionType.LOGOUT_ERROR: {
        draft.loading = false;
        break;
      }

      default:
        break;
    }
  });
