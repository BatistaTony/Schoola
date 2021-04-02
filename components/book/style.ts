import { addFont } from '@/utils/styleFun';
import styled from 'styled-components';

export const BookContainerStyled = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: repeat(2, auto);
  padding-left: 13%;
  padding-right: 13%;
  box-sizing: border-box;
  margin-top: 5%;
  margin-bottom: 5%;
`;

export const Cover = styled.div<{ cover: string | null }>`
  width: 280px;
  height: 400px;
  border-radius: 10px;
  background: blue;
  background: url('/cover.jpg') no-repeat;
  background-size: cover;
  background-position: center top;
  transform: perspective(600px) rotateY(35deg) rotateX(45deg);
  border: 1px solid red;
`;

export const InfoBook = styled.div`
  width: 100%;
  height: 400px;

  .title {
    font-size: 30pt;
    color: black;
    width: 70%;
    ${addFont('Medium')};
  }

  .author,
  .year {
    font-size: 20pt;
    color: gray;
    ${addFont()};
  }

  .user {
    width: 100%;
    height: auto;
  }
`;

export const ReviewBookStyled = styled.div`
  width: 100%;
  grid-column: 1/3;
  height: auto;
  margin-top: 5%;

  .text {
    font-size: 12pt;
    color: gray;
    ${addFont()};
  }
`;
