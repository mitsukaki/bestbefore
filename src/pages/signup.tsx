import SEO from 'components/global/SEO';
import { Routes } from 'types/global.type';

const SignUpPage = () => {
  return (
    <>
      <SEO prefix="SignUp" path={Routes.signUp} />
      Sign Up page
    </>
  );
};

export default SignUpPage;
