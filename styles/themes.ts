export const themes = {
    light: {
      primary: '#fff',
      black: '#1b1f23',
      border: '#e1e4e8',
    },
    dark: {
      primary: '#1D1D1D',
      black: '#c6c6c6',
      border: '#343434',
    },
  };
  
  export type ThemeName = keyof typeof themes;
  export type ThemeType = typeof themes.light | typeof themes.dark;