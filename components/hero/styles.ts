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
  background: linear-gradient(to right, #d61b6a, #f6e7dc);
  margin-top: 30px;

  @media (max-width: 840px) {
    padding-top: 3%;
    padding-bottom: 3%;
  }

  @media (max-width: 650px) {
    background: linear-gradient(to right, #d61b6a, #d61b6a);
    padding-top: 5%;
    padding-bottom: 5%;
  }

  @media (min-width: 1630px) {
    width: 80%;
      margin-top: 40px;

  }

  @media (min-width: 2050px) {
    width: 72%;
    padding-top: 3.5%;
    padding-bottom: 3.5%;
  }

  .illustration_ {
    width: 380px;
    height: 380px;

    @media (max-width: 1210px) {
      width: 350px;
      height: 350px;
    }

    @media (max-width: 970px) {
      width: 280px;
      height: 280px;
    }

    @media (max-width: 840px) {
      width: 240px;
      height: 240px;
    }

    @media (max-width: 650px) {
      display: none;
    }

    @media (min-width: 1630px) {
      width: 395px;
      height: 395px;
    }

    @media (min-width: 2050px) {
      width: 440px;
      height: 440px;
    }
  }
`;

export const PresentationDiv = styled.div`
  width: 60%;

  @media (max-width: 970px) {
    width: 55%;
  }

  @media (max-width: 650px) {
    width: 100%;
  }

  @media (min-width: 2050px) {
    width: 50%;
  }

  .title {
    ${addFont('Bold')};
    font-size: 27pt;
    color: white;

    @media (max-width: 970px) {
      font-size: 22pt;
    }

    @media (max-width: 650px) {
      font-size: 18pt;
    }

    @media (min-width: 1630px) {
      font-size: 32pt;
    }

    @media (min-width: 2050px) {
      font-size: 30pt;
    }
  }

  .presentation_text {
    ${addFont()};
    font-size: 13pt;
    color: white;

    @media (max-width: 970px) {
      font-size: 11pt;
    }

    @media (max-width: 650px) {
      font-size: 10.5pt;
    }

    @media (min-width: 1630px) {
      font-size: 14pt;
    }

    @media (min-width: 2050px) {
      font-size: 15.5pt;
    }
  }

  .btn_presentation {
    ${btnReset()};
    border-radius: 10px;
    background: #7b13ff;
    ${addFont('Medium')};
    width: 170px;
    height: 40px;
    color: white;
    font-size: 12pt;
    cursor: pointer;

    @media (max-width: 970px) {
      font-size: 11pt;
      width: 150px;
      height: 35px;
    }

    @media (max-width: 650px) {
      width: 135px;
    }

    @media (min-width: 1630px) {
      width: 200px;
      height: 50px;
      font-size: 13pt;
    }

    @media (min-width: 2050px) {
      width: 220px;
      height: 55px;
      font-size: 14pt;
    }
  }
`;
