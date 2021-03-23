import ListOfBooks from '@/components/books/list';
import Hero from '@/components/hero';
import Layout from '../components/layout';
import About from '@/components/about';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <Layout title="SchoolaApp">
      <Hero />
      <ListOfBooks />
      <About />
      <Footer />
    </Layout>
  );
}
