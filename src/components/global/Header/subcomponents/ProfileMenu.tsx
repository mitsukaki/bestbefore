import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue,
} from '@chakra-ui/react';
// import { useEffect } from 'react';
import { Routes } from 'types/global.type';
// import { useLogoutMutation } from 'redux/services/auth';
import { LogoutIcon, UserIcon } from 'components/global/CustomIcons';
import useStorage from 'hooks/useStorage';

const ProfileMenu = () => {
  //   const [logout, { data }] = useLogoutMutation();
  const { removeStorageValue } = useStorage();
  const iconColor = useColorModeValue('black', 'white');

  //   useEffect(() => {
  //     if (data) {
  //       logout();
  //     }
  //   }, [data]);

  const logout = () => {
    removeStorageValue('isLoggedIn');
    removeStorageValue('user');
    removeStorageValue('token');
    window.location.href = Routes.login;
  };

  return (
    <Menu>
      <MenuButton as={IconButton} rounded="full">
        <UserIcon />
      </MenuButton>

      <MenuList>
        <MenuItem
          icon={<LogoutIcon color={iconColor} />}
          onClick={() => logout()}
        >
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
