import { useEffect } from 'react';
import { Routes, User } from 'types/global.type';
import { setAuthState } from 'redux/slices/auth';
import { AuthResponse, AuthState } from 'types/auth.type';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import useStorage from './useStorage';

interface AuthHelpers extends AuthState {
  updateAuthState: (data: AuthResponse) => void;
}

const useAuth = (): AuthHelpers => {
  const authState = useAppSelector((state) => state.auth);
  const { addStorageValue, getStorageValue } = useStorage();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const isLoggedIn = getStorageValue<boolean>('isLoggedIn');
    const user = getStorageValue<User>('user');
    const token = getStorageValue<string>('token');

    dispatch(
      setAuthState({
        isLoggedIn: Boolean(isLoggedIn),
        token: token || '',
        user: user || null,
      }),
    );
  }, []);

  const updateAuthState = (data: AuthResponse, rememberMe?: boolean): void => {
    const { id, username, email, token } = data;

    const user = { id, username, email };

    addStorageValue('isLoggedIn', true);
    addStorageValue('user', user);
    addStorageValue('token', token);

    dispatch(
      setAuthState({
        isLoggedIn: true,
        user,
        token,
      }),
    );

    window.location.href = Routes.home;
  };

  return { ...authState, updateAuthState };
};

export default useAuth;
