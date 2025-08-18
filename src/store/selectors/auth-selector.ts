import { createSelector } from 'reselect';
import { authSelector } from '@/store/selectors/selectors';

export const userIdSelector = createSelector(
  [authSelector],
  (authState) => authState.userID
);

export const meSelector = createSelector(
  [authSelector],
  (authState) => authState.user
);

export const meErrorSelector = createSelector(
  [authSelector],
  (authState) => authState.error
);

export const authStateSelector = createSelector(
  [authSelector],
  (authState) => authState
);

export const loadingSelector = createSelector(
  [authSelector],
  (authState) => authState.loading
);
