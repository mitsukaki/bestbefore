import SEO from 'components/global/SEO';
import { Routes } from 'types/global.type';

const AboutPage = () => {
  return (
    <>
      <SEO prefix="About Us" path={Routes.aboutUs} />
    </>
  );
};

export default AboutPage;
