import React, { useEffect } from 'react';
import FieldInput from 'UI/FieldInput';
import { Formik, Field, Form } from 'formik';
import { useTranslation } from 'react-i18next';
import Button from 'UI/Button';
import { signInValidationSchema } from './schemas';
import Container from 'UI/Container';
import { Link, useNavigate } from 'react-router-dom';
import paths from 'constants/routePaths';
import { useDispatch } from 'react-redux';
import { useMutation } from 'react-query';
import { signInAction } from 'store/slices/auth';
import axios from 'utils/axios';

const SignIn = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    mutate: signIn,
    isSuccess,
    isError,
    data,
  } = useMutation(user => {
    return axios.post('login', user);
  });

  const handleFinish = (values: any) => {
    signIn(values);
  };

  useEffect(() => {
    if (isSuccess && !isError && !data?.data?.errors) {
      dispatch(signInAction({ token: data?.data?.token }));
      navigate(paths?.MAIN);
    }
  }, [isSuccess, isError, data]);

  console.log(data, 1);

  return (
    <section className="flex items-center justify-center h-screen flex-1">
      <div className="max-w-lg flex-1">
        <Container className="flex flex-col justify-center">
          <h3 className="text-gray-900 dark:text-white text-4xl mb-4">
            {t('Sign In')}
          </h3>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(false);
              handleFinish(values);
            }}
            validationSchema={signInValidationSchema}
          >
            {props => {
              const { values, handleChange, handleBlur, handleSubmit } = props;
              return (
                <Form onSubmit={handleSubmit} className="space-y-6">
                  <Field
                    type="email"
                    name="email"
                    label="Email"
                    placeholder="Email"
                    component={FieldInput}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Field
                    type="password"
                    name="password"
                    label="Password"
                    placeholder="Password"
                    component={FieldInput}
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Link
                    to={paths.FORGOT_PASSWORD}
                    className="text-gray-900 dark:text-gray-200 text-right w-full block text-sm"
                  >
                    {t('Forgot Password?')}
                  </Link>
                  <Button className="w-full">{t('Sign In')}</Button>
                </Form>
              );
            }}
          </Formik>
        </Container>
      </div>
    </section>
  );
};

export default SignIn;
