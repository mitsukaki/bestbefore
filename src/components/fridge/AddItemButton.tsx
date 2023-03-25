import { IconButton, useDisclosure } from '@chakra-ui/react';
import { AddIcon } from 'components/global/CustomIcons';
import { useFormikContext } from 'formik';
import { useEffect } from 'react';
import ItemModal from './ItemModal';

interface AddItemButtonProps {
  isLoading: boolean;
  isSuccess: boolean;
}

const AddItemButton = ({ isLoading, isSuccess }: AddItemButtonProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { resetForm } = useFormikContext();

  useEffect(() => {
    if (isSuccess) {
      resetForm();
      onClose();
    }
  }, [isSuccess]);

  return (
    <>
      <IconButton icon={<AddIcon />} aria-label="Add item" onClick={onOpen} />
      <ItemModal
        action="add"
        isOpen={isOpen}
        onClose={onClose}
        isLoading={isLoading}
      />
    </>
  );
};

export default AddItemButton;
