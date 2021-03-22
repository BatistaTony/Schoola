import { HeroStyled, PresentationDiv } from './styles';

const Hero = () => {
  return (
    <HeroStyled>
      <PresentationDiv>
        <h1 className="title">
          Partilhe conhecimento <br /> Partilhe livros !
        </h1>
        <p className="presentation_text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro iusto voluptatibus ullam.
        </p>
        <button className="btn_presentation">Começar</button>
      </PresentationDiv>
      <img className="illustration_" src="./undraw_book_lover_mkck.svg" alt="" />
    </HeroStyled>
  );
};

export default Hero;
