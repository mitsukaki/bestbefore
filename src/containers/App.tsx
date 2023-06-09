import { Routes } from 'types/global.type';
import { ChakraProvider, theme } from '@chakra-ui/react';
import {
  Route,
  Routes as BrowserRoutes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useEffect } from 'react';
import { authRoutes } from 'utils/auth';
import { protectedRoutes } from 'utils/global';
import HomePage from 'pages/home';
import useAuth from 'hooks/useAuth';
import LoginPage from 'pages/login';
import AboutPage from 'pages/about';
import SignUpPage from 'pages/signup';
import Layout from 'components/global/Layout';

const App = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof isLoggedIn !== 'boolean') return;

    const isAuthRoute = authRoutes.includes(location.pathname as Routes);
    const isProtectedRoute = protectedRoutes.includes(
      location.pathname as Routes,
    );

    if (isLoggedIn && isAuthRoute) {
      navigate(Routes.home);
    } else if (!isLoggedIn && isProtectedRoute) {
      navigate(Routes.aboutUs);
    }
  }, [isLoggedIn, location]);

  if (typeof isLoggedIn !== 'boolean') {
    return null;
  }

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <BrowserRoutes>
          <Route path={Routes.home} element={<HomePage />} />
          <Route path={Routes.login} element={<LoginPage />} />
          <Route path={Routes.signUp} element={<SignUpPage />} />
          <Route path={Routes.aboutUs} element={<AboutPage />} />
        </BrowserRoutes>
      </Layout>
    </ChakraProvider>
  );
};

export default App;
