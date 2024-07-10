import axios from 'axios';
import { UserAction, UserActionTypes } from '../../types/users';
import { Dispatch } from 'redux';

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');

      setTimeout(() => {
        dispatch({
          type: UserActionTypes.FETCH_USERS_SUCCESS,
          payload: res.data,
        });
      }, 1000);
    } catch (error) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: 'Произошла ошибка при загрузке пользователей',
      });
    }
  };
};
