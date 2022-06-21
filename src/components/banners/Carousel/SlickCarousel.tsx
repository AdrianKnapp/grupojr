import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import Slider from 'react-slick';
import { BannerImagesProps } from '../../../types/banner';

type SlickCarouselProps = {
  images: BannerImagesProps[];
  height: number;
}

export function SlickCarousel({ images, height }: SlickCarouselProps) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    adaptiveHeight: true,
    pauseOnHover: true,
  };

  return (
    <Box
      w={[
        '100%',
        '100%',
        '80%',
        '90%',
      ]}
      h="100%"
      mx="auto"
      className="banner-carousel"
    >
      <Slider
        {...settings}
      >
        {images.map(({ id, attributes: { formats }, attributes }) => {
          const url = formats?.large?.url || formats?.medium?.url || attributes.url;

          return (
            <Flex key={id} w="100%" h={height} position="relative">
              <Image
                src={url}
                alt="Banner inicial"
                layout="fill"
                objectFit="cover"
              />
            </Flex>
          );
        })}
      </Slider>
    </Box>
  );
}
