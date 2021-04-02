import CardStory from './cardStory';
import { AboutStyled, ListCard } from './style';

const About = () => {
  const list = [
    {
      img: '/undraw_Taking_notes_re_bnaf (1).svg',
      title: 'Upload o livro',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, nobis eaque. Eius!',
    },
    {
      img: '/undraw_High_five_u364.svg',
      title: 'Partilhe',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, nobis eaque. Eius!',
    },
    {
      img: '/undraw_Reading_re_29f8.svg',
      title: 'Leia',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, nobis eaque. Eius!',
    },
  ];

  return (
    <AboutStyled>
      <ListCard>
        {list.map((item, index) => (
          <CardStory key={index} item={item} />
        ))}
      </ListCard>
    </AboutStyled>
  );
};

export default About;
