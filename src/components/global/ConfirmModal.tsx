import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal';
import { Button } from '@chakra-ui/button';

interface ConfirmModalProps {
  isOpen: boolean;
  header: string;
  warning: string;
  loading: boolean;
  colorScheme: string;
  cta: string;
  onClose: () => void;
  primaryAction: () => void;
}

function ConfirmModal({
  isOpen,
  header,
  colorScheme,
  loading,
  warning,
  cta,
  onClose,
  primaryAction,
}: ConfirmModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm" isCentered>
      <ModalOverlay />
      <ModalContent textAlign="center" mx={['4', '0']}>
        <ModalHeader>{header}</ModalHeader>
        <ModalBody>{warning}</ModalBody>
        <ModalFooter>
          <Button onClick={onClose} mr="4">
            Cancel
          </Button>
          <Button
            colorScheme={colorScheme}
            onClick={primaryAction}
            isLoading={loading}
          >
            {cta}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ConfirmModal;
