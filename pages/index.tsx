import ListOfBooks from '@/components/books/list';
import Hero from '@/components/hero';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout title="SchoolaApp">
      <Hero />
      <ListOfBooks />
    </Layout>
  );
}
