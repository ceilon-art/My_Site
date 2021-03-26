import React from 'react';
import { AppProps } from 'next/app';
import GlobalStyle from '../styles/globals';
import { ThemeProvider, useTheme } from '../context/theme';
import Navbar from '../components/Navbar';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { theme, lockScroll } = useTheme();

  return (
  <>
    <ThemeProvider>
      <GlobalStyle theme={theme} lock={lockScroll} />
      <div>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  </>
)}

export default MyApp