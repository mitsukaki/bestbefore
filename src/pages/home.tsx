import SEO from 'components/global/SEO';
import { Routes } from 'types/global.type';

const HomePage = () => {
  return (
    <>
      <SEO prefix="Home" path={Routes.home} />
      Home page
    </>
  );
};

export default HomePage;
