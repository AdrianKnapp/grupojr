import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import Slider from 'react-slick';

export function SlickCarousel() {
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
        <Box filter="blur(3px) brightness(50%)">
          <Image
            src="https://images.unsplash.com/photo-1607039084193-673140887529?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2059&q=80"
            alt="Banner"
            width="1230"
            height="616"
            layout="responsive"
            objectFit="cover"
          />
        </Box>
        <Box filter="blur(3px) brightness(50%)">
          <Image
            src="https://images.unsplash.com/photo-1607039084193-673140887529?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2059&q=80"
            alt="Banner"
            width="1230"
            height="616"
            layout="responsive"
            objectFit="cover"
          />
        </Box>
      </Slider>
    </Box>
  );
}
