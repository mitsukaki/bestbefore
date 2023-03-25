import { Form } from 'formik';
import { AuthFormProps } from 'types/auth.type';
import { Alert, AlertIcon, Button, Stack } from '@chakra-ui/react';

interface AuthFormWrapperProps extends AuthFormProps {
  submitCTA: string;
  children: React.ReactNode;
}

const AuthFormWrapper = ({
  error,
  submitCTA,
  isLoading,
  children,
}: AuthFormWrapperProps) => {
  return (
    <Stack
      as={Form}
      border="1px"
      borderColor="gray.300"
      px={['4', '8']}
      py="8"
      borderRadius={['md', 'lg']}
      w={['90%', '75%', '50%', '35%']}
      mx="auto"
      mt="8"
      spacing="4"
    >
      {error && (
        <Alert status="error" borderRadius="base">
          <AlertIcon />
          {error}
        </Alert>
      )}

      {children}

      <Button
        type="submit"
        w="100%"
        bg="green.400"
        color="white"
        _hover={{ bg: 'green.500' }}
        fontSize="1.05rem"
        letterSpacing="wide"
        isLoading={isLoading}
        borderRadius="base"
      >
        {submitCTA}
      </Button>
    </Stack>
  );
};

export default AuthFormWrapper;
