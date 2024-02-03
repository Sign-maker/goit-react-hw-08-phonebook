import { Container } from 'components/Container/Container.styled';
import styled from 'styled-components';

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${props => props.theme.spacing(15)};
  border-bottom: ${props => props.theme.spacing(0.25)} solid black;
`;
