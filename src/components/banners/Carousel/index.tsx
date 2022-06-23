import { Flex } from '@chakra-ui/react';
import { theme } from '../../../styles/theme';
import { BannerImagesProps } from '../../../types/banner';
import { SlickCarousel } from './SlickCarousel';
import useMediaQuery from '../../../hooks/useMediaQuery';

type HeroProps = {
  images: BannerImagesProps[];
  customDesktopHeight?: number;
  customMobileHeight?: number;
}

export function Carousel({
  images,
  customDesktopHeight = 300,
  customMobileHeight = 200,
}: HeroProps) {
  const [isMobile] = useMediaQuery('(max-width: 768px)');

  const BannerHeight = !isMobile ? customDesktopHeight : customMobileHeight;

  return (
    <Flex as="section" w={theme.container.width.full} h={BannerHeight} position="relative" overflow="hidden">
      <SlickCarousel images={images} height={BannerHeight} />
    </Flex>
  );
}
