import { Formik } from 'formik';
import { useEffect } from 'react';
import { Routes } from 'types/global.type';
import { useNavigate } from 'react-router-dom';
import { loginSchema } from 'validators/authSchemas';
import { useLoginMutation } from 'redux/services/auth';
import LoginForm from 'components/auth/LoginForm';
import getErrorMessage from 'utils/getErrorMessage';
import useAuth from 'hooks/useAuth';

const LoginContainer = () => {
  const [login, { data, error, isLoading }] = useLoginMutation();
  const { updateAuthState } = useAuth();

  useEffect(() => {
    if (data) {
      updateAuthState(data);
    }
  });

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={login}
      validationSchema={loginSchema}
    >
      <LoginForm error={getErrorMessage(error)} isLoading={isLoading} />
    </Formik>
  );
};

export default LoginContainer;
