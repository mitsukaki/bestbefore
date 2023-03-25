import { Formik } from 'formik';
import { useEffect } from 'react';
import { signUpSchema } from 'validators/authSchemas';
import { useSignUpMutation } from 'redux/services/auth';
import useAuth from 'hooks/useAuth';
import SignUpForm from 'components/auth/SignUpForm';
import getErrorMessage from 'utils/getErrorMessage';

const SignUpContainer = () => {
  const [signUp, { data, error, isLoading }] = useSignUpMutation();
  const { updateAuthState } = useAuth();

  useEffect(() => {
    if (data) {
      updateAuthState(data);
    }
  });

  return (
    <Formik
      initialValues={{ email: '', password: '', username: '' }}
      onSubmit={signUp}
      validationSchema={signUpSchema}
    >
      <SignUpForm error={getErrorMessage(error)} isLoading={isLoading} />
    </Formik>
  );
};

export default SignUpContainer;
