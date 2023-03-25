import { APIError } from 'types/global.type';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

const getErrorMessage = (
  err: FetchBaseQueryError | SerializedError | void | unknown,
): string => {
  if (!err) return '';

  if ((err as FetchBaseQueryError).data) {
    return ((err as FetchBaseQueryError)?.data as APIError)?.message;
  } else {
    return (err as SerializedError).message || '';
  }
};

export default getErrorMessage;
