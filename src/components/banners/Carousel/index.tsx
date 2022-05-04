import { Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { theme } from '../../../styles/theme';
import { Wave } from './Wave';

export function Carousel() {
  return (
    <Flex as="section" w={theme.container.width.full} h={400} position="relative" overflow="hidden">
      <Image
        src="https://images.unsplash.com/photo-1607039084193-673140887529?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2059&q=80"
        alt="Banner"
        layout="fill"
        objectFit="cover"
      />
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
