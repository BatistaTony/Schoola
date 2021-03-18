import { Layout as AntLayout } from 'antd';
import Head from 'next/head';
import { FC } from 'react';
import Navbar from '../navbar';

import LayoutStyle from './layout.style';
import { LayoutProps } from './layout.types';

const { Content } = AntLayout;

const Layout: FC<LayoutProps> = ({ children, title }) => (
  <AntLayout style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
    <Head>
      <title>{title || 'No title'}</title>
    </Head>
   
    <div style={LayoutStyle.containerStyle}>
       <Navbar />
      <Content className="site-layout" style={LayoutStyle.contentStyle}>
        {children}
      </Content>
    </div>
  </AntLayout>
);

export default Layout;
