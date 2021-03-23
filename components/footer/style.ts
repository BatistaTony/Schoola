import { addFlexbox, addFont } from '@/utils/styleFun';
import styled from 'styled-components';

export const FooterStyled = styled.div`
  width: 100%;
  height: 100px;
  background: black;
  ${addFlexbox('row', 'center', 'center')};

  p {
    color: white;
    ${addFont()};
    font-size: 12pt;
    margin: 0;
  }
`;
