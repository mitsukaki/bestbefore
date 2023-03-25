import { Routes } from 'types/global.type';
import SEO from 'components/global/SEO';
import LoginContainer from 'containers/auth/Login';

const LoginPage = () => {
  return (
    <>
      <SEO prefix="Login" path={Routes.login} />
      <LoginContainer />
    </>
  );
};

export default LoginPage;
