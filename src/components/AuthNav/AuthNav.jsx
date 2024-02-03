import React from 'react';
import { AuthNavContainer } from './AuthNav.styled';
import { StyledLink } from 'components/StyledLink/StyledLink.styled';

export const AuthNav = () => {
  return (
    <AuthNavContainer>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Login</StyledLink>
    </AuthNavContainer>
  );
};
