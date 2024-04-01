import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/">
      <Box w={20} cursor="pointer">
        <Image
          src="/logo.png"
          alt="Logo"
          width={1164}
          height={662}
          layout="responsive"
        />
        <h2 className="sr-only">
          Um grupo de empresas focadas em levar combustíveis de qualidade para
          você!
        </h2>
      </Box>
    </Link>
  );
}
