import React from 'react';
import { AppProps } from 'next/app';
import GlobalStyle from '../styles/globals';
import { ThemeProvider, useTheme } from '../context/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { theme, lockScroll } = useTheme();

  return (
  <>
    <ThemeProvider>
      <GlobalStyle theme={theme} lock={lockScroll} />
      <Component {...pageProps} />
    </ThemeProvider>
  </>
)}

export default MyApp