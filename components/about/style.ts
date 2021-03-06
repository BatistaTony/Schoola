import { addFlexbox, addFont } from '@/utils/styleFun';
import styled from 'styled-components';

export const AboutStyled = styled.div`
  width: 100%;
  height: 600px;
  background: linear-gradient(to right, #d61b6a, #f6e7dc);
  ${addFlexbox()};

  @media (max-width: 830px) {
    height: auto;
    padding-top: 5%;
    padding-bottom: 50px;
  }

  @media (min-width: 1630px) {
    height: 650px;
  }

  @media (min-width: 1800px) {
    height: 750px;
  }

  @media (min-width: 2100px) {
    height: 900px;
  }
`;

export const ListCard = styled.div`
  width: 70%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  grid-gap: 50px;

  @media (max-width: 1200px) {
    width: 80%;
  }

  @media (max-width: 1100px) {
    width: 90%;
  }

  @media (max-width: 980px) {
    width: 95%;
  }

  @media (max-width: 860px) {
    grid-gap: 30px;
  }

  @media (max-width: 830px) {
    grid-template-columns: repeat(2, 1fr);
    width: 80%;
  }

  @media (max-width: 750px) {
    width: 90%;
  }

  @media (max-width: 610px) {
    grid-template-columns: repeat(1, 100%);
    width: 90%;
  }

  @media (min-width: 1630px) {
    width: 65%;
  }

  @media (min-width: 1800px) {
    width: 60%;
  }

  @media (min-width: 2100px) {
    width: 45%;
  }

  @media (min-width: 2600px) {
    width: 40%;
  }
`;

export const CardStoryStyled = styled.div`
  width: 100%;
  height: 450px;
  background: white;
  border-radius: 10px;
  ${addFlexbox('column', 'center', 'center')};

  &:nth-child(2) {
    transform: scale(1.1);

    @media (max-width: 830px) {
      transform: scale(1);
      grid-row: 1/3;
    }

    @media (max-width: 610px) {
      grid-row: 2/2;
    }
  }

  @media (max-width: 610px) {
    height: auto;
    padding-top: 7%;
    padding-bottom: 7%;
  }

  .ilust {
    width: 7rem;
    margin-bottom: 10px;

    @media (min-width: 1630px) {
      width: 9rem;
      margin-bottom: 20px;
    }

    @media (min-width: 1800px) {
      margin-bottom: 25px;
      width: 10rem;
    }
  }

  .title {
    width: 90%;
    font-size: 13pt;
    ${addFont('Medium')};
    text-align: center;

    @media (min-width: 1630px) {
      font-size: 14pt;
    }

    @media (min-width: 1800px) {
      font-size: 16pt;
    }
  }

  .text {
    width: 90%;
    font-size: 11pt;
    ${addFont()};
    text-align: center;

    @media (max-width: 1000px) {
      font-size: 10pt;
    }

    @media (min-width: 1630px) {
      font-size: 12pt;
    }

    @media (min-width: 1800px) {
      font-size: 13pt;
    }
  }
`;
