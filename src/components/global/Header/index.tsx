import { Link } from 'react-router-dom';
import { Routes } from 'types/global.type';
import {
  Heading,
  HStack,
  Image,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import useAuth from 'hooks/useAuth';
import LogoDark from 'assets/logo-dark.png';
import LogoLight from 'assets/logo-light.png';
import ColorModeSwitcher from '../ColorModeSwitcher';
import AuthButton from './subcomponents/AuthButton';
import ProfileMenu from './subcomponents/ProfileMenu';

const Header = () => {
  const { isLoggedIn } = useAuth();
  const logo = useColorModeValue(LogoLight, LogoDark);

  return (
    <HStack h="90px" p="8" justify="space-between">
      <Heading>
        <Link to={Routes.home}>{<Image src={logo} w="125px" h="61px" />}</Link>
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

        <Link to={Routes.aboutUs}>About Us</Link>
      </Stack>
    </HStack>
  );
};

export default Header;
