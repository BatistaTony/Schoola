import CardBook from './card';
import { ListStyled, ListOf } from './styles';
import books from '@/utils/books.json';
import { IBook } from '@/types/book';

const ListOfBooks = () => {
  console.log(books);

  return (
    <ListStyled>
      <div className="header_list">
        <h1 className="title">Novos</h1>
        <p className="orderMode">All</p>
      </div>
      <ListOf>
        {books.map((book: IBook) => (
          <CardBook key={book.id} book={book} />
        ))}
      </ListOf>
    </ListStyled>
  );
};

export default ListOfBooks;
