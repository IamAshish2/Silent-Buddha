import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .min(3, 'Username must contain at least 3 characters'),
    email:yup.string().email("Enter a valid email").required("Email cannot be empty"),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must contain at least 8 characters'),
  checkbox: yup
    .boolean()
    .oneOf([true], 'You must agree to all Terms and Conditions'),
});


export const loginSchema = yup.object().shape({
  email:yup.string().email("Enter a valid email").required("Email cannot be empty"),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must contain at least 8 characters'),
})