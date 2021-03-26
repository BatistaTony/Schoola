import styled from 'styled-components';

const checkAvatarSize = (size: string) => {
  switch (size.toLowerCase()) {
    case 'large': {
      return '70px';
    }

    case 'medium': {
      return '40px';
    }

    case 'small': {
      return '20px';
    }
  }
};

export const AddResponsiveness = (size: string) => {
  switch (size.toLowerCase()) {
    case 'large': {
      return `
          @media (min-width:1630px){
            width:85px;
            height:85px;
          }

          @media (min-width:2050px){
            width:95px;
            height:95px;
          }
      `;
    }

    case 'medium': {
      return `
      @media (min-width:1630px){
        width:50px;
        height:50px;
      }

      @media (min-width:2050px){
        width:65px;
        height:65px;
      }
      
      `;
    }

    case 'small': {
      return ` 
      @media (min-width:1630px){
        width:25px;
        height:25px;
      }

      @media (min-width:2050px){
        width:30px;
        height:30px;
      }
      
      `;
    }
  }
};

export const CustomAvatar = styled.div<{ src: string; size: string }>`
  width: ${({ size }) => checkAvatarSize(size)};
  height: ${({ size }) => checkAvatarSize(size)};
  border-radius: 100%;
  border: 1px solid gray;
  background: ${({ src }) => `url(${src})`};
  background-position: center top;
  background-size: 100%;
  cursor: pointer;
  ${({ size }) => AddResponsiveness(size)};
`;
