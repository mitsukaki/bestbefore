import { createIcon } from '@chakra-ui/react';

export const UserIcon = createIcon({
  displayName: 'UserIcon',
  viewBox: '0 0 512 512',
  path: (
    <path d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"></path>
  ),
});

export const LogoutIcon = createIcon({
  displayName: 'LogoutIcon',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path d="M17 8l-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4-4-4zM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5z"></path>
    </>
  ),
});
