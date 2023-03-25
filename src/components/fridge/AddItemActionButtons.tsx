import { HStack } from '@chakra-ui/react';
import AddItemButton from './AddItemButton';
import ScanReceiptButton from './ScanReceiptButton';

const AddItemActionButtons = () => {
  return (
    <HStack w="100%" justify="flex-end">
      <AddItemButton />
      <ScanReceiptButton />
    </HStack>
  );
};

export default AddItemActionButtons;
