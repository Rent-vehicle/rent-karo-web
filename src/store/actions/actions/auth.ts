import { User } from '@/models/entities/user';

import {
  AuthActionType,
  AuthFetchMeAction,
  AuthFetchMeCompletedAction,
  AuthFetchMeErrorAction,
  AuthForgetPasswordAction,
  AuthForgetPasswordCompletedAction,
  AuthForgetPasswordErrorAction,
  AuthLoginAction,
  AuthLoginCompletedAction,
  AuthLoginErrorAction,
  AuthLogoutAction,
  AuthLogoutErrorAction,
  AuthResetAppStateAction,
  AuthResetPasswordAction,
  AuthResetPasswordCompletedAction,
  AuthResetPasswordErrorAction,
  AuthSignUpAction,
  AuthSignUpCompletedAction,
  AuthSignUpErrorAction,
  VerifyCodeAction,
  VerifyCodeCompletedAction,
  VerifyCodeErrorAction,
} from '@/store/actions/types/auth';

export const authLoginAction = (
  payload: AuthLoginAction['payload']
): AuthLoginAction => ({
  type: AuthActionType.LOGIN,
  payload,
});

export const authLoginCompletedAction = (
  user: User
): AuthLoginCompletedAction => ({
  type: AuthActionType.LOGIN_COMPLETED,
  payload: user,
});

export const authLoginErrorAction = (
  message: string
): AuthLoginErrorAction => ({
  type: AuthActionType.LOGIN_ERROR,
  payload: message,
});

export const authFetchMeAction = (): AuthFetchMeAction => ({
  type: AuthActionType.FETCH_ME,
});

export const authFetchMeCompletedAction = (
  user: User
): AuthFetchMeCompletedAction => ({
  type: AuthActionType.FETCH_ME_COMPLETED,
  payload: user,
});

export const authFetchMeErrorAction = (
  message: string
): AuthFetchMeErrorAction => ({
  type: AuthActionType.FETCH_ME_ERROR,
  payload: message,
});

export const authSignUpAction = (
  payload: AuthSignUpAction['payload']
): AuthSignUpAction => ({
  type: AuthActionType.SIGNUP,
  payload,
});

export const authSignUpCompletedAction = (
  user: User
): AuthSignUpCompletedAction => ({
  type: AuthActionType.SIGNUP_COMPLETED,
  payload: user,
});

export const authSignUpErrorAction = (
  message: string
): AuthSignUpErrorAction => ({
  type: AuthActionType.SIGNUP_ERROR,
  payload: message,
});

export const verifyCodeAction = (
  payload: VerifyCodeAction['payload']
): VerifyCodeAction => ({
  type: AuthActionType.VERIFY_CODE,
  payload,
});

export const verifyCodeCompletedAction = (): VerifyCodeCompletedAction => ({
  type: AuthActionType.VERIFY_CODE_COMPLETED,
});

export const verifyCodeErrorAction = (
  message: string
): VerifyCodeErrorAction => ({
  type: AuthActionType.VERIFY_CODE_ERROR,
  payload: message,
});

export const authForgetPasswordAction = (
  payload: AuthForgetPasswordAction['payload']
): AuthForgetPasswordAction => ({
  type: AuthActionType.FORGET_PASSWORD,
  payload,
});

export const authForgetPasswordCompletedAction = (
  message: string
): AuthForgetPasswordCompletedAction => ({
  type: AuthActionType.FORGET_PASSWORD_COMPLETED,
  payload: message,
});

export const authForgetPasswordErrorAction = (
  message: string
): AuthForgetPasswordErrorAction => ({
  type: AuthActionType.FORGET_PASSWORD_ERROR,
  payload: message,
});

export const authResetPasswordAction = (
  payload: AuthResetPasswordAction['payload']
): AuthResetPasswordAction => ({
  type: AuthActionType.RESET_PASSWORD,
  payload,
});

export const authResetPasswordCompletedAction = (
  message: string
): AuthResetPasswordCompletedAction => ({
  type: AuthActionType.RESET_PASSWORD_COMPLETED,
  payload: message,
});

export const authResetPasswordErrorAction = (
  message: string
): AuthResetPasswordErrorAction => ({
  type: AuthActionType.RESET_PASSWORD_ERROR,
  payload: message,
});

export const authLogoutAction = (): AuthLogoutAction => ({
  type: AuthActionType.LOGOUT,
});

export const authLogoutErrorAction = (
  payload: AuthLogoutErrorAction['payload']
): AuthLogoutErrorAction => ({
  type: AuthActionType.LOGOUT_ERROR,
  payload,
});

export const authResetAppStateAction = (): AuthResetAppStateAction => ({
  type: AuthActionType.RESET_APP_STATE,
});
