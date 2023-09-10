import React from 'react';
import { useTranslation } from 'react-i18next';

type Types = 'outline' | 'primary';

interface IButtonProps {
  children?: any;
  style?: any;
  label?: string;
  className?: string;
  onClick?: any;
  leftIcon?: any;
  rightIcon?: any;
  type?: Types;
}

const buttonTypes = {
  primary: 'bg-blue-700 text-white border-blue-700',
  outline:
    'bg-transparent text-gray-950 border-gray-600 hover:text-blue-700 hover:border-blue-700 dark:hover:text-blue-800 dark:hover:bg-blue-50 dark:hover:border-blue-900 hover:opacity-100 dark:text-gray-200 dark:border-gray-300',
};

const Button = ({
  label,
  children,
  className,
  style,
  onClick,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  type,
}: IButtonProps) => {
  const { t } = useTranslation();

  return (
    <button
      style={style}
      className={`flex items-center justify-center gap-2 border py-2.5 px-5 transition duration-150 hover:opacity-80 rounded-lg text-sm ${
        buttonTypes[type ?? 'primary']
      } ${className}`}
      onClick={onClick}
    >
      {LeftIcon && <LeftIcon className="w-5 h-5" />} {t(label ?? '')}{' '}
      {!label ? children : null}{' '}
      {RightIcon && <RightIcon className="w-5 h-5" />}
    </button>
  );
};

export default Button;
