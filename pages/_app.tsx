import React, { useState } from 'react';
import { AppProps } from 'next/app';
import GlobalStyle from '../styles/globals';
import { ThemeProvider } from 'styled-components';
import Navbar from '../components/Navbar';
import { ThemeName, themes } from '../styles/themes';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [themeName, setThemeName] = useState<ThemeName>("light");
  const currentTheme = themes[themeName];

  return (
  <>
    <ThemeProvider theme={currentTheme}>
      <Navbar themeName={themeName} setThemeName={setThemeName} />

      <Component {...pageProps} />

      <GlobalStyle />
    </ThemeProvider>
  </>
)}

export default MyApp