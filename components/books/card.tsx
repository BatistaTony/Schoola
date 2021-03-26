import { IBook } from '@/types/book';
import { CardBookStyled, AvatarOwner, BookCover } from './styles';

interface ICardBook {
  book: IBook;
}

const CardBook = ({ book: { author, title, cover, postedBy } }: ICardBook) => {
  return (
    <CardBookStyled>
      <BookCover cover={cover} />
      <h1 className="title">{title}</h1>
      <p className="author">{author.name}</p>
      <div className="owner">
        <AvatarOwner avatar={postedBy.avatar} />
        <p>{postedBy.name}</p>
      </div>
    </CardBookStyled>
  );
};

export default CardBook;
