import { addFlexbox, addFont, btnReset } from '@/utils/styleFun';
import styled from 'styled-components';

export const NavbarStyled = styled.div`
  width: 100%;

  ${addFlexbox('row', 'center', 'space-between')};
  padding-left: 5%;
  padding-right: 5%;
  box-sizing: border-box;
  padding-top: 30px;

  .buttons_g {
  }
`;

export const Logo = styled.h1`
  font-size: 18pt;
  color: black;
  ${addFont('Bold')};
`;

export const ButtonAccount = styled.button`
  width: 100px;
  height: 40px;
  ${addFont()};
  font-size: 11pt;
  border-radius: 10px;
  ${btnReset()};
  background-color: aquamarine;
  margin-left: 20px;
  cursor: pointer;
`;
