import { Flex } from '@chakra-ui/react';
import Image from 'next/image';
import { theme } from '../../../styles/theme';

export function Hero() {
  return (
    <Flex as="section" w={theme.container.width.full} h={400} position="relative">
      <Image
        src="https://images.unsplash.com/photo-1607039084193-673140887529?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2059&q=80"
        alt="Banner"
        layout="fill"
        objectFit="cover"
      />
    </Flex>
  );
}
