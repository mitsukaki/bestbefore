import { getBaseQuery } from 'utils/config';
import { createApi } from '@reduxjs/toolkit/query/react';
import {
  AddFridgeItemsRequest,
  AddFridgeItemsResponse,
} from 'types/fridge.type';

const fridgeApi = createApi({
  reducerPath: 'fridgeApi',
  baseQuery: getBaseQuery(),
  endpoints: (builder) => ({
    addFridgeItems: builder.mutation<
      AddFridgeItemsResponse,
      AddFridgeItemsRequest
    >({
      query: (body) => ({
        url: `/fridge/${''}/items`,
        body,
        method: 'POST',
      }),
    }),
  }),
});

export const { useAddFridgeItemsMutation } = fridgeApi;

export default fridgeApi;
