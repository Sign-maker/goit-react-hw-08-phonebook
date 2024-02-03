import React from 'react';
import { HeaderContainer } from './AppBar.styled';

import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header>
      <HeaderContainer>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </HeaderContainer>
    </header>
  );
};
