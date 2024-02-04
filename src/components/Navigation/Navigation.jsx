import { Link, NavLink, useLocation } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

import { Menu } from 'antd';
import { HomeOutlined, ContactsOutlined } from '@ant-design/icons';
import { routes } from 'constants/routes';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const selectedKey = useLocation().pathname;

  const menuItems = [
    {
      label: <NavLink to={routes.HOME}>Home</NavLink>,
      key: routes.HOME,
      icon: <HomeOutlined />,
    },
    isLoggedIn && {
      label: <Link to={routes.CONTACTS}>Contacts</Link>,
      key: routes.CONTACTS,
      icon: isLoggedIn && <ContactsOutlined />,
    },
  ];

  return (
    <>
      <nav>
        <Menu
          mode="horizontal"
          theme="dark"
          selectedKeys={[selectedKey]}
          disabledOverflow="true"
          items={menuItems}
          className={css.menu}
        ></Menu>
      </nav>
    </>
  );
};
