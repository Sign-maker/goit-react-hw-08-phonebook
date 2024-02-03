import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  padding-top: ${props => props.theme.spacing(3)};
  padding-bottom: ${props => props.theme.spacing(3)};
  position: relative;

  &:is(:hover, :focus) {
    /* transform: scale(1.02); */
  }
  transition: transform ${props => props.theme.transition};

  &.active {
    color: ${props => props.theme.colors.accent};
  }
  &.active::after {
    content: '';
    position: absolute;
    bottom: ${props => props.theme.spacing(1)};
    left: 0;
    width: 100%;
    height: ${props => props.theme.spacing(0.25)};
    background-color: ${props => props.theme.colors.accent};
  }
`;
