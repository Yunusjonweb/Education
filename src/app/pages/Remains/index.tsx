import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { UserGroupIcon } from '@heroicons/react/24/outline';
import PageHeader from 'app/components/PageHeader';
import Button from 'UI/Button';
import Search from 'app/components/Search';
import Table from 'app/components/Table/index';
import { GridActionsCellItem } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';

const columns = [
  {
    id: 1,
    field: 'fullName',
    headerName: 'Full Name',
    type: 'string',
    width: 200,
    align: 'left',
    headerAlign: 'left',
    editable: true,
  },
  {
    id: 2,
    field: 'phoneNumber',
    headerName: 'Phone Number',
    type: 'string',
    width: 140,
    align: 'left',
    headerAlign: 'left',
    editable: true,
  },
  {
    id: 3,
    field: 'homeNumber',
    headerName: 'Home Phone Number',
    type: 'string',
    width: 140,
    align: 'left',
    headerAlign: 'left',
    editable: true,
  },
  {
    id: 4,
    field: 'remains',
    headerName: 'Remains',
    type: 'string',
    width: 100,
    align: 'left',
    headerAlign: 'left',
    editable: true,
  },
  {
    id: 5,
    field: 'status',
    headerName: 'Status',
    type: 'string',
    width: 100,
    align: 'left',
    headerAlign: 'left',
    editable: true,
  },
  {
    id: 6,
    field: 'note',
    headerName: 'Note',
    type: 'string',
    width: 100,
    align: 'left',
    headerAlign: 'left',
    editable: true,
  },
  {
    id: 7,
    field: 'actions',
    type: 'actions',
    headerName: 'Actions',
    width: 100,
    cellClassName: 'actions',
    getActions: ({ id }) => {
      return [
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Edit"
          className="textPrimary"
          color="inherit"
        />,
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          color="inherit"
        />,
      ];
    },
  },
];

const tableData = [
  {
    id: 1,
    fullName: 'Xabibullayev Yunusbek',
    status: 'Progress',
    phoneNumber: '+998992512475',
    homeNumber: '+998994161100',
    remains: '800',
    note: 'Good',
  },
  {
    id: 2,
    fullName: 'Xabibullayev Yunusbek',
    status: 'Progress',
    phoneNumber: '+998992512475',
    homeNumber: '+998994161100',
    remains: '800',
    note: 'Good',
  },
  {
    id: 3,
    fullName: 'Xabibullayev Yunusbek',
    status: 'Progress',
    phoneNumber: '+998992512475',
    homeNumber: '+998994161100',
    remains: '800',
    note: 'Good',
  },
  {
    id: 4,
    fullName: 'Xabibullayev Yunusbek',
    status: 'Progress',
    phoneNumber: '+998992512475',
    homeNumber: '+998994161100',
    remains: '800',
    note: 'Good',
  },
];

export default function Remains() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [isUpdateVisible, setIsUpdateVisible] = useState(false);
  const [search, setSearch] = useState<string>('');

  return (
    <>
      <PageHeader title="Remains">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <Search onSearch={value => setSearch(value)} />
          <Button leftIcon={UserGroupIcon} onClick={() => setIsVisible(true)}>
            {t('Remains')}
          </Button>
        </div>
        <Table rows={tableData} columns={columns} />
      </PageHeader>
    </>
  );
}
