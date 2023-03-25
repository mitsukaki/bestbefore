import SEO from 'components/global/SEO';
import AboutUs from 'components/about/AboutUs';
import AboutApp from 'components/about/AboutApp';
import { Grid, GridItem, SimpleGrid, Box } from '@chakra-ui/react';
import { Routes } from 'types/global.type';

const AboutPage = () => {
  return (
    <>
      <SEO prefix="About Us" path={Routes.aboutUs} />
      <SimpleGrid
        columns={2}
        spacing="auto"
        padding="2em"
        display="flex"
        align-items="center"
        justify-content="center"
      >
        <AboutUs />
        <AboutApp />
      </SimpleGrid>
    </>
  );
};

export default AboutPage;
