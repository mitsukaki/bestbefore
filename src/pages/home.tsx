import { Stack } from '@chakra-ui/react';
import { Routes } from 'types/global.type';
import SEO from 'components/global/SEO';
import FridgeItemsContainer from 'containers/fridge/FridgeItems';
import AddItemActionButtons from 'components/fridge/AddItemActionButtons';

const HomePage = () => {
  return (
    <>
      <SEO prefix="Home" path={Routes.home} />

      <Stack w={['100%', '85%', '75%']} mx="auto" spacing="4">
        <AddItemActionButtons />
        <FridgeItemsContainer />
      </Stack>
    </>
  );
};

export default HomePage;
