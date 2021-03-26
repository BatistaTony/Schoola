import CardStory from './cardStory';
import { AboutStyled, ListCard } from './style';

const About = () => {
  return (
    <AboutStyled>
      <ListCard>
        {[1, 2, 3].map(() => (
          <CardStory />
        ))}
      </ListCard>
    </AboutStyled>
  );
};

export default About;
