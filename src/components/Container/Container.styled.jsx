import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding-left: ${props => props.theme.spacing(4)};
  padding-right: ${props => props.theme.spacing(4)};
  max-width: ${props => props.theme.spacing(300)};
  min-width: ${props => props.theme.spacing(80)};
`;
