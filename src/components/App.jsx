import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';

import { useAuth } from 'hooks/useAuth';
import { RestrictedRoute } from './RestricredRoute';
import { PrivateRoute } from './PrivateRoute';
import { message } from 'antd';
import { Layout } from './Layout/Layout';
import { routes } from 'constants/routes';

const Home = lazy(() => import('pages/Home/Home'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));

export const App = () => {
  const { refreshUser, isRefreshing } = useAuth();

  useEffect(() => {
    refreshUser().catch(() => {
      message.error(`Please login or register`);
    });
  }, [refreshUser]);

  return isRefreshing ? (
    <p>Refreshing user data</p>
  ) : (
    <Routes>
      <Route path={routes.HOME} element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path={routes.CONTACTS}
          element={
            <PrivateRoute redirectTo={routes.LOGIN} component={<Contacts />} />
          }
        />
        <Route
          path={routes.REGISTER}
          element={
            <RestrictedRoute
              redirectTo={routes.CONTACTS}
              component={<Register />}
            />
          }
        />
        <Route
          path={routes.LOGIN}
          element={
            <RestrictedRoute
              redirectTo={routes.CONTACTS}
              component={<Login />}
            />
          }
        />
      </Route>
      <Route path="*" element={<Navigate to={routes.HOME} />} />
    </Routes>
  );
};
