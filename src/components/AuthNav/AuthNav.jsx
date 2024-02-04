import { Link, useLocation } from 'react-router-dom';

import { Menu } from 'antd';
import { LoginOutlined, FormOutlined } from '@ant-design/icons';
import { routes } from 'constants/routes';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  const selectedKey = useLocation().pathname;
  const menuItems = [
    {
      label: <Link to={routes.REGISTER}>Register</Link>,
      key: routes.REGISTER,
      icon: <FormOutlined />,
    },
    {
      label: <Link to={routes.LOGIN}>Login</Link>,
      key: routes.LOGIN,
      icon: <LoginOutlined />,
    },
  ];
  return (
    <div>
      <Menu
        mode="horizontal"
        theme="dark"
        selectedKeys={[selectedKey]}
        items={menuItems}
        disabledOverflow="true"
        className={css.menu}
      ></Menu>
    </div>
  );
};
