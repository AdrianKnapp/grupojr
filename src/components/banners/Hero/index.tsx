import { Flex, Text } from '@chakra-ui/react';
import { theme } from '../../../styles/theme';
import { BannerImagesProps } from '../../../types/banner';
import { SlickCarousel } from './SlickCarousel';
import { Wave } from './Wave';

type HeroProps = {
  images: BannerImagesProps[];
}

export function Hero({ images }: HeroProps) {
  const BannerHeight = 400;

  return (
    <Flex as="section" w={theme.container.width.full} h={BannerHeight} position="relative" overflow="hidden">
      <SlickCarousel images={images} height={BannerHeight} />
      <Text
        as="h1"
        zIndex={1}
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        color="white"
        fontSize={[
          35,
          50,
        ]}
        width={[
          '90%',
          '80%',
        ]}
        fontWeight="extrabold"
        textAlign="center"
      >
        Conheça nossos postos
      </Text>
      <Wave />
    </Flex>
  );
}
