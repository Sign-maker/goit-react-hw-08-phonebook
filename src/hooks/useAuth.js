import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as operations from 'redux-store/auth/authOperations';
import {
  selectIsAuthLoading,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from 'redux-store/auth/authSelectors';

export const useAuth = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isAuthLoading = useSelector(selectIsAuthLoading);

  const register = formData => dispatch(operations.register(formData)).unwrap();
  const logIn = formData => dispatch(operations.logIn(formData)).unwrap();
  const logOut = () => dispatch(operations.logOut());
  const refreshUser = useCallback(
    () => dispatch(operations.refreshUser()).unwrap(),
    [dispatch]
  );
  return {
    user,
    isLoggedIn,
    isRefreshing,
    isAuthLoading,
    register,
    logIn,
    logOut,
    refreshUser,
  };
};
