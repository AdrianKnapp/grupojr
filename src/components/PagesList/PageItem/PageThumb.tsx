import { Flex } from '@chakra-ui/react';
import Image from 'next/image';
import { BannerImagesProps } from '../../../types/banner';

type PageThumbProps = {
  image: BannerImagesProps;
  isMobile: boolean;
}

export function PageThumb({ image, isMobile }: PageThumbProps) {
  const {
    attributes: {
      formats,
    },
    attributes,
  } = image;
  const imageSrc = formats?.medium?.url || formats?.large?.url || attributes?.url;

  return (
    <Flex width={isMobile ? '100%' : 220} minWidth={220} height={220} position="relative">
      <Image
        src={imageSrc}
        alt="Imagem do posto"
        layout="fill"
        objectFit="cover"
      />
    </Flex>
  );
}
