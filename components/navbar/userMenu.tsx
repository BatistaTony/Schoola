import UserAvatar from '@/elements/avatar';
import { UserMenuStyled, NotificationStyled } from './styles';
import { BellFilled } from '@ant-design/icons';
import useToggle from '@/hooks/useToggle';

const UserMenu = () => {
  const { active, toggle } = useToggle();

  return (
    <UserMenuStyled>
      <NotificationStyled>
        <BellFilled onClick={toggle} />
        {active && (
          <ul className="notifictionList">
            <li>
              <span className="nameL">Ray Thony</span> wants your book{' '}
              <span className="active_status"></span>
            </li>
          </ul>
        )}
      </NotificationStyled>
      <UserAvatar src="avatar.jpg" size="medium" />
    </UserMenuStyled>
  );
};

export default UserMenu;
