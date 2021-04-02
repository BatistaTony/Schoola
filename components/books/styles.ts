import { addFlexbox, addFont } from '@/utils/styleFun';
import styled from 'styled-components';

export const ListStyled = styled.div`
  width: 90%;
  height: auto;
  margin-top: 40px;
  box-sizing: border-box;
  margin-bottom: 70px;

  @media (min-width: 1630px) {
    width: 80%;
    margin-bottom: 80px;
    margin-top: 50px;
  }

  @media (min-width: 2050px) {
    width: 72%;
    margin-bottom: 90px;
    margin-top: 60px;
  }

  @media (min-width: 2500px) {
    width: 64%;
  }

  .header_list {
    width: 100%;
    ${addFlexbox('row', 'center', 'space-between')};

    .title {
      font-size: 20pt;
      ${addFont('Bold')};

      @media (min-width: 1630px) {
        font-size: 23pt;
      }

      @media (min-width: 2050px) {
        font-size: 25pt;
      }

      @media (min-width: 2500px) {
        font-size: 30pt;
      }
    }

    .orderMode {
      font-size: 13pt;
      ${addFont()};
      color: gray;

      @media (min-width: 1630px) {
        font-size: 15pt;
      }

      @media (min-width: 2050px) {
        font-size: 17pt;
      }

      @media (min-width: 2500px) {
        font-size: 20pt;
      }
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

  @media (max-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 625px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CardBookStyled = styled.li`
  width: 100%;
  height: 350px;
  box-sizing: border-box;
  margin-top: 30px;

  @media (max-width: 450px) {
    height: 450px;
  }

  @media (min-width: 1800px) {
    height: 400px;
  }

  @media (min-width: 2050px) {
    height: 460px;
    margin-top: 40px;
  }

  @media (min-width: 2500px) {
    height: 540px;
    margin-top: 50px;
  }

  .title {
    font-size: 12pt;
    ${addFont('Medium')};
    margin-top: 10px;

    @media (min-width: 1630px) {
      font-size: 13pt;
    }

    @media (min-width: 1800px) {
      font-size: 14.5pt;
    }

    @media (min-width: 2050px) {
      font-size: 16pt;
    }

    @media (min-width: 2500px) {
      font-size: 20pt;
    }
  }

  .author {
    font-size: 11pt;
    ${addFont()};
    line-height: 5px;

    @media (min-width: 1630px) {
      font-size: 12pt;
    }

    @media (min-width: 1800px) {
      font-size: 13.5pt;
    }

    @media (min-width: 2050px) {
      font-size: 14.5pt;
    }

    @media (min-width: 2500px) {
      font-size: 15.5pt;
    }
  }
`;

export const OwnerContainer = styled.div`
${addFlexbox('row', 'flex-start', 'flex-start')};

p {
  font-size: 10pt;
  ${addFont('Medium')};
  height: 100%;
  margin-left: 5px;
  cursor: pointer;

  @media (min-width: 1630px) {
    font-size: 11pt;
  }

  @media (min-width: 1800px) {
    font-size: 12.5pt;
  }

  @media (min-width: 2050px) {
    font-size: 13.5pt;
  }

  @media (min-width: 2500px) {
    font-size: 15.5pt;
  }
}
}
`;

export const BookCover = styled.div<{ cover: String }>`
  width: 100%;
  height: 80%;
  background: ${({ cover }) => `url(${cover}) no-repeat`};
  background-position: center top;
  background-size: cover;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }
`;
