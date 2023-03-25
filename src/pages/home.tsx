import SEO from 'components/global/SEO';
import AddItemContainer from 'containers/fridge/AddItem';
import { Routes } from 'types/global.type';

const HomePage = () => {
  return (
    <>
      <SEO prefix="Home" path={Routes.home} />
      <AddItemContainer />
    </>
  );
};

export default HomePage;
