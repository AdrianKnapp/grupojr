import { Flex } from '@chakra-ui/react';
import Image from 'next/image';

export function PageThumb() {
  return (
    <Flex width={300} height={200} position="relative">
      <Image
        src="https://res.cloudinary.com/grupo-jr/image/upload/v1653785459/small_IMG_0206_36_d8cbc3c503.jpg"
        alt="Posto JR"
        layout="fill"
        objectFit="cover"
      />
    </Flex>
  );
}
