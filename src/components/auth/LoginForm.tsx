import { AuthFormProps } from 'types/auth.type';
import AuthFormWrapper from './AuthFormWrapper';
import FormInput from 'components/global/FormInput';

const LoginForm = (props: AuthFormProps) => {
  return (
    <AuthFormWrapper {...props} submitCTA="Log in">
      <FormInput name="email" label="Email address" type="email" />
      <FormInput name="password" label="Password" type="password" />
    </AuthFormWrapper>
  );
};

export default LoginForm;
