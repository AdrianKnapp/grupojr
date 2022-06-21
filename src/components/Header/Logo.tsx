import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/">
      <Box w={20} cursor="pointer">
        <Image
          src="http://www.grupopostojr.com.br/images/logo.png"
          alt="Logo"
          width={937}
          height={663}
          layout="responsive"
        />
      </Box>
    </Link>
  );
}
