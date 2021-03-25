import React from 'react';
import { AppProps } from 'next/app';
import GlobalStyle from '../styles/globals';
import { ThemeProvider } from '../context/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
  <>
    <ThemeProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  </>
)}

export default MyApp