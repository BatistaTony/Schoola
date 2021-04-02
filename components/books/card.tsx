import { IBook } from '@/types/book';
import { CardBookStyled, BookCover, OwnerContainer } from './styles';
import UserAvatar from '@/elements/avatar';
import Link from 'next/link';

interface ICardBook {
  book: IBook;
}

const CardBook = ({ book: { id, author, title, cover, postedBy } }: ICardBook) => {
  return (
    <CardBookStyled>
      <Link href={`book/${id}`}>
        <BookCover cover={cover} />
      </Link>
      <h1 className="title">{title}</h1>
      <p className="author">{author.name}</p>
      <OwnerContainer>
        <UserAvatar src={postedBy.avatar} size="small" />
        <p>{postedBy.name}</p>
      </OwnerContainer>
    </CardBookStyled>
  );
};

export default CardBook;
