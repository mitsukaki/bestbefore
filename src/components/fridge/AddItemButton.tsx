import { IconButton, useDisclosure } from '@chakra-ui/react';
import { AddIcon } from 'components/global/CustomIcons';
import ItemModal from './ItemModal';

const AddItemButton = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <IconButton icon={<AddIcon />} aria-label="Add item" onClick={onOpen} />
      <ItemModal action="add" isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default AddItemButton;
