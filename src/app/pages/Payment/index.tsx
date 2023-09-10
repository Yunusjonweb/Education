import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { UserGroupIcon } from '@heroicons/react/24/outline';
import PageHeader from 'app/components/PageHeader';
import Button from 'UI/Button';
import Search from 'app/components/Search';
import Table from 'app/components/Table';

export default function Payment() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [isUpdateVisible, setIsUpdateVisible] = useState(false);
  const [search, setSearch] = useState<string>('');

  return (
    <>
      <PageHeader title="Payment">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <Search onSearch={value => setSearch(value)} />
          <Button leftIcon={UserGroupIcon} onClick={() => setIsVisible(true)}>
            {t('Payment')}
          </Button>
        </div>
      </PageHeader>
    </>
  );
}
