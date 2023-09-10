import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { AUTH_ROUTES, MAIN_ROUTES, SIDEBAR_ROUTES } from 'routes';
import Sidebar from './components/Sidebar';
import Container from 'UI/Container';
import { useAppSelector } from 'hooks/Redux';
import paths from 'constants/routePaths';
import Loader from './components/Loader';

export function App() {
  const { i18n } = useTranslation();
  const auth = useAppSelector(state => state.auth);

  if (!true) {
    return (
      <BrowserRouter>
        <Helmet
          titleTemplate="%s - React Boilerplate"
          defaultTitle="React Boilerplate"
          htmlAttributes={{ lang: i18n.language }}
        >
          <meta name="description" content="A React Boilerplate application" />
        </Helmet>
        <div className="bg-gray-50 dark:bg-gray-900 flex-1 overflow-auto">
          <React.Suspense fallback="Loading...">
            <Routes>
              {AUTH_ROUTES.map(item => {
                const { path, element: Component } = item;
                return <Route key={path} path={path} element={<Component />} />;
              })}
              <Route
                path="*"
                element={<Navigate to={paths.SIGN_IN} replace />}
              />
            </Routes>
          </React.Suspense>
          <GlobalStyle />
        </div>
        {auth.loading && <Loader />}
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <div className="flex">
        <div className="w-64 max-[640px]:w-20">
          <Sidebar />
        </div>
        <div className="bg-gray-50 dark:bg-gray-900 flex-1 overflow-auto">
          <Container>
            <React.Suspense fallback="Loading...">
              <Routes>
                {[...SIDEBAR_ROUTES, ...MAIN_ROUTES].map(item => {
                  const { path, element: Component } = item;
                  return (
                    <Route key={path} path={path} element={<Component />} />
                  );
                })}
                <Route
                  path="/"
                  element={<Navigate to={paths.DASHBOARD} replace />}
                />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </React.Suspense>
          </Container>
        </div>
      </div>
      {auth.loading && <Loader />}
      <GlobalStyle />
    </BrowserRouter>
  );
}
