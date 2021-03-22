import { addFlexbox, addFont } from '@/utils/styleFun';
import styled from 'styled-components';

export const ListStyled = styled.div`
  width: 90%;
  height: 500px;
  margin-top: 40px;
  box-sizing: border-box;

  .header_list {
    width: 100%;
    ${addFlexbox('row', 'center', 'space-between')};

    .title {
      font-size: 20pt;
      ${addFont('Bold')};
    }

    .orderMode {
      font-size: 13pt;
      ${addFont()};
      color: gray;
    }
  }
`;

export const ListOf = styled.ul`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  list-style: none;
  flex-wrap: wrap;
  box-sizing: border-box;
  grid-gap: 40px;
`;

export const CardBookStyled = styled.li`
  width: 100%;
  height: 350px;
  box-sizing: border-box;
  margin-top: 30px;

  .cover {
    width: 100%;
    height: 80%;
    background: url(./cover.jpg) no-repeat;
    background-position: center top;
    background-size: cover;
    border-radius: 5px;
  }

  .title {
    font-size: 13pt;
    ${addFont('Bold')};
    margin-top: 10px;
  }

  .author {
    font-size: 11pt;
    ${addFont()};
    line-height: 5px;
  }

  .owner {
    ${addFlexbox('row', 'flex-start', 'flex-start')};

    p {
      font-size: 10pt;
      ${addFont('Medium')};
      height: 100%;
      margin-left: 5px;
    }

    .avatar {
      width: 20px;
      height: 20px;
      border-radius: 100%;
      border: 1px solid gray;
      background: url('./avatar.jpg');
      background-position: center top;
      background-size: 100%;
    }
  }
`;
