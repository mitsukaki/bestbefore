import { Heading, HStack, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Routes } from 'types/global.type';
import ColorModeSwitcher from '../ColorModeSwitcher';
import AuthButton from './subcomponents/AuthButton';

const Header = () => {
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
        <ColorModeSwitcher justifySelf="flex-end" />
        <AuthButton type="login" />
        <AuthButton type="signUp" />
      </Stack>
    </HStack>
  );
};

export default Header;
