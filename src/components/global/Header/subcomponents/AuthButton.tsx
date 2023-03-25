import {
  Button,
  LightMode,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Routes } from 'types/global.type';

interface AuthButtonProps {
  type: 'login' | 'signUp';
}

const AuthButton = ({ type }: AuthButtonProps) => {
  const navigate = useNavigate();
  const loginTextColor = useColorModeValue('black', 'white');

  const isLogin = type === 'login';

  const goToAuthPage = () => {
    navigate(Routes[type]);
  };

  return (
    <Button
      onClick={goToAuthPage}
      variant={isLogin ? 'ghost' : 'solid'}
      bg={isLogin ? 'transparent' : 'green.400'}
      borderColor="green.400"
      color={isLogin ? loginTextColor : 'white'}
      _hover={{
        bg: isLogin ? 'transparent' : 'green.500',
        color: isLogin ? 'green.500' : 'white',
      }}
      borderRadius="base"
      w={['100%', '48%', '100%']}
    >
      {isLogin ? 'Log in' : 'Sign Up'}
    </Button>
  );
};

export default AuthButton;
