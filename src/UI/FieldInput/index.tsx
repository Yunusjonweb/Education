import React from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  field: any;
  label?: string;
  type?: string;
  form: {
    touched: any[];
    errors: any[];
  };
  placeholder?: string;
}

const FieldInput = ({
  field,
  label,
  type = 'text',
  form: { touched, errors },
  placeholder = '',
  ...props
}: Props) => {
  const { t } = useTranslation();

  return (
    <div className="space-y-3">
      <div className="mt-3">
        {label && (
          <label className="block mb-2 text-sm font-sans text-gray-900 dark:text-gray-50">
            {t(label)}
          </label>
        )}
        <input
          type={type}
          {...field}
          {...props}
          placeholder={t(placeholder)}
          className={
            touched[field.name] && errors[field.name]
              ? 'bg-red-50 border-2 border-red-400 text-red-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-red-500 dark:placeholder-red-400 dark:text-white'
              : 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400'
          }
        />
      </div>
      {touched[field.name] && errors[field.name] && (
        <div className="block mt-2 text-xs font-medium text-red-400 dark:text-red-400">
          {t(errors[field.name])}
        </div>
      )}
    </div>
  );
};

export default FieldInput;
