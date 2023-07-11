import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import { BsFullscreen } from 'react-icons/bs';
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
        100,
        200,
        200,
        230,
      ]}
      position="relative"
    >
      <Box position="absolute" top={2} right={2} zIndex={20}>
        <BsFullscreen fontSize={16} color="white" />
      </Box>
      <Image
        src={imageSrc}
        alt="Imagem da atração"
        layout="fill"
        objectFit="cover"
      />
    </Flex>
  );
}
