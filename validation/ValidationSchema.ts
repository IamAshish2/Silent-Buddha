import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
    username: yup
    .string()
    .required('Username is required').min(3, 'Username must contain at least 3 characters'),
    email: yup
    .string()
    .required('Email is required')
    .email('Invalid email'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must contain at least 8 characters'),
})