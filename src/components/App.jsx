import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

import { lazy, useEffect } from 'react';
import { RestrictedRoute } from './RestricredRoute';
import { PrivateRoute } from './PrivateRoute';
import { useAuth } from 'hooks/useAuth';
import { toast } from 'react-toastify';

const Home = lazy(() => import('pages/Home/Home'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));

export const App = () => {
  const { refreshUser, isRefreshing } = useAuth();

  useEffect(() => {
    async function refresh() {
      try {
        await refreshUser();
        // toast(`User succesfully refreshed`);
      } catch (error) {
        toast.error(`Please login or register`);
      }
    }
    refresh();
  }, [refreshUser]);

  return isRefreshing ? (
    <p>Refreshing user data</p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
      </Route>
      <Route path="*" element={<div>Page not found</div>} />
    </Routes>
  );

  // <Container>
  //   <Title>Phonebook</Title>
  //   <ContactForm />
  //   <Subtitle>Contacts</Subtitle>
  //   <Filter />
  //   <ContactList />
  //   <ToastContainer />
  // </Container>
};

// export const App = () => {
//   return (
//     <Container>
//       <Title>Phonebook</Title>
//       <ContactForm />
//       <Subtitle>Contacts</Subtitle>
//       <Filter />
//       <ContactList />
//       <ToastContainer />
//     </Container>
//   );
// };
