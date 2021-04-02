import { addFlexbox, addFont } from '@/utils/styleFun';
import styled from 'styled-components';

export const FooterStyled = styled.div`
  width: 100%;
  height: 100px;
  background: black;
  ${addFlexbox('row', 'center', 'center')};

  @media (min-width: 1630px) {
    height: 150px;
  }

  @media (min-width: 1800px) {
    height: 170px;
  }

  @media (min-width: 2500px) {
    height: 200px;
  }

  p {
    color: white;
    ${addFont()};
    font-size: 12pt;
    margin: 0;

    @media (min-width: 1630px) {
      font-size: 14pt;
    }

    @media (min-width: 1800px) {
      font-size: 15pt;
    }

    @media (min-width: 2500px) {
      font-size: 18pt;
    }
  }
`;
