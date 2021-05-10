import React, { Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Loader from '../Components/Loader';

// import ContactPage from '../pages/ContactPage'


const HomePage = lazy(
  () => import('../pages/HomePage') /* webpackChunkName: "HomePage" */,
);
const ContactPage = lazy(
  () =>
    import('../pages/ContactPage') /* webpackChunkName: "ContactPage" */,
);
const LoginPage = lazy(
  () => import('../pages/LoginPage') /* webpackChunkName: "RegisterPage" */,
);
const RegisterPage = lazy(
  () => import('../pages/RegisterPage') /* webpackChunkName: "LoginPage" */,
);

const Pages = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <PublicRoute path="/" exact component={HomePage} />
        <PrivateRoute
          path="/contacts"
          component={ContactPage}
          redirectTo="/login"
        />
        <PublicRoute
          path="/register"
          component={RegisterPage}
          restricted
          redirectTo="/contacts"
        />
        <PublicRoute
          path="/login"
          component={LoginPage}
          restricted
          redirectTo="/contacts"
        />
      </Switch>
    </Suspense>
  );
};

export default Pages;
