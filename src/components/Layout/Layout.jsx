import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AppBar } from 'components/AppBar/AppBar';
import { Layout as AntLayout, Spin } from 'antd';
import css from './Layout.module.css';

export const Layout = () => {
  const { Header, Content } = AntLayout;
  return (
    <AntLayout className={css.layout}>
      <Header className={`container ${css.header}`}>
        <AppBar />
      </Header>
      <Content>
        <Suspense
          fallback={
            <Spin tip="Loading" size="large">
              <div></div>
            </Spin>
          }
        >
          <Outlet />
        </Suspense>
      </Content>
    </AntLayout>
  );
};
