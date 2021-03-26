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
}

export interface IAuthor {
  name: string;
}
