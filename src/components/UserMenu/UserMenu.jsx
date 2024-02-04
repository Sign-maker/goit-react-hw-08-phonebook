import { useAuth } from 'hooks/useAuth';

import { Button, Flex, message } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const { user, logOut, isAuthLoading } = useAuth();

  const handleClick = async () => {
    try {
      await logOut();
      message.success(`Logout was succesfull`);
    } catch (error) {
      message.error(`Unable to logout`);
    }
  };

  return (
    <Flex align="center" gap="middle">
      <span className={css.span}>{user.email}</span>
      <Button
        type="primary"
        icon={<LogoutOutlined />}
        loading={isAuthLoading}
        htmlType="submit"
        onClick={handleClick}
      >
        Logout
      </Button>
    </Flex>
  );
};
