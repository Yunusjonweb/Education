import {
  BanknotesIcon,
  ChatBubbleLeftEllipsisIcon,
  EllipsisVerticalIcon,
  ShoppingCartIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import { GridActionsCellItem } from '@mui/x-data-grid';
import AreaCharts from 'app/components/Charts/AreaChart';
import BarCharts from 'app/components/Charts/BarChart';
import Table from 'app/components/Table';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Input from 'UI/Input';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import FinishIcon from '../../../assets/icon/finish.svg';
import MedalIcon from '../../../assets/icon/medal.svg';
import SchoolIcon from '../../../assets/icon/school.svg';
import StadionIcon from '../../../assets/icon/stadion.svg';

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

const Dashboard = () => {
  const { t } = useTranslation();
  const [selectedDate, setSelectedDate] = useState('');

  const statistics = [
    {
      label: 'Students',
      value: 40,
      icon: <UserGroupIcon className="w-8 h-8 text-pink-300 font-bold" />,
    },
    {
      label: 'Awards',
      value: 2780000,
      icon: <BanknotesIcon className="w-8 h-8 text-blue-300" />,
    },
    {
      label: 'Department',
      value: 376,
      icon: <ShoppingCartIcon className="w-8 h-8 text-green-300" />,
    },
    {
      label: 'Revenue',
      value: 35,
      icon: <ChatBubbleLeftEllipsisIcon className="w-8 h-8 text-orange-300" />,
    },
  ];

  return (
    <section className="dashboard">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-10">
        <h2 className="text-3xl text-gray-900 dark:text-white">
          {t('Dashboard')}
        </h2>
        <Input
          type="date"
          placeholder="Select a date"
          value={selectedDate}
          onChange={setSelectedDate}
          className="w-52"
        />
      </div>
      <div className="flex gap-4 flex-wrap">
        {statistics?.map(item => (
          <div className="min-w-[220px] flex items-center justify-center flex-col gap-1 flex-1 p-4 rounded-lg bg-white shadow dark:bg-gray-800">
            <div className="flex items-center justify-around">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-14 w-14 text-blue-600 bg-blue-100 rounded-full mr-6">
                {item?.icon}
              </div>
              <div>
                <span className="block text-gray-500">{item?.label}</span>
                <span className="block text-2xl font-semibold">
                  {item?.value}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <AreaCharts />
        <BarCharts />
      </div>
      <div className="flex justify-between">
        <div className="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow mt-5 sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h5 className="text-lg font-semibold leading-none text-gray-900 dark:text-white">
              Star Students
            </h5>
            <button
              id="dropdownButton"
              data-dropdown-toggle="dropdown"
              className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
              type="button"
            >
              <EllipsisVerticalIcon className="w-5 h-5" />
            </button>
          </div>
          <Table rows={tableData} columns={columns} />
        </div>
        <div className="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow mt-5 sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h5 className="text-lg font-semibold leading-none text-gray-900 dark:text-white">
              Student Activity
            </h5>
            <button
              id="dropdownButton"
              data-dropdown-toggle="dropdown"
              className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
              type="button"
            >
              <EllipsisVerticalIcon className="w-5 h-5" />
            </button>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded">
                  <img src={FinishIcon} alt="finish image" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-base">1st place in "Chess”</h3>
                  <p className="text-sm">John Doe won 1st place in "Chess"</p>
                </div>
              </div>
              <div>
                <span className="bg-pink-100 text-gray-600 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                  1 Day ago
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded">
                  <img src={StadionIcon} alt="stadion image" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-base">1st place in "Chess”</h3>
                  <p className="text-sm">John Doe won 1st place in "Chess"</p>
                </div>
              </div>
              <div>
                <span className="bg-pink-100 text-gray-600 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                  2 Hourse ago
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded">
                  <img src={SchoolIcon} alt="school image" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-base">1st place in "Chess”</h3>
                  <p className="text-sm">John Doe won 1st place in "Chess"</p>
                </div>
              </div>
              <div>
                <span className="bg-pink-100 text-gray-600 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                  3 Week ago
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded">
                  <img src={MedalIcon} alt="medal image" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-base">1st place in "Chess”</h3>
                  <p className="text-sm">John Doe won 1st place in "Chess"</p>
                </div>
              </div>
              <div>
                <span className="bg-pink-100 text-gray-600 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                  3 Week ago
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
