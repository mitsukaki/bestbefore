import { Routes } from 'types/global.type';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Route, Routes as BrowserRoutes } from 'react-router-dom';
import HomePage from 'pages/home';
import Layout from 'components/global/Layout';
import LoginPage from 'pages/login';
import SignUpPage from 'pages/signup';

const App = () => (
  <ChakraProvider theme={theme}>
    <Layout>
      <BrowserRoutes>
        <Route path={Routes.home} element={<HomePage />} />
        <Route path={Routes.login} element={<LoginPage />} />
        <Route path={Routes.signUp} element={<SignUpPage />} />
      </BrowserRoutes>
    </Layout>
  </ChakraProvider>
);

export default App;
