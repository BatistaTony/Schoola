import { FooterStyled } from './style';

const Footer = () => {
  return (
    <FooterStyled>
      <p> &copy; SchoolaApp ❤️ {new Date().getFullYear()} </p>
    </FooterStyled>
  );
};

export default Footer;
