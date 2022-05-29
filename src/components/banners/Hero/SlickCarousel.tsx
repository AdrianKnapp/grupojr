import { Box } from '@chakra-ui/react';
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
    arrows: false,
    adaptiveHeight: true,
    pauseOnHover: true,
  };

  return (
    <Box w="100%" h="100%">
      <Slider
        {...settings}
      >
        {images.map(({ id, attributes: { formats }, attributes }) => {
          const url = formats?.large.url || formats?.medium.url || attributes.url;

          return (
            <Box filter="blur(3px) brightness(50%)" key={id} w="100%" h={height}>
              <Image
                src={url}
                alt="Banner inicial"
                layout="fill"
                objectFit="cover"
              />
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
}
