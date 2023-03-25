import { AuthFormProps } from 'types/auth.type';
import AuthFormWrapper from './AuthFormWrapper';
import FormInput from 'components/global/FormInput';

const SignUpForm = (props: AuthFormProps) => {
  return (
    <AuthFormWrapper {...props} submitCTA="Sign Up">
      <FormInput name="username" label="Username" />
      <FormInput name="email" label="Email address" type="email" />
      <FormInput name="password" label="Password" type="password" />
    </AuthFormWrapper>
  );
};

export default SignUpForm;
