import { AuthAction, AuthActionType } from "@/store/actions/types/auth";
import { UserAction } from "@/store/actions/types/user";
import { authReducer } from "@/store/reducers/auth-reducer";
import { userReducer } from "@/store/reducers/user-reducer";
import { combineReducers } from "redux";
import { AppState } from "..";

type RootAction = AuthAction | UserAction;

export const appReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

export const rootReducer = (
  state: AppState | undefined,
  action: RootAction
) => {
  if (action.type === AuthActionType.RESET_APP_STATE) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
