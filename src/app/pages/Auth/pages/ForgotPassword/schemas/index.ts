import * as Yup from 'yup';

export const forgotPasswordValidation = Yup.object({
  phone: Yup.string()
    .max(13, 'Phone number must be 13 digits long')
    .min(13, 'Phone number must be 13 digits long')
    .required('Phone number is required'),
});
