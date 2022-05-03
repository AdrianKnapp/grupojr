import { Box } from '@chakra-ui/react';
import Image from 'next/image';

export function Logo() {
  return (
    <Box w={20}>
      <Image
        src="http://www.grupopostojr.com.br/images/logo.png"
        alt="Logo"
        width={937}
        height={663}
        layout="responsive"
      />
    </Box>
  );
}
