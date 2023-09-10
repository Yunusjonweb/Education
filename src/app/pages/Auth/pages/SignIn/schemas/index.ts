import * as Yup from 'yup';

export const signInValidationSchema = Yup.object({
  email: Yup.string().required('Email is required'),
  password: Yup.string()
    .min(5, 'Password must be 6 digits long or more')
    .required('Password is required'),
});
