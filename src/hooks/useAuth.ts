import { useEffect } from 'react';
import { Routes, User } from 'types/global.type';
import { setAuthState } from 'redux/slices/auth';
import { AuthResponse, AuthState } from 'types/auth.type';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { updateFridges } from 'redux/slices/fridge';
import useStorage from './useStorage';
import { Fridge } from 'types/fridge.type';

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
    const fridges = getStorageValue<Fridge[]>('fridges');

    dispatch(
      setAuthState({
        isLoggedIn: Boolean(isLoggedIn),
        token: token || '',
        user: user || null,
      }),
    );
    dispatch(updateFridges({ fridges }));
  }, []);

  const updateAuthState = (data: AuthResponse): void => {
    const { id, username, email, fridges: fridgeIds, token } = data;

    const user = { id, username, email };
    const fridges = fridgeIds.map((_id) => ({ _id, items: [] }));

    addStorageValue('isLoggedIn', true);
    addStorageValue('user', user);
    addStorageValue('token', token);
    addStorageValue('fridges', fridges);

    dispatch(
      setAuthState({
        isLoggedIn: true,
        user,
        token,
      }),
    );
    dispatch(updateFridges({ fridges }));

    window.location.href = Routes.home;
  };

  return { ...authState, updateAuthState };
};

export default useAuth;
