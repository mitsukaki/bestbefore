import { Column } from 'react-table';
import { FridgeItem } from 'types/fridge.type';

export const fridgeItemColumns: Column<FridgeItem>[] = [
  {
    Header: 'Name',
    id: 'name',
    accessor: 'name',
  },
  {
    Header: 'Expiry',
    id: 'expiry',
    accessor: ({ expiry }) =>
      expiry ? new Date(expiry).toLocaleDateString() : 'NIL',
  },
  {
    Header: 'Quantity',
    id: 'quantity',
    accessor: ({ quantity }) => `x${quantity}`,
  },
];
