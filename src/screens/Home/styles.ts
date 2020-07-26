import styled from 'styled-components';
import { Grid, Header } from 'semantic-ui-react';

export const MainHeader = styled(Grid)`
  background: orange;
  margin-bottom: 30px !important;
  padding-bottom: 0 !important;
  padding-top: 30px !important;
`;

export const CellPadded = styled.span`
  padding-left: 10px;
  padding-right: 10px;
`;

export const Title = styled(Header)`
  text-transform: UPPERCASE;
  letter-spacing: .2rem;
  color: #fff !important;
  font-size: 2.5rem !important;
`;