import React, { Fragment, ReactElement } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';
import { useTranslation } from 'react-i18next';

interface ItemType {
  icon?: ReactElement;
  label?: string;
  handleToggle?: () => void;
}

interface IDrowProps {
  dataSource: ItemType[];
  className?: string;
}

const Dropdown = ({ dataSource, className }: IDrowProps) => {
  const { t } = useTranslation();
  const classNames = (...classes: string[]): string => {
    return classes.filter(Boolean).join(' ');
  };

  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900">
            <EllipsisVerticalIcon className="w-7 h-7 text-gray-950 dark:text-white" />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-600">
            <div className="py-1">
              {dataSource?.map((item: ItemType) => (
                <Menu.Item key={item.label}>
                  {({ active }: { active: boolean }) => (
                    <li
                      className={classNames(
                        active
                          ? 'bg-gray-100 text-gray-900 dark:text-gray-900'
                          : 'text-gray-900 dark:text-white',
                        'flex gap-4 px-4 py-2 text-sm text-gray-900',
                      )}
                      onClick={() => item.handleToggle?.()}
                    >
                      {item?.icon} {t(`${item?.label}`)}
                    </li>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default Dropdown;
