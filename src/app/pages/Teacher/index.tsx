import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  EllipsisVerticalIcon,
  UserPlusIcon,
} from '@heroicons/react/24/outline';
import PageHeader from 'app/components/PageHeader';
import Button from 'UI/Button';
import Search from 'app/components/Search';
import Profile from '../../../assets/images/profile-bg.jpg';
import Mentor from '../../../assets/images/teacher.jpg';

export default function Teacher(): JSX.Element {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');

  return (
    <>
      <PageHeader title="Teacher Details">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <Search onSearch={(value: string) => setSearch(value)} />
          <Button leftIcon={UserPlusIcon} onClick={() => setIsVisible(true)}>
            {t('Create Teacher')}
          </Button>
        </div>
      </PageHeader>
      <div className="w-full h-fit p-6 rounded-lg shadow bg-white">
        <div className="flex items-center justify-between">
          <div className="text-3xl font-medium text-gray-900 dark:text-white max-[640px]:text-2xl">
            Profile
          </div>
          <button>
            <EllipsisVerticalIcon className="w-6 h-6" />
          </button>
        </div>
        <div>
          <img
            src={Profile}
            alt="Profile image"
            className="rounded-lg w-full mt-6"
          />
        </div>
      </div>
    </>
  );
}
