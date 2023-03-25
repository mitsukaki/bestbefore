import { Formik } from 'formik';
import { useEffect } from 'react';
import { Routes } from 'types/global.type';
import { useNavigate } from 'react-router-dom';
import { signUpSchema } from 'validators/authSchemas';
import { useSignUpMutation } from 'redux/services/auth';
import SignUpForm from 'components/auth/SignUpForm';
import getErrorMessage from 'utils/getErrorMessage';
import useAuth from 'hooks/useAuth';

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
