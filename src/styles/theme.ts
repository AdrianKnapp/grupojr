import { extendTheme } from '@chakra-ui/react';

export const theme = {
  colors: {
    text: 'gray.800',
    background: 'gray.100',
    highlight: 'blue.900',
  },
  container: {
    width: {
      full: '100%',
      desktop: 'container.xl',
      tablet: 'container.md',
      mobile: 'container.sm',
    },
    padding: {
      full: 0,
      desktop: 6,
      tablet: 6,
      mobile: 6,
    },
  },
};

export const chakraTheme = extendTheme({
  colors: {
    gray: {
      900: '#181B23',
      800: '#252525', // text
      700: '#353646',
      600: '#4B4D63',
      500: '#616480',
      400: '#797D9A',
      300: '#9699B0',
      200: '#B3B5C6',
      100: '#EBEBEB', // background
      50: '#EEEEF2',
    },
    blue: {
      900: '#016AB4', // highlight
    },
  },
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.100',
        color: 'gray.800',
      },
    },
  },
});
