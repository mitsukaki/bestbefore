import SEO from 'components/global/SEO';
import { Routes } from 'types/global.type';

const LoginPage = () => {
  return (
    <>
      <SEO prefix="Login" path={Routes.login} />
      Login page
    </>
  );
};

export default LoginPage;
