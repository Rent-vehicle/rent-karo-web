import { userSelector } from '@/store/selectors/selectors';
import { createSelector } from 'reselect';

export const userStateSelector = createSelector(
  [userSelector],
  (userState) => userState
);
