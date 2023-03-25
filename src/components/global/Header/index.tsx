import { Link } from 'react-router-dom';
import { Routes } from 'types/global.type';
import { Heading, HStack, Stack } from '@chakra-ui/react';
import useAuth from 'hooks/useAuth';
import ColorModeSwitcher from '../ColorModeSwitcher';
import AuthButton from './subcomponents/AuthButton';
import ProfileMenu from './subcomponents/ProfileMenu';

const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HStack h="80px" p="8" justify="space-between">
      <Heading>
        <Link to={Routes.home}>BestBefore</Link>
      </Heading>

      <Stack
        align="center"
        spacing="2"
        justify="space-between"
        mt={['2', '4', '0']}
        direction={['column', 'row', 'row']}
      >
        <ColorModeSwitcher />

        {isLoggedIn ? (
          <ProfileMenu />
        ) : (
          <>
            <AuthButton type="login" />
            <AuthButton type="signUp" />
          </>
        )}
      </Stack>
    </HStack>
  );
};

export default Header;
