import { Routes } from 'types/global.type';
import SEO from 'components/global/SEO';
import FridgeItemsContainer from 'containers/fridge/FridgeItems';
import AddItemActionButtons from 'components/fridge/AddItemActionButtons';

const HomePage = () => {
  return (
    <>
      <SEO prefix="Home" path={Routes.home} />
      <AddItemActionButtons />
      <FridgeItemsContainer />
    </>
  );
};

export default HomePage;
