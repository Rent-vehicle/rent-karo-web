import { User } from '@/models/entities/user';
import { UserUpdateProfileCompletedAction } from './user';

export enum AuthActionType {
  LOGIN = 'auth/login',
  LOGIN_COMPLETED = 'auth/login/completed',
  LOGIN_ERROR = 'auth/login/error',

  FETCH_ME = 'auth/fetch/me',
  FETCH_ME_COMPLETED = 'auth/fetch/me/completed',
  FETCH_ME_ERROR = 'auth/fetch/me/error',

  SIGNUP = 'auth/signup',
  SIGNUP_COMPLETED = 'auth/signup/completed',
  SIGNUP_ERROR = 'auth/signup/error',

  VERIFY_CODE = 'auth/verify/code',
  VERIFY_CODE_COMPLETED = 'auth/verify/code/completed',
  VERIFY_CODE_ERROR = 'auth/verify/code/error',

  FORGET_PASSWORD = 'auth/forget/password',
  FORGET_PASSWORD_COMPLETED = 'auth/forget/password/completed',
  FORGET_PASSWORD_ERROR = 'auth/forget/password/error',

  RESET_PASSWORD = 'auth/reset/password',
  RESET_PASSWORD_COMPLETED = 'auth/reset/password/completed',
  RESET_PASSWORD_ERROR = 'auth/reset/password/error',

  LOGOUT = 'auth/logout',
  LOGOUT_ERROR = 'auth/logout/error',

  RESET_APP_STATE = 'auth/reset/app/state',
}

export interface AuthLoginAction {
  type: AuthActionType.LOGIN;
  payload: {
    email: string;
    password: string;
    code: string;
  };
}

export interface AuthLoginCompletedAction {
  type: AuthActionType.LOGIN_COMPLETED;
  payload: User;
}

export interface AuthLoginErrorAction {
  type: AuthActionType.LOGIN_ERROR;
  payload: string;
}

export interface AuthFetchMeAction {
  type: AuthActionType.FETCH_ME;
}

export interface AuthFetchMeCompletedAction {
  type: AuthActionType.FETCH_ME_COMPLETED;
  payload: User;
}

export interface AuthFetchMeErrorAction {
  type: AuthActionType.FETCH_ME_ERROR;
  payload: string;
}

export interface AuthSignUpAction {
  type: AuthActionType.SIGNUP;
  payload: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    code: string;
  };
}

export interface AuthSignUpCompletedAction {
  type: AuthActionType.SIGNUP_COMPLETED;
  payload: User;
}

export interface AuthSignUpErrorAction {
  type: AuthActionType.SIGNUP_ERROR;
  payload: string;
}

export interface VerifyCodeAction {
  type: AuthActionType.VERIFY_CODE;
  payload: {
    code: string;
    showPopup?: boolean;
  };
}

export interface VerifyCodeCompletedAction {
  type: AuthActionType.VERIFY_CODE_COMPLETED;
}

export interface VerifyCodeErrorAction {
  type: AuthActionType.VERIFY_CODE_ERROR;
  payload: string;
}

export interface AuthForgetPasswordAction {
  type: AuthActionType.FORGET_PASSWORD;
  payload: {
    email: string;
    code: string;
  };
}

export interface AuthForgetPasswordCompletedAction {
  type: AuthActionType.FORGET_PASSWORD_COMPLETED;
  payload: string;
}

export interface AuthForgetPasswordErrorAction {
  type: AuthActionType.FORGET_PASSWORD_ERROR;
  payload: string;
}

export interface AuthResetPasswordAction {
  type: AuthActionType.RESET_PASSWORD;
  payload: {
    password: string;
    confirmPassword: string;
    code: string;
    token: string;
    onSuccess: () => void;
  };
}

export interface AuthResetPasswordCompletedAction {
  type: AuthActionType.RESET_PASSWORD_COMPLETED;
  payload: string;
}

export interface AuthResetPasswordErrorAction {
  type: AuthActionType.RESET_PASSWORD_ERROR;
  payload: string;
}

export interface AuthLogoutAction {
  type: AuthActionType.LOGOUT;
}

export interface AuthLogoutErrorAction {
  type: AuthActionType.LOGOUT_ERROR;
  payload: string;
}

export interface AuthResetAppStateAction {
  type: AuthActionType.RESET_APP_STATE;
}

export type AuthAction =
  | AuthLoginAction
  | AuthLoginCompletedAction
  | AuthLoginErrorAction
  | AuthFetchMeAction
  | AuthFetchMeCompletedAction
  | AuthFetchMeErrorAction
  | AuthSignUpAction
  | AuthSignUpCompletedAction
  | AuthSignUpErrorAction
  | VerifyCodeAction
  | VerifyCodeCompletedAction
  | VerifyCodeErrorAction
  | AuthForgetPasswordAction
  | AuthForgetPasswordCompletedAction
  | AuthForgetPasswordErrorAction
  | AuthResetPasswordAction
  | AuthResetPasswordCompletedAction
  | AuthResetPasswordErrorAction
  | UserUpdateProfileCompletedAction
  | AuthLogoutAction
  | AuthLogoutErrorAction
  | AuthResetAppStateAction;
