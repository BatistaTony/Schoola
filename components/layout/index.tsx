import { Layout as AntLayout } from 'antd';
import Head from 'next/head';
import { FC } from 'react';
import Footer from '../footer';
import Navbar from '../navbar';

import LayoutStyle from './layout.style';
import { LayoutProps } from './layout.types';

const { Content } = AntLayout;

const Layout: FC<LayoutProps> = ({ children, title }) => (
  <AntLayout style={{ backgroundColor: '#fff' }}>
    <Head>
      <title>{title || 'SchoolaApp'}</title>
    </Head>

    <div style={LayoutStyle.containerStyle}>
      <Navbar />
      <Content style={LayoutStyle.contentStyle}>{children}</Content>
    </div>
    <Footer/>
  </AntLayout>
);

export default Layout;
