import { authService } from "@/services/api-services/auth.service";
import { localStorageService } from "@/services/factories/local-storage.service";

import {
  authFetchMeCompletedAction,
  authFetchMeErrorAction,
  authForgetPasswordCompletedAction,
  authForgetPasswordErrorAction,
  authLoginCompletedAction,
  authLoginErrorAction,
  authLogoutErrorAction,
  authResetAppStateAction,
  authResetPasswordCompletedAction,
  authResetPasswordErrorAction,
  authSignUpCompletedAction,
  authSignUpErrorAction,
  verifyCodeCompletedAction,
  verifyCodeErrorAction,
} from "@/store/actions/actions/auth";
import {
  AuthActionType,
  AuthForgetPasswordAction,
  AuthLoginAction,
  AuthResetPasswordAction,
  AuthSignUpAction,
  VerifyCodeAction,
} from "@/store/actions/types/auth";
import { ApiError } from "@/types/api-error";
import {
  AuthResponse,
  ForgetOrResetPasswordResponse,
} from "@/types/api-response/auth-response";
import { FetchMeResponse } from "@/types/api-response/user-response";

import { SagaPayloadType } from "@/types/saga-payload";
import { BaseError } from "@/utils/base-error";
import { all, call, put, takeLatest } from "redux-saga/effects";

interface LoginSagaPayload extends SagaPayloadType {
  payload: AuthLoginAction["payload"];
}

interface SignUpSagaPayload extends SagaPayloadType {
  payload: AuthSignUpAction["payload"];
}

interface VerifyCodeSagaPayload extends SagaPayloadType {
  payload: VerifyCodeAction["payload"];
}

interface ForgetPasswordSagaPayload extends SagaPayloadType {
  payload: AuthForgetPasswordAction["payload"];
}

interface ResetPasswordSagaPayload extends SagaPayloadType {
  payload: AuthResetPasswordAction["payload"];
}

function* loginSaga({ payload }: LoginSagaPayload) {
  try {
    const response: AuthResponse = yield call(authService.login, payload);
    yield put(authLoginCompletedAction(response.user));
    if (response.token) {
      localStorageService.setAuthToken(response.token);
    }
  } catch (error) {
    const errMsg = (error as BaseError).message;
    yield put(authLoginErrorAction(errMsg));
  }
}

function* fetchLoggedInUserSaga() {
  try {
    const response: FetchMeResponse = yield call(authService.fetchMe);
    yield put(authFetchMeCompletedAction(response.user));
  } catch (error) {
    localStorageService.removeAuthToken();
    const errMsg = (error as BaseError).message;
    yield put(authFetchMeErrorAction(errMsg));
  }
}

function* signUpSaga({ payload }: SignUpSagaPayload) {
  try {
    const response: AuthResponse = yield call(authService.signup, payload);
    yield put(authSignUpCompletedAction(response.user));
    if (response.token) {
      localStorageService.setAuthToken(response.token);
    }
  } catch (error) {
    const errMsg = (error as BaseError).message;
    yield put(authSignUpErrorAction(errMsg));
  }
}

function* verifyCodeSaga({ payload }: VerifyCodeSagaPayload) {
  try {
    yield call(authService.verifyCode, payload);
    yield put(verifyCodeCompletedAction());
    if (payload.showPopup) {
      //show success message - todo [for many more places]
    }
  } catch (error) {
    localStorageService.removeCode();
    const errMsg =
      (error as ApiError)?.errors?.[0]?.message ||
      (error as ApiError)?.message ||
      "Code verification failed";
    if (payload.showPopup) {
      // show error message in popup - todo [for many more places]
    }
    yield put(verifyCodeErrorAction(errMsg));
  }
}

function* forgetPasswordSaga({ payload }: ForgetPasswordSagaPayload) {
  try {
    const response: ForgetOrResetPasswordResponse = yield call(
      authService.forgetPassword,
      payload
    );
    yield put(authForgetPasswordCompletedAction(response.message));
  } catch (error) {
    const errMsg = (error as BaseError).message;
    yield put(authForgetPasswordErrorAction(errMsg));
  }
}

function* resetPasswordSaga({ payload }: ResetPasswordSagaPayload) {
  try {
    const response: ForgetOrResetPasswordResponse = yield call(
      authService.resetPassword,
      {
        code: payload.code,
        token: payload.token,
        password: payload.password,
        confirmPassword: payload.confirmPassword,
      }
    );
    yield put(authResetPasswordCompletedAction(response.message));

    payload.onSuccess();
  } catch (error) {
    const errMsg = (error as BaseError).message;
    yield put(authResetPasswordErrorAction(errMsg));
  }
}

function* logout() {
  try {
    yield call(authService.logout);

    localStorageService.removeAuthToken();
    localStorageService.removeCode();
    yield put(authResetAppStateAction());
  } catch (error) {
    const message = (error as BaseError).message;
    yield put(authLogoutErrorAction(message));
  }
}

function* authSaga() {
  yield all([
    takeLatest(AuthActionType.LOGIN, loginSaga),
    takeLatest(AuthActionType.FETCH_ME, fetchLoggedInUserSaga),
    takeLatest(AuthActionType.SIGNUP, signUpSaga),
    takeLatest(AuthActionType.VERIFY_CODE, verifyCodeSaga),
    takeLatest(AuthActionType.FORGET_PASSWORD, forgetPasswordSaga),
    takeLatest(AuthActionType.RESET_PASSWORD, resetPasswordSaga),
    takeLatest(AuthActionType.LOGOUT, logout),
  ]);
}

export default authSaga;
