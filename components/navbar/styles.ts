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

  @media (min-width: 1630px) {
    padding-left: 10%;
    padding-right: 10%;
    height: 100px;
  }

  @media (min-width: 2050px) {
    padding-left: 14%;
    padding-right: 14%;
    height: 130px;
  }

  @media (min-width: 2500px) {
    padding-left: 18%;
    padding-right: 18%;
    height: 160px;
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
  margin: 0;
  padding: 0;

  @media (min-width: 1630px) {
    font-size: 25pt;
  }

  @media (min-width: 2050px) {
    font-size: 30pt;
  }

  @media (min-width: 2500px) {
    font-size: 35pt;
  }
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

  @media (min-width: 1630px) {
    width: 120px;
    height: 45px;
  }
`;

export const SearchStyled = styled.div`
  width: 400px;
  height: 35px;
  border-radius: 5px;
  background: #f4f7f8;
  transition: 0.5s;
  padding-left: 15px;
  padding-right: 15px;

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

  @media (min-width: 1630px) {
    width: 500px;
    height: 40px;
  }

  @media (min-width: 2050px) {
    height: 50px;
    width: 600px;
  }

  @media (min-width: 2500px) {
    height: 60px;
    width: 700px;
  }

  .ant-input-group-wrapper,
  .ant-input-wrapper {
    width: 100%;
    height: 100%;
  }

  svg {
    width: 15px;
    height: 15px;

    @media (min-width: 1630px) {
      width: 19px;
      height: 19px;
    }

    @media (min-width: 1800px) {
      width: 23px;
      height: 23px;
    }

    @media (min-width: 2050px) {
      width: 26px;
      height: 26px;
    }
  }

  .ant-input {
    border: none;
    outline: none;
    background: transparent;
    height: 100%;
    font-size: 10pt;
    color: black;
    ${addFont()};
    padding-left: 10px;
    padding-right: 10px;

    @media (min-width: 1630px) {
      font-size: 11pt;
    }

    @media (min-width: 2050px) {
      font-size: 12.5pt;
    }

    @media (min-width: 2500px) {
      font-size: 14pt;
    }
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

  @media (min-width: 1630px) {
    margin-right: 20px;
  }

  @media (min-width: 1800px) {
    margin-right: 25px;
  }

  @media (min-width: 2050px) {
    margin-right: 30px;
  }

  svg {
    fill: black;
    width: 20px;
    height: 20px;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
      fill: gray;
    }

    @media (min-width: 1630px) {
      width: 27px;
      height: 27px;
    }

    @media (min-width: 1800px) {
      width: 30px;
      height: 30px;
    }

    @media (min-width: 2050px) {
      width: 35px;
      height: 35px;
    }
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

    @media (min-width: 1630px) {
      width: 270px;
      top: 45px;
      border-radius: 10px;
      padding: 15px;
    }

    @media (min-width: 1800px) {
      width: 280px;
      top: 50px;
      border-radius: 15px;
      padding: 20px;
    }

    @media (min-width: 2050px) {
      width: 300px;
      top: 53px;
      border-radius: 20px;
      padding: 20px;
    }

    li {
      width: 100%;
      padding: 10px;
      border-radius: 5px;
      color: white;
      ${addFont()};
      font-size: 11pt;
      background: #7b13ff;
      margin-bottom: 10px;

      @media (min-width: 1630px) {
        font-size: 12pt;
      }

      @media (min-width: 1800px) {
        font-size: 13pt;
      }

      @media (min-width: 2050px) {
        font-size: 14pt;
      }

      .nameL {
        ${addFont('Bold')};
      }

      .active_status {
        width: 10px;
        height: 10px;
        border-radius: 100%;
        background-color: #d61b6a;
        margin-left: 10px;

        @media (min-width: 1630px) {
          width: 15px;
          height: 15px;
        }

        @media (min-width: 1800px) {
          width: 20px;
          height: 20px;
        }

        @media (min-width: 2050px) {
          width: 25px;
          height: 25px;
        }
      }
    }
  }
`;
