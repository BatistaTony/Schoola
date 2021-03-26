import { CardBookStyled, AvatarOwner, BookCover } from './styles';

const CardBook = () => {
  return (
    <CardBookStyled>
      <BookCover />
      <h1 className="title">Leaders Eat Last</h1>
      <p className="author">Simon Sinek</p>
      <div className="owner">
        <AvatarOwner />
        <p>Batista Tony</p>
      </div>
    </CardBookStyled>
  );
};

export default CardBook;
