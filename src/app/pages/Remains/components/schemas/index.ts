import * as Yup from 'yup';

export const gruopsValidationSchema = Yup.object({
  fullname: Yup.string().required('Full Name is required'),
  phone: Yup.string().required('Phone is required'),
  role: Yup.string().required('Role is required'),
  password: Yup.string().required('Password is required'),
});
