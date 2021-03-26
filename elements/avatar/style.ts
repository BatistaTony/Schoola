import styled from 'styled-components';

const checkAvatarSize = (size: string) => {
  switch (size.toLowerCase()) {
    case 'large': {
      return '70px';
    }

    case 'medium': {
      return '40px';
    }

    default: {
      return '20px';
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
`;
