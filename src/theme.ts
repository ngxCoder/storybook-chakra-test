import { extendTheme } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
};

const colors = {
  gray: {
    50: '#e4f5ff',
    100: '#bedff4',
    200: '#97caea',
    300: '#6eb4e0',
    400: '#499ed8',
    500: '#3385be',
    600: '#276894',
    700: '#1a4a6a',
    800: '#0b2d41',
    900: '#00101a',
    default: '#0b2d41'
  },
  purple: {
    50: '#f8e8ff',
    100: '#debff4',
    200: '#c697e9',
    300: '#af6ddf',
    400: '#9944d4',
    500: '#7f2bbb',
    600: '#632092',
    700: '#471669',
    800: '#2b0d41',
    900: '#11031a',
    default: '#632092'
  },
  teal: {
    50: '#dafffd',
    100: '#b1faf3',
    200: '#85f5ea',
    300: '#58f0e1',
    400: '#2decd8',
    500: '#13d2bf',
    600: '#01a394',
    700: '#00766a',
    800: '#004740',
    900: '#001916',
    default: '#13d2bf'
  },
  yellow: {
    50: '#fffadc',
    100: '#feefb1',
    200: '#fbe582',
    300: '#fada51',
    400: '#f9d023',
    500: '#dfb60d',
    600: '#ae8e05',
    700: '#7c6501',
    800: '#4a3d00',
    900: '#1b1400',
    default: '#fada51'
  },
  orange: {
    50: '#fff3dc',
    100: '#ffddb1',
    200: '#fbc882',
    300: '#f7b253',
    400: '#f59c23',
    500: '#dc820a',
    600: '#ab6505',
    700: '#7b4801',
    800: '#4b2a00',
    900: '#1d0c00',
    default: '#f59c23'
  }
};

const fonts = {
  heading: 'Gotham',
  body: 'Gotham'
};

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      fontFamily: 'body',
      bg: mode('white', 'gray.default')(props),
      color: mode('gray.default', 'whiteAlpha.900')(props),
      lineHeight: 'base'
    }
  })
};

const theme = extendTheme({ config, colors, fonts, styles });

export default theme;
