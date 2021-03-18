import { addFlexbox, addFont, btnReset } from '@/utils/styleFun';
import styled from 'styled-components';

export const HeroStyled = styled.div`
  width: 90%;
  height: auto;
  background: black;
  border-radius: 10px;
  ${addFlexbox('row', 'center', 'space-between')};
  box-sizing: border-box;
  padding-left: 5%;
  padding-right: 5%;
  background: linear-gradient(to right, #d61b6a, #7b13ff);
  margin-top: 50px;

  .illustration_ {
    width: 380px;
    height: 380px;
  }
`;

export const PresentationDiv = styled.div`
  width: 60%;

  .title {
    ${addFont('Bold')};
    font-size: 27pt;
    color: white;
  }

  .presentation_text {
    ${addFont()};
    font-size: 13pt;
    color: white;
  }

  .btn_presentation {
    ${btnReset()};
    border-radius: 10px;
    background: #7b13ff;
    ${addFont()};
    width: 170px;
    height: 40px;
    color: white;
    font-size: 12pt;
    cursor: pointer;
  }
`;
