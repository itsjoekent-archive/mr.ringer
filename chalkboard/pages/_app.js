import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { css, ThemeProvider } from 'styled-components';
import ApplicationContext from './ApplicationContext';
import 'react-toggle/style.css';

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

const lightChalk = '#e9ffe9';
const primaryChalk = '#007b3d';

const lightMono = '#f3f3f3';
const darkMono = '#1b1b1b';

const chalkComplimentary = '#ff54aa';
const terminalComplimentary = '#f10079';

const theme = (isChalkboardTheme) => ({
  isChalkboardTheme,
  colors: {
    primary: isChalkboardTheme ? primaryChalk : darkMono,
    light: isChalkboardTheme ? lightChalk : lightMono,
    lightChalk,
    primaryChalk,
    lightMono,
    darkMono,
    complimentary: isChalkboardTheme
      ? chalkComplimentary
      : terminalComplimentary,
  },
  font: isChalkboardTheme ? chalkFont : terminalFont,
  lineHeight: isChalkboardTheme ? chalkLineHeight : terminalLineHeight,
  letterSpacing: isChalkboardTheme
    ? terminalComplimentary
    : terminalLetterSpacing,
  chalkLetterSpacing,
  chalkLineHeight,
  terminalLetterSpacing,
  terminalLineHeight,
  chalkFont,
  terminalFont,
  fontSizes: {
    tiny: '12px',
    small: '16px',
    body: '18px',
    header: '24px',
    title: '48px',
  },
});

export default class MyApp extends App {
  constructor(props) {
    super(props);

    this.state = {
      isChalkboardTheme: true,
    };
  }

  render() {
    const { isChalkboardTheme } = this.state;
    const { Component, pageProps } = this.props;

    const contextValue = {
      isChalkboardTheme,
      setChalkboardTheme: (isEnabled) =>
        this.setState({ isChalkboardTheme: isEnabled }),
    };

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
        <ThemeProvider theme={theme(isChalkboardTheme)}>
          <ApplicationContext.Provider value={contextValue}>
            <Component {...pageProps} />
          </ApplicationContext.Provider>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
