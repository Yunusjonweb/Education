import React from 'react';
import { useTranslation } from 'react-i18next';

interface IInputProps {
  placeholder?: string;
  value?: string | number;
  name?: string;
  type?: string;
  className?: string;
  disabled?: boolean;
  maxLength?: number;
  onChange?: any;
  style?: any;
  label?: string;
  onBlur?: any;
  error?: any;
}

const Input = ({
  placeholder,
  value,
  name,
  type = 'text',
  className,
  disabled = false,
  maxLength,
  onChange,
  style,
  label,
  onBlur,
}: IInputProps) => {
  const { t } = useTranslation();

  return (
    <div>
      {label && (
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-sans text-gray-900 dark:text-gray-50"
        >
          {t(label ?? '')}
        </label>
      )}
      <input
        disabled={disabled}
        maxLength={maxLength}
        type={type}
        name={name}
        value={value}
        id={name}
        style={style}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${className}`}
        placeholder={placeholder}
        onChange={e => (onChange ? onChange(e?.target?.value) : null)}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
