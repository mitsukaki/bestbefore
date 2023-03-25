import {
  Box,
  Button,
  HStack,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { ScanIcon } from 'components/global/CustomIcons';
import {
  useUploadReceiptMutation,
  useUpsertFridgeItemsMutation,
} from 'redux/services/fridge';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { useEffect, useState } from 'react';
import { FridgeItem } from 'types/fridge.type';
import { updateFridgeItems } from 'redux/slices/fridge';
import { FaTrash } from 'react-icons/fa';

const ScanReceiptButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [fridgeItems, setFridgeItems] = useState<FridgeItem[]>([]);
  const { fridges } = useAppSelector((state) => state.fridge);
  const [upsertItems, { data, isLoading }] = useUpsertFridgeItemsMutation();
  const [uploadReceipt, { data: uploadData, isLoading: uploadLoading }] =
    useUploadReceiptMutation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (uploadData) {
      setFridgeItems(uploadData);
      onOpen();
    }
  }, [uploadData]);

  useEffect(() => {
    if (data) {
      dispatch(updateFridgeItems(data));
      onClose();
    }
  }, [data]);

  const uploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();

    if (event.target?.files?.length) {
      formData.append('scan', event.target.files[0]);

      uploadReceipt(formData);
    }
  };

  const addItems = () => {
    upsertItems({
      fridgeId: fridges[0]?._id,
      body: fridgeItems,
    });
  };

  const updateItem = (index: number, key: keyof FridgeItem, value: any) => {
    const updatedFridgeItems: FridgeItem[] = JSON.parse(
      JSON.stringify(fridgeItems),
    );

    //@ts-ignore
    updatedFridgeItems[index][key] = value;

    setFridgeItems(updatedFridgeItems);
  };

  const removeItem = (index: number) => {
    const updatedFridgeItems: FridgeItem[] = JSON.parse(
      JSON.stringify(fridgeItems),
    );

    updatedFridgeItems.splice(index, 1);

    setFridgeItems(updatedFridgeItems);
  };

  return (
    <>
      <Box position="relative">
        <IconButton
          icon={<ScanIcon cursor="pointer" />}
          aria-label="Scan receipt"
          isLoading={uploadLoading}
        />
        <Input
          type="file"
          onChange={uploadFile}
          accept=".jpg, .jpeg, .png"
          position="absolute"
          left="0"
          right="0"
          top="0"
          bottom="0"
          opacity="0"
          cursor="pointer"
          isDisabled={uploadLoading}
        />
      </Box>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
        scrollBehavior="inside"
        isCentered
      >
        <ModalOverlay />
        <ModalContent textAlign="center" mx={['4', '0']}>
          <ModalHeader>Add Items</ModalHeader>

          <ModalBody>
            <VStack spacing="4">
              {fridgeItems.map((item, index) => (
                <HStack spacing="4">
                  <Input
                    id="name"
                    borderRadius="base"
                    value={item.name}
                    onChange={(event) => {
                      updateItem(index, 'name', event.target.value);
                    }}
                  />
                  <Input
                    id="quantity"
                    borderRadius="base"
                    type="number"
                    value={item.quantity}
                    onChange={(event) => {
                      updateItem(index, 'quantity', event.target.value);
                    }}
                  />
                  <Input
                    id="expiry"
                    borderRadius="base"
                    type="date"
                    value={new Date(item.expiry as string)
                      .toLocaleDateString('en-CA')
                      .replaceAll('/', '-')}
                    onChange={(event) => {
                      updateItem(index, 'expiry', event.target.value);
                    }}
                  />

                  <IconButton
                    icon={<FaTrash />}
                    aria-label="Delete item"
                    onClick={() => removeItem(index)}
                  />
                </HStack>
              ))}
            </VStack>
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
              onClick={addItems}
            >
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ScanReceiptButton;
