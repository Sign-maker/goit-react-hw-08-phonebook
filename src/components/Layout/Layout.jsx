import { AppBar } from 'components/AppBar/AppBar';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Suspense fallback={<p>Component loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
