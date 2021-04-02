import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import SearchInput from './searchInput';
import { ButtonAccount, Logo, NavbarStyled } from './styles';
import UserMenu from './userMenu';

const Navbar = () => {
  const router = useRouter();

  console.log(router);

  return (
    <NavbarStyled>
      <Link href="/">
        <Logo>SchoolaApp</Logo>
      </Link>
      {router.pathname !== '/' ? <div></div> : <SearchInput />}
      {/* <div className="buttons_g">
        <ButtonAccount>Sign in</ButtonAccount>
        <ButtonAccount>Sign up</ButtonAccount>
      </div> */}

      <UserMenu />
    </NavbarStyled>
  );
};

export default Navbar;
