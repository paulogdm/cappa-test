// pages/_app.js
import React from 'react';
import App, { Container } from 'next/app';

class MyApp extends App {
  render() {
    const {
      Component, pageProps, store, pathname,
    } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
