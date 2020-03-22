import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { css, ThemeProvider } from 'styled-components';

const chalkFont = css`
  font-family: 'Caveat', cursive;
`;
const terminalFont = css`
  font-family: 'Ubuntu Mono', monospace;
`;

const chalkLetterSpacing = '2px';
const chalkLineHeight = '1.2';

const terminalLetterSpacing = 'normal';
const terminalLineHeight = '1.1';

const light = '#f3f3f3';
const dark = '#1b1b1b';

const complimentary = '#f10079';
const lightComplimentary = '#ffb6db';

const theme = {
  colors: {
    dark,
    light,
    complimentary,
    lightComplimentary,
  },
  font: terminalFont,
  lineHeight: terminalLineHeight,
  letterSpacing: terminalLetterSpacing,
  chalkLetterSpacing,
  chalkLineHeight,
  chalkFont,
  terminalFont,
  fontSizes: {
    tiny: '12px',
    small: '16px',
    body: '18px',
    header: '24px',
    title: '48px',
  },
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>Mr. Ringer</title>
          <meta property="og:title" content="Mr. Ringer" />
          <meta
            property="og:description"
            content="Mr. Ringer is a Javascript math library that makes it simple to perform complex math."
          />
          <link rel="icon" href={`${process.env.ASSET_PREFIX}/favicon.ico`} />
          <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }

          p,
          h1,
          h2,
          h3 {
            margin: 0;
          }
        `}</style>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
