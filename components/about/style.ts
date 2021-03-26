import { addFlexbox } from '@/utils/styleFun';
import styled from 'styled-components';

export const AboutStyled = styled.div`
  width: 100%;
  height: 600px;
  background: linear-gradient(to right, #d61b6a, #f6e7dc);
  ${addFlexbox()};
`;

export const ListCard = styled.div`
  width: 70%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  grid-gap: 50px;
`;

export const CardStoryStyled = styled.div`
  width: 100%;
  height: 450px;
  background: white;
  border-radius: 10px;

  &:nth-child(2) {
    transform: scale(1.1);
  }
`;
