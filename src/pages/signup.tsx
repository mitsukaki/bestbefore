import { Routes } from 'types/global.type';
import SEO from 'components/global/SEO';
import SignUpContainer from 'containers/auth/SignUp';

const SignUpPage = () => {
  return (
    <>
      <SEO prefix="SignUp" path={Routes.signUp} />
      <SignUpContainer />
    </>
  );
};

export default SignUpPage;
