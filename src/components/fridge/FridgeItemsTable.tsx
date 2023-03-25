import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  IconButton,
} from '@chakra-ui/react';
import ConfirmModal from 'components/global/ConfirmModal';
import { useEffect, useMemo, useState } from 'react';
import { FaArrowDown, FaArrowUp, FaEdit, FaTrash } from 'react-icons/fa';
import { useSortBy, useTable } from 'react-table';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { useDeleteFridgeItemsMutation } from 'redux/services/fridge';
import { updateFridgeItems } from 'redux/slices/fridge';
import { FridgeItem } from 'types/fridge.type';
import { fridgeItemColumns } from 'utils/fridge';
import ItemModal from './ItemModal';

interface FridgeItemsTableProps {
  data: FridgeItem[];
}

const FridgeItemsTable = ({ data }: FridgeItemsTableProps) => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const { fridges } = useAppSelector((state) => state.fridge);
  const [deleteFridgeItems, { data: deleteData, isLoading: deleteLoading }] =
    useDeleteFridgeItemsMutation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (deleteData) {
      dispatch(updateFridgeItems(deleteData));
      setDeleteModalOpen(false);
    }
  }, [deleteData]);

  useEffect(() => {
    if (!editModalOpen && !deleteModalOpen) setActiveIndex(0);
  }, [editModalOpen, deleteModalOpen]);

  const colsWithSort: string[] = ['expiry', 'quantity'];

  const sortColsBy = useMemo(() => {
    return (
      colsWithSort?.map((col) => ({
        id: col,
        desc: true,
      })) || []
    );
  }, [colsWithSort]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<any>(
      {
        columns: fridgeItemColumns,
        data,
        //@ts-ignore
        initialState: { sortBy: sortColsBy },
        disableSortRemove: true,
      },
      useSortBy,
    );

  return (
    <TableContainer w={['100%', '85%', '75%']} mx="auto">
      <Table variant="striped" colorScheme="green" {...getTableProps()}>
        <Thead>
          {headerGroups?.map((headerGroup) => (
            <Tr {...headerGroup?.getHeaderGroupProps()}>
              {headerGroup?.headers?.map((column) => {
                const sortEnabled = colsWithSort.includes(column.id);
                const isSortedDesc = (column as any)?.isSortedDesc;

                return (
                  <Th
                    {...column?.getHeaderProps(
                      sortEnabled
                        ? (column as any)?.getSortByToggleProps({
                            title: `Sort by ${column.Header}`,
                          })
                        : undefined,
                    )}
                    position="relative"
                  >
                    {column?.render('Header')}

                    <Box position="absolute" top="13px" left="0">
                      {sortEnabled ? (
                        isSortedDesc ? (
                          <FaArrowUp d="inline-block" />
                        ) : (
                          <FaArrowDown d="inline-block" />
                        )
                      ) : null}
                    </Box>
                  </Th>
                );
              })}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {rows?.map((row, index) => {
            prepareRow(row);
            console.log(rows);

            return (
              <Tr {...row?.getRowProps()}>
                {row?.cells?.map((cell) => {
                  return (
                    <Td {...cell?.getCellProps()}>{cell?.render('Cell')}</Td>
                  );
                })}

                <Td>
                  <IconButton
                    icon={<FaEdit />}
                    aria-label="Edit item"
                    onClick={() => {
                      setEditModalOpen(true);
                      setActiveIndex(index);
                    }}
                  />
                </Td>

                <Td>
                  <IconButton
                    icon={<FaTrash />}
                    aria-label="Delete item"
                    onClick={() => {
                      setDeleteModalOpen(true);
                      setActiveIndex(index);
                    }}
                  />
                </Td>
              </Tr>
            );
          })}

          <ItemModal
            action="edit"
            isOpen={editModalOpen}
            item={rows[activeIndex]?.original}
            onClose={() => setEditModalOpen(false)}
          />
          <ConfirmModal
            isOpen={deleteModalOpen}
            header="Delete Item?"
            warning="Items cannot be recovered once they have been deleted"
            isLoading={deleteLoading}
            colorScheme="red"
            cta="Delete"
            onClose={() => setDeleteModalOpen(false)}
            primaryAction={() =>
              deleteFridgeItems({
                fridgeId: fridges[0]._id,
                body: [rows[activeIndex]?.original?._id],
              })
            }
          />
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default FridgeItemsTable;
