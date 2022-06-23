import { Flex } from '@chakra-ui/react';
import Image from 'next/image';
import { BannerImagesProps } from '../../../types/banner';

type StationThumbType = {
  image: BannerImagesProps;
}

export function StationThumb({ image }: StationThumbType) {
  const {
    attributes: {
      formats,
    },
    attributes,
  } = image;

  const imageSrc = formats?.medium?.url || formats?.large?.url || attributes?.url;

  return (
    <Flex
      width="100%"
      height={[
        150,
        230,
        300,
      ]}
      position="relative"
    >
      <Image
        src={imageSrc}
        alt="Imagem da atração"
        layout="fill"
        objectFit="cover"
      />
    </Flex>
  );
}
