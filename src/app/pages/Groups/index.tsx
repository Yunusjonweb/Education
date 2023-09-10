import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { UserPlusIcon } from '@heroicons/react/24/outline';
import PageHeader from 'app/components/PageHeader';
import Button from 'UI/Button';
import Search from 'app/components/Search';
import CreateModal from './components/Create';
import Table from 'app/components/Table/index';
import { GridActionsCellItem } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';

const columns = [
  {
    field: 'id',
    headerName: 'ID Student',
    type: 'string',
    width: 100,
    align: 'left',
    headerAlign: 'left',
    editable: true,
  },
  {
    field: 'date',
    headerName: 'Date',
    type: 'string',
    width: 100,
    align: 'left',
    headerAlign: 'left',
    editable: true,
  },
  {
    field: 'manager',
    headerName: 'Manager',
    type: 'string',
    width: 100,
    align: 'left',
    headerAlign: 'left',
    editable: true,
  },
  {
    field: 'status',
    headerName: 'Status',
    type: 'string',
    width: 100,
    align: 'left',
    headerAlign: 'left',
    editable: true,
  },
  {
    field: 'course',
    headerName: 'Course',
    type: 'string',
    width: 100,
    align: 'left',
    headerAlign: 'left',
    editable: true,
  },
  { field: 'name', headerName: 'Full Name', width: 180, editable: true },
  {
    field: 'phoneNumber',
    headerName: 'Phone Number',
    type: 'string',
    width: 180,
    editable: true,
  },
  {
    field: 'nearbyNumber',
    headerName: 'Nearby phone Number',
    width: 220,
    editable: true,
  },
  {
    field: 'studyInfo',
    headerName: 'Study/Work',
    type: 'string',
    width: 180,
    editable: true,
  },
  {
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
    id: 'ID0000001',
    name: 'Xabibullayev Yunusbek',
    date: '20/05/2006',
    manager: "O'rinboy",
    status: 'Progress',
    course: 'ILTES',
    phoneNumber: '+998992512475',
    nearbyNumber: '+998994161100',
    studyInfo: '18-maktab',
  },
  {
    id: 'ID0000001',
    name: 'Xabibullayev Yunusbek',
    date: '20/05/2006',
    manager: "O'rinboy",
    status: 'Progress',
    course: 'ILTES',
    phoneNumber: '+998992512475',
    nearbyNumber: '+998994161100',
    studyInfo: '18-maktab',
  },
  {
    id: 'ID0000001',
    name: 'Xabibullayev Yunusbek',
    date: '20/05/2006',
    manager: "O'rinboy",
    status: 'Progress',
    course: 'ILTES',
    phoneNumber: '+998992512475',
    nearbyNumber: '+998994161100',
    studyInfo: '18-maktab',
  },
];

export default function Groups() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isUpdateVisible, setIsUpdateVisible] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');

  return (
    <>
      <PageHeader title="Groups">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <Search onSearch={(value: string) => setSearch(value)} />
          <Button leftIcon={UserPlusIcon} onClick={() => setIsVisible(true)}>
            {t('Create Groups')}
          </Button>
        </div>
        <Table rows={tableData} columns={columns} />
      </PageHeader>
      <CreateModal
        isVisible={isVisible}
        handleClose={() => setIsVisible(false)}
      />
    </>
  );
}
