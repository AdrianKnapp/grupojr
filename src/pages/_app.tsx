import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { chakraTheme } from '../styles/theme';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={chakraTheme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
