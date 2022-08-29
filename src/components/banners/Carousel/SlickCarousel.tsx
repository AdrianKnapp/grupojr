import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import Slider from 'react-slick';
import FsLightbox from 'fslightbox-react';
import { useState } from 'react';
import { BannerImagesProps } from '../../../types/banner';

type SlickCarouselProps = {
  images: BannerImagesProps[];
  height: number;
}

export function SlickCarousel({ images, height }: SlickCarouselProps) {
  const [toggleViewImage, setToggleViewImage] = useState(false);
  const [activeSlide, setActiveSlide] = useState(1);

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
    afterChange: (currentIndex) => setActiveSlide(currentIndex + 1),
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
            <Flex
              key={id}
              w="100%"
              h={height}
              position="relative"
              onClick={() => setToggleViewImage(!toggleViewImage)}
            >
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
      {images && (
        <FsLightbox
          toggler={toggleViewImage}
          sources={images.map((image) => image.attributes.url)}
          slide={activeSlide}
        />
      )}
    </Box>
  );
}
