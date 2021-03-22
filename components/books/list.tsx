import CardBook from './card';
import { ListStyled, ListOf } from './styles';

const ListOfBooks = () => {
  return (
    <ListStyled>
      <div className="header_list">
        <h1 className="title">Novos</h1>
        <p className="orderMode">All</p>
      </div>
      <ListOf>
        {[1, 2, 3, 54, 57, 68, 7, 7, 87, 66, 6, 346, 45, 64, 56, 45].map(() => (
          <CardBook />
        ))}
      </ListOf>
    </ListStyled>
  );
};

export default ListOfBooks;
