import { USER_LOGGED_IN } from '../types';
import api from '../api';
export const userLoggedIn = (user: any) => ({
  type: USER_LOGGED_IN,
  user
});

export const login = (credentials: any) => (dispatch: any) => {
  return api.user.login(credentials).then((user: any) => dispatch(userLoggedIn(user)));
};