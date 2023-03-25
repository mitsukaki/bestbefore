import * as Yup from 'yup';

const email = Yup.string()
  .email('Email must be a valid email address')
  .required('Required');

const password = Yup.string()
  .required('Required')
  .min(8, 'Password must contain at least 8 characters');

export const loginSchema = Yup.object({
  email,
  password,
});

export const signUpSchema = Yup.object({
  email,
  password,
  username: Yup.string().required('Required'),
});
