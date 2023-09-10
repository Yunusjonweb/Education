import { FC } from 'react';
import paths from 'constants/routePaths';
import SignIn from 'app/pages/Auth/pages/SignIn';
import ForgotPassword from 'app/pages/Auth/pages/ForgotPassword';
import {
  CreditCardIcon,
  MapIcon,
  PresentationChartLineIcon,
  UserGroupIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import Dashboard from 'app/pages/Dashboard';
import Students from 'app/pages/Students';
import Groups from 'app/pages/Groups';
import Group from 'app/pages/Group';
import Payment from 'app/pages/Payment';
import Remains from 'app/pages/Remains';
import Maps from 'app/pages/Maps';
import Teachers from 'app/pages/Teachers';
import Teacher from 'app/pages/Teacher';

interface IRoute {
  path: string;
  element: FC | any;
}

interface ISidebarRoutes extends IRoute {
  icon: FC | any;
  label: string;
}

export const AUTH_ROUTES: IRoute[] = [
  {
    path: paths.SIGN_IN,
    element: SignIn,
  },
  {
    path: paths.FORGOT_PASSWORD,
    element: ForgotPassword,
  },
];

export const SIDEBAR_ROUTES: ISidebarRoutes[] = [
  {
    path: paths.DASHBOARD,
    element: Dashboard,
    icon: PresentationChartLineIcon,
    label: 'Dashboard',
  },
  {
    path: paths.STUDENTS,
    element: Students,
    icon: UserIcon,
    label: 'Students',
  },
  {
    path: paths.GROUPS,
    element: Groups,
    icon: UserGroupIcon,
    label: 'Groups',
  },
  {
    path: paths.GROUP,
    element: Group,
    icon: UserGroupIcon,
    label: 'Group',
  },
  {
    path: paths.MAPS,
    element: Maps,
    icon: MapIcon,
    label: 'Maps',
  },
  {
    path: paths.REMAINS,
    element: Remains,
    icon: CreditCardIcon,
    label: 'Remains',
  },
  {
    path: paths.TEACHERS,
    element: Teachers,
    icon: UserIcon,
    label: 'Teacher',
  },
  {
    path: paths.PAYMENT,
    element: Payment,
    icon: CreditCardIcon,
    label: 'Payment',
  },
];

export const MAIN_ROUTES: IRoute[] = [
  {
    path: paths.TEACHER,
    element: Teacher,
  },
];
