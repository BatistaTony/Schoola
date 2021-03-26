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
  ${addFlexbox('row', 'flex-end', 'flex-start')};
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

  @media (max-width: 750px) {
    height: 30px;
    font-size: 10pt;
  }

  @media (max-width: 500px) {
    &:last-child {
      display: none;
    }
  }
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

export const UserMenuStyled = styled.div`
  width: auto;
  ${addFlexbox('row', 'center', 'flex-end')};
`;

export const NotificationStyled = styled.div`
  position: relative;
  margin-right: 15px;

  svg {
    fill: #d61b6a;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  .notifictionList {
    position: absolute;
    list-style: none;
    width: 250px;
    background: white;
    right: 0%;
    top: 40px;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    ${addFlexbox('column', 'center', 'flex-start')};
    padding-bottom: 20px;

    li {
      width: 100%;
      padding: 10px;
      border-radius: 5px;
      color: white;
      ${addFont()};
      font-size: 11pt;
      background: #7b13ff;
      margin-bottom: 10px;

      .nameL {
        ${addFont('Bold')};
      }

      .active_status {
        width: 10px;
        height: 10px;
        border-radius: 100%;
        background-color: #d61b6a;
        margin-left: 10px;
      }
    }
  }
`;
