import React from 'react';
import { useTranslation } from 'react-i18next';
import { SIDEBAR_ROUTES } from 'routes';
import { useLocation, useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import Button from 'UI/Button';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import { logOut } from 'store/slices/auth';

const Sidebar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 max-[640px]:w-20 h-screen"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
          <ul className="space-y-2">
            {SIDEBAR_ROUTES.map(item => {
              const { icon: Icon, path, label } = item;
              return (
                <li key={path} onClick={() => navigate(path)}>
                  <NavLink
                    to={path}
                    className={`flex items-center max-[640px]:justify-center p-2 ${
                      location.pathname === path
                        ? 'text-gray-800'
                        : 'text-white'
                    } rounded-lg ${
                      location.pathname === path
                        ? 'bg-yellow-400'
                        : 'bg-transparent hover:bg-blue-100 dark:hover:bg-transparent'
                    } group gap-2`}
                  >
                    <Icon
                      className={`w-6 h-6 font-medium ${
                        location.pathname === path
                          ? 'text-gray-800'
                          : 'text-white'
                      } transition duration-75`}
                    />
                    <span className="max-[640px]:hidden">{t(label)}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <Button
            type="outline"
            className="border-0 w-full max-[640px]:text-xs px-1 text-white mt-24"
            onClick={handleLogOut}
          >
            {t('Log Out')}
            <ArrowRightOnRectangleIcon className="w-6 h-6 max-[640px]:hidden" />
          </Button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
