import BookContainer from '@/components/book/bookContainer';
import Layout from '@/components/layout';

const Book = ({ id }) => {
  return (
    <Layout title={'book name here'}>
      <BookContainer />
    </Layout>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          id: '34dgt5',
        },
      },
    ],
    fallback: 'blocking',
  };
};

export const getStaticProps = async context => {
  return {
    props: {
      id: context.params.id,
    },
  };
};

export default Book;
