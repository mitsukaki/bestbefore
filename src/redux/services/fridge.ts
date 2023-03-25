import { getBaseQuery } from 'utils/config';
import { createApi } from '@reduxjs/toolkit/query/react';
import {
  AddFridgeItemsRequest,
  FridgeItemsResponse,
  DeleteFridgeItemsRequest,
  FridgeItem,
} from 'types/fridge.type';

const fridgeApi = createApi({
  reducerPath: 'fridgeApi',
  baseQuery: getBaseQuery(),
  endpoints: (builder) => ({
    fridgeItems: builder.query<FridgeItem[], string>({
      query: (fridgeId) => `/fridge/${fridgeId}/items`,
    }),
    upsertFridgeItems: builder.mutation<
      FridgeItemsResponse,
      AddFridgeItemsRequest
    >({
      query: ({ fridgeId, body }) => ({
        url: `/fridge/${fridgeId}/items`,
        body,
        method: 'PUT',
      }),
    }),
    deleteFridgeItems: builder.mutation<
      FridgeItemsResponse,
      DeleteFridgeItemsRequest
    >({
      query: ({ fridgeId, body }) => ({
        url: `/fridge/${fridgeId}/items`,
        body,
        method: 'DELETE',
      }),
    }),
    uploadReceipt: builder.mutation<FridgeItemsResponse, FormData>({
      query: (body) => ({
        url: `/receipt`,
        body,
        method: 'POST',
        'Content-Type': 'multipart/form-data',
      }),
    }),
  }),
});

export const {
  useLazyFridgeItemsQuery,
  useUpsertFridgeItemsMutation,
  useDeleteFridgeItemsMutation,
  useUploadReceiptMutation,
} = fridgeApi;

export default fridgeApi;
