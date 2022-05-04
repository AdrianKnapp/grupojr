import { Flex, Text } from '@chakra-ui/react';
import { theme } from '../../../styles/theme';
import { SlickCarousel } from './SlickCarousel';
import { Wave } from './Wave';

export function Carousel() {
  return (
    <Flex as="section" w={theme.container.width.full} h={400} position="relative" overflow="hidden" background="red">
      <SlickCarousel />
      <Text
        as="h1"
        zIndex={1}
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        color="white"
        fontSize={50}
        fontWeight="extrabold"
      >
        Conheça nossos postos
      </Text>
      <Wave />
    </Flex>
  );
}
