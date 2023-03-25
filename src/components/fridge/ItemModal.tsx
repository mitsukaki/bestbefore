import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal';
import { Button, Stack } from '@chakra-ui/react';
import FormInput from 'components/global/FormInput';

interface ItemModalProps {
  action: 'add' | 'edit';
  isOpen: boolean;
  isLoading: boolean;
  onClose: () => void;
}

const ItemModal = ({ action, isOpen, isLoading, onClose }: ItemModalProps) => {
  const isAdd = action === 'add';

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm" isCentered>
      <ModalOverlay />
      <ModalContent textAlign="center" mx={['4', '0']}>
        <ModalHeader>{`${isAdd ? 'Add' : 'Edit'} Item`}</ModalHeader>
        <ModalBody>
          <Stack spacing="4">
            <FormInput name="name" label="Name" />
            <FormInput name="quantity" label="Quantity" type="number" />
            <FormInput name="expiry" label="Expiry Date" type="date" />
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button
            mt="2"
            w="100%"
            colorScheme="green"
            bg="green.500"
            color="white"
            isLoading={isLoading}
          >
            {isAdd ? 'Add' : 'Save changes'}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ItemModal;
