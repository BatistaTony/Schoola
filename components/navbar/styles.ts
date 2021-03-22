import { addFlexbox, addFont, btnReset } from '@/utils/styleFun';
import styled from 'styled-components';

export const NavbarStyled = styled.div`
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
  box-sizing: border-box;
  padding-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;
  align-items: center;
  transition: 0.5s;

  @media (max-width: 1025px) {
    grid-template-columns: 50% 50%;
  }

  .buttons_g {
    width: 100%;
    ${addFlexbox('row', 'center', 'flex-end')};
  }
`;

export const Logo = styled.h1`
  font-size: 18pt;
  color: black;
  height: 100%;
  ${addFont('Bold')};
  ${addFlexbox('row', 'center', 'flex-start')};
  width: 100%;
`;

export const ButtonAccount = styled.button`
  width: 100px;
  height: 35px;
  ${addFont('Medium')};
  font-size: 11pt;
  border-radius: 5px;
  ${btnReset()};
  background: #7b13ff;
  color: white;
  margin-left: 20px;
  cursor: pointer;
`;

export const SearchStyled = styled.div`
  width: 400px;
  height: 35px;
  border-radius: 5px;
  background: #f4f7f8;
  transition: 0.5s;

  @media (max-width: 1025px) {
    grid-row: 2/2;
    grid-column: 1/1;
    margin-top: 10px;
  }

  @media (max-width: 750px) {
    margin-top: 30px;
  }

  @media (max-width: 650px) {
    grid-column: 1/3;
    width: 100%;
  }

  .ant-input-group-wrapper,
  .ant-input-wrapper {
    width: 100%;
    height: 100%;
  }

  .ant-input {
    border: none;
    outline: none;
    background: transparent;
    height: 100%;
    font-size: 10pt;
    color: black;
    ${addFont()};
  }

  .ant-input-group-addon {
    background: transparent;

    .ant-btn {
      ${btnReset()};
      background: transparent;
    }
  }
`;
