import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  title: string;
  children?: ReactNode;
  className?: string;
}

const PageHeader = ({ title, children, className }: Props) => {
  const { t } = useTranslation();

  return (
    <div
      className={`${className} flex justify-between items-center gap-5 flex-wrap mb-8`}
    >
      <h1 className="text-3xl font-medium text-gray-900 dark:text-white max-[640px]:text-2xl">
        {t(title)}
      </h1>
      {children}
    </div>
  );
};

export default PageHeader;
