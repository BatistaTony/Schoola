import { IUser } from './user';

export interface IBook {
  id: string;
  cover: string;
  title: string;
  edition: string;
  pages: number;
  review: string;
  year: number;
  auhtorId: number;
  category: string;
  rates: number;
  author: IAuthor;
  postedBy: IUser;
}

export interface IAuthor {
  
  name: string;
}
