import { CustomAvatar } from './style';

interface IUserAvatar {
  size: string;
  src: string;
}

const UserAvatar = ({ size, src }: IUserAvatar) => {
  return <CustomAvatar size={size || 'small'} src={src} />;
};

export default UserAvatar;
