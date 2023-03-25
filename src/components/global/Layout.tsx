import Header from './Header';
import { Box } from '@chakra-ui/react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box textAlign="center" fontSize="xl">
      <Header />
      {children}
    </Box>
  );
};

export default Layout;
