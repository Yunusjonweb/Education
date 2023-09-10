import { XMarkIcon } from '@heroicons/react/24/outline';
import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  dataSource?: any[];
  isVisible?: boolean;
  onClose: () => void;
  modalTitle?: string;
  children?: ReactNode;
}

function Modal({
  dataSource,
  isVisible,
  onClose,
  modalTitle = 'Modal',
  children,
}: Props) {
  const { t } = useTranslation();
  if (isVisible) {
    console.log(dataSource);
  }
  if (!isVisible) return null;

  const handleClose = e => {
    if (e.target.id === 'wrapper') onClose();
  };

  return (
    <div
      id="wrapper"
      aria-hidden="true"
      onClick={handleClose}
      className="fixed top-0 left-0 right-0 flex justify-center items-center z-40 bg-black bg-opacity-25 backdrop-blur p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-0rem)] max-h-full"
    >
      <div className="relative w-full max-w-lg max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="authentication-modal"
            onClick={onClose}
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
              {t(modalTitle)}
            </h3>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
