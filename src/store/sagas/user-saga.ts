import { userService } from "@/services/api-services/user.service";
import {
  userUpdatePasswordCompletedAction,
  userUpdatePasswordErrorAction,
  userUpdateProfileCompletedAction,
  userUpdateProfileErrorAction,
} from "@/store/actions/actions/user";
import {
  UserActionType,
  UserUpdatePasswordAction,
  UserUpdateProfileAction,
} from "@/store/actions/types/user";
import { ApiError } from "@/types/api-error";
import { FetchMeResponse } from "@/types/api-response/user-response";
import { SagaPayloadType } from "@/types/saga-payload";
import { BaseError } from "@/utils/base-error";
import { all, call, put, takeLatest } from "redux-saga/effects";

interface UpdateProfileSagaPayload extends SagaPayloadType {
  payload: UserUpdateProfileAction["payload"];
}

interface UpdatePasswordSagaPayload extends SagaPayloadType {
  payload: UserUpdatePasswordAction["payload"];
}

function* updateProfileSaga({ payload }: UpdateProfileSagaPayload) {
  try {
    const response: FetchMeResponse = yield call(
      userService.updateProfile,
      payload
    );
    yield put(userUpdateProfileCompletedAction(response.user));
  } catch (error) {
    const errMsg = (error as BaseError).message;
    yield put(userUpdateProfileErrorAction(errMsg));
  }
}

function* updatePasswordSaga({ payload }: UpdatePasswordSagaPayload) {
  try {
    yield call(userService.updatePassword, payload);
    yield put(userUpdatePasswordCompletedAction());
  } catch (error) {
    const errMsg =
      (error as ApiError)?.errors?.[0]?.message ||
      (error as ApiError)?.message ||
      "Password update failed";
    yield put(userUpdatePasswordErrorAction(errMsg));
  }
}

function* userSaga() {
  yield all([
    takeLatest(UserActionType.UPDATE_PROFILE, updateProfileSaga),
    takeLatest(UserActionType.UPDATE_PASSWORD, updatePasswordSaga),
  ]);
}

export default userSaga;
