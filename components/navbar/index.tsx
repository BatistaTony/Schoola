import { ButtonAccount, Logo, NavbarStyled } from './styles';

const Navbar = () => {
  return (
    <NavbarStyled>
      <Logo>SchoolaApp</Logo>

      <div className="buttons_g">
        <ButtonAccount>Sign in</ButtonAccount>
        <ButtonAccount>Sign up</ButtonAccount>
      </div>
    </NavbarStyled>
  );
};

export default Navbar;
