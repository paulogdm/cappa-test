import React from 'react';
import getConfig from 'next/config';
import Document, { Head, Main, NextScript } from 'next/document';

const { publicRuntimeConfig } = getConfig();

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
