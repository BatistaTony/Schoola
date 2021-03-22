import { CardBookStyled } from './styles';

const CardBook = () => {
  return (
    <CardBookStyled>
      <div className="cover"></div>
      <h1 className="title">Leaders Eat Last</h1>
      <p className="author">Simon Sinek</p>
      <div className="owner">
        <div className="avatar"></div>
        <p>Batista Tony</p>
      </div>
    </CardBookStyled>
  );
};

export default CardBook;
