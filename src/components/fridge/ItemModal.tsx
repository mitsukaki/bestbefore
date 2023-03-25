import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal';
import { v4 as uuid } from 'uuid';
import { useEffect } from 'react';
import { Form, Formik } from 'formik';
import { FridgeItem } from 'types/fridge.type';
import { Button, Stack } from '@chakra-ui/react';
import { updateFridgeItems } from 'redux/slices/fridge';
import { addItemSchema } from 'validators/fridgeSchemas';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { useUpsertFridgeItemsMutation } from 'redux/services/fridge';
import FormInput from 'components/global/FormInput';

interface ItemModalProps {
  action: 'add' | 'edit';
  isOpen: boolean;
  item?: FridgeItem;
  onClose: () => void;
}

const ItemModal = ({ action, isOpen, item, onClose }: ItemModalProps) => {
  const { fridges } = useAppSelector((state) => state.fridge);
  const [upsertItem, { data, isLoading }] = useUpsertFridgeItemsMutation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(updateFridgeItems(data));
      onClose();
    }
  }, [data]);

  const isAdd = action === 'add';

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm" isCentered>
      <ModalOverlay />
      <ModalContent textAlign="center" mx={['4', '0']}>
        <Formik
          initialValues={
            item || { _id: uuid(), name: '', quantity: 0, expiry: '' }
          }
          onSubmit={(values) => {
            upsertItem({
              fridgeId: fridges[0]._id,
              body: [{ ...values, expiry: values.expiry || null }],
            });
          }}
          validationSchema={addItemSchema}
        >
          <Form>
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
                type="submit"
                isLoading={isLoading}
              >
                {isAdd ? 'Add' : 'Save changes'}
              </Button>
            </ModalFooter>
          </Form>
        </Formik>
      </ModalContent>
    </Modal>
  );
};

export default ItemModal;
