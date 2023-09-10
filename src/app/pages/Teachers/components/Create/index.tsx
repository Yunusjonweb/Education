import React, { useEffect } from 'react';
import Button from 'UI/Button';
import FieldInput from 'UI/FieldInput';
import { Formik, Field, Form } from 'formik';
import Modal from 'UI/Modal';
import { useTranslation } from 'react-i18next';
import { useMutation } from 'react-query';
import axios from 'utils/axios';
import { toast } from 'react-toastify';
import { gruopsValidationSchema } from '../schemas';

interface Props {
  isVisible: boolean;
  refetch: () => void;
  handleClose: () => void;
}

function CreateModal({ isVisible, refetch, handleClose }: Props) {
  const { t } = useTranslation();

  const {
    mutate: createUser,
    isSuccess,
    isError,
    data,
  } = useMutation(user => {
    return axios.post('/users/create', user);
  });

  const handleCreate = async (values: any) => {
    createUser(values);
  };

  useEffect(() => {
    if (isSuccess && !isError && !data?.data?.errors) {
      handleClose();
      refetch();
      toast.success(t('Group successfully created')?.toString());
    }
  }, [isSuccess, isError, data]);

  if (!isVisible) return null;

  return (
    <Modal
      modalTitle="Create a group"
      isVisible={isVisible}
      onClose={() => handleClose()}
    >
      <div className="px-2 py-2 lg:px-8">
        <Formik
          initialValues={{
            fullname: '',
            birth_date: '',
            phone: '+998',
            address: '',
            passport: '',
          }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            handleCreate(values);
          }}
          validationSchema={gruopsValidationSchema}
        >
          {props => {
            const { values, handleChange, handleBlur, handleSubmit } = props;
            return (
              <Form onSubmit={handleSubmit} className="space-y-6">
                <Field
                  name="fullname"
                  label="Full Name"
                  placeholder="John Doe"
                  component={FieldInput}
                  value={values.fullname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
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
                <Field
                  type="date"
                  label="Date of birth"
                  name="birth_date"
                  component={FieldInput}
                  value={values.birth_date}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Field
                  label="Address"
                  name="address"
                  placeholder="Address"
                  component={FieldInput}
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Button className="w-full">{t('Create')}</Button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </Modal>
  );
}

export default CreateModal;
