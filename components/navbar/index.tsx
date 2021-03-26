import SearchInput from './searchInput';
import { ButtonAccount, Logo, NavbarStyled } from './styles';
import UserMenu from './userMenu';

const Navbar = () => {
  return (
    <NavbarStyled>
      <Logo>SchoolaApp</Logo>
      <SearchInput />
      {/* <div className="buttons_g">
        <ButtonAccount>Sign in</ButtonAccount>
        <ButtonAccount>Sign up</ButtonAccount>
      </div> */}

      <UserMenu />
    </NavbarStyled>
  );
};

export default Navbar;
