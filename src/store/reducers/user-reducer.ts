import { User } from "@/models/entities/user";
import { AuthActionType } from "@/store/actions/types/auth";
import { UserAction, UserActionType } from "@/store/actions/types/user";
import { addOne } from "@/store/base/base-reducer";
import { EntityState } from "@/store/base/entity-state";
import { produce } from "immer";

export interface UserState extends EntityState<User> {
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  entities: {},
  error: null,
  loading: false,
};

export const userReducer = (
  state: UserState = initialState,
  action: UserAction
): UserState =>
  produce(state, (draft: UserState) => {
    switch (action.type) {
      case UserActionType.UPDATE_PASSWORD:
      case UserActionType.UPDATE_PROFILE: {
        draft.loading = true;
        break;
      }
      case UserActionType.UPDATE_PROFILE_COMPLETED:
      case AuthActionType.LOGIN_COMPLETED:
      case AuthActionType.FETCH_ME_COMPLETED:
      case AuthActionType.SIGNUP_COMPLETED: {
        const user = action.payload;
        addOne(draft, user);
        draft.loading = false;
        break;
      }
      case UserActionType.UPDATE_PASSWORD_COMPLETED: {
        draft.loading = false;
        break;
      }
      case UserActionType.UPDATE_PASSWORD_ERROR:
      case UserActionType.UPDATE_PROFILE_ERROR: {
        draft.error = action.payload;
        draft.loading = false;
        break;
      }

      default: {
        break;
      }
    }
  });
