import 'antd/dist/antd.css';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import App from 'next/app';

import GlobalStyle from '../style/global';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ApolloProvider client={client}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}

export default MyApp;
