import { CardStoryStyled } from './style';

interface ICardStory {
  item: {
    title: string;
    img: string;
    text: string;
  };
}

const CardStory = ({ item: { title, img, text } }: ICardStory) => {
  return (
    <CardStoryStyled>
      <img src={img} alt="" className="ilust" />
      <h1 className="title">{title}</h1>
      <p className="text">{text}</p>
    </CardStoryStyled>
  );
};

export default CardStory;
