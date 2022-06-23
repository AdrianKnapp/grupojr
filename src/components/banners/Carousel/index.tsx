import { Flex } from '@chakra-ui/react';
import { theme } from '../../../styles/theme';
import { BannerImagesProps } from '../../../types/banner';
import { SlickCarousel } from './SlickCarousel';
import useMediaQuery from '../../../hooks/useMediaQuery';

type HeroProps = {
  images: BannerImagesProps[];
}

export function Carousel({ images }: HeroProps) {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const BannerHeight = !isMobile ? 300 : 200;

  return (
    <Flex as="section" w={theme.container.width.full} h={BannerHeight} position="relative" overflow="hidden">
      <SlickCarousel images={images} height={BannerHeight} />
    </Flex>
  );
}
