import { useEffect } from 'react';
import { Spinner } from '@chakra-ui/react';
import { updateFridgeItems } from 'redux/slices/fridge';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { useLazyFridgeItemsQuery } from 'redux/services/fridge';
import FridgeItemsTable from 'components/fridge/FridgeItemsTable';

const FridgeItemsContainer = () => {
  const { fridges } = useAppSelector((state) => state.fridge);
  const [fetchFridgeItems, { data, isLoading }] = useLazyFridgeItemsQuery();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (fridges[0]) {
      fetchFridgeItems(fridges[0]._id);
    }
  }, [fridges]);

  useEffect(() => {
    if (data) {
      dispatch(updateFridgeItems(data));
    }
  }, [data]);

  return (
    <>
      {isLoading ? (
        <Spinner colorScheme="green" />
      ) : (
        <FridgeItemsTable data={fridges[0].items} />
      )}
    </>
  );
};

export default FridgeItemsContainer;
