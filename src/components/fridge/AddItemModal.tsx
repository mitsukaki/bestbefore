import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal';
import { Button } from '@chakra-ui/react';
import FormInput from 'components/global/FormInput';

interface ItemModalProps {
  action: 'add' | 'edit';
  isOpen: boolean;
  onClose: () => void;
}

const ItemModal = ({ action, isOpen, onClose }: ItemModalProps) => {
  const isAdd = action === 'add';

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm" isCentered>
      <ModalOverlay />
      <ModalContent textAlign="center" mx={['4', '0']}>
        <ModalHeader>{`${isAdd ? 'Add' : 'Edit'} Item`}</ModalHeader>
        <ModalBody>
          <FormInput name="name" label="Name" />
          <FormInput name="expiry" label="Expiry Date" type="date" />
          <FormInput name="quantity" label="Quantity" type="number" />
        </ModalBody>
        <ModalFooter>
          <Button bg="green.500">{isAdd ? 'Create' : 'Save changes'}</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ItemModal;
