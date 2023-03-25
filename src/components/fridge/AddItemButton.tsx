import { IconButton, useDisclosure } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import ItemModal from './ItemModal';

const AddItemButton = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <IconButton icon={<FaPlus />} aria-label="Add item" onClick={onOpen} />
      <ItemModal action="add" isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default AddItemButton;
