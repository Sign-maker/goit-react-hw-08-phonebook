import React from 'react';
import { UserContainer } from './UserMenu.styled';
import { useAuth } from 'hooks/useAuth';

export const UserMenu = () => {
  const { user, logOut } = useAuth();

  return (
    <UserContainer>
      <p>{user.email}</p>
      <button type="button" onClick={logOut}>
        Logout
      </button>
    </UserContainer>
  );
};
