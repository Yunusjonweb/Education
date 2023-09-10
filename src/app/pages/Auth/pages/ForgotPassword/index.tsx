import React from 'react';
import FieldInput from 'UI/FieldInput';
import { Formik, Field, Form } from 'formik';
import { useTranslation } from 'react-i18next';
import Button from 'UI/Button';
import { forgotPasswordValidation } from './schemas';
import Container from 'UI/Container';
import { useNavigate } from 'react-router';
import paths from 'constants/routePaths';

const ForgotPassword = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleFinish = (values: any) => {
    // navigate(paths.VERIFY_CODE);
  };

  return (
    <section className="flex items-center justify-center h-screen flex-1">
      <div className="max-w-lg flex-1">
        <Container className="flex flex-col justify-center">
          <h3 className="text-gray-900 dark:text-white text-4xl mb-3">
            {t('Forgot Password?')}
          </h3>
          <p className="text-gray-700 dark:text-gray-100 mb-4 font-sans text-sm">
            {t(
              'Please enter your phone number, we will send an verify code to your phone.',
            )}
          </p>
          <Formik
            initialValues={{
              phone: '+998',
            }}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(false);
              handleFinish(values);
            }}
            validationSchema={forgotPasswordValidation}
          >
            {props => {
              const { values, handleChange, handleBlur, handleSubmit } = props;
              return (
                <Form onSubmit={handleSubmit} className="space-y-6">
                  <Field
                    type="tel"
                    name="phone"
                    label="Phone Number"
                    placeholder="Phone Number"
                    component={FieldInput}
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Button className="w-full">{t('Send Code')}</Button>
                </Form>
              );
            }}
          </Formik>
        </Container>
      </div>
    </section>
  );
};

export default ForgotPassword;
