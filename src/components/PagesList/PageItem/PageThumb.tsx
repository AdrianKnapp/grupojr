import { Flex } from '@chakra-ui/react';
import Image from 'next/image';
import { BannerImagesProps } from '../../../types/banner';

type PageThumbProps = {
  image: BannerImagesProps;
}

export function PageThumb({ image }: PageThumbProps) {
  const {
    attributes: {
      formats,
    },
    attributes,
  } = image;
  const imageSrc = formats?.medium?.url || formats?.large?.url || attributes?.url;

  return (
    <Flex width={250} height={200} position="relative">
      <Image
        src={imageSrc}
        alt="Imagem do posto"
        layout="fill"
        objectFit="cover"
      />
    </Flex>
  );
}
