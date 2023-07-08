import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import Slider from 'react-slick';
import FsLightbox from 'fslightbox-react';
import { useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { BannerImagesProps } from '../../../types/banner';

type SlickCarouselProps = {
  images: BannerImagesProps[];
  height: number;
}

function Arrow(props: any) {
  const {
    className, style, onClick, isPrev = false,
  } = props;
  return (
    <Box
      className={className}
      style={{ ...style }}
      onClick={onClick}
      _after={{
        content: '""',
      }}
      _before={{
        content: '""',
        color: 'transparent',
      }}
      borderRadius="full"
      borderStyle="solid"
      borderWidth={2}
      borderColor="gray.800"
      bg="white"
      color="gray.800"
      display="flex"
      alignItems="center"
      justifyContent="center"
      h={8}
      w={8}
      _hover={{
        color: 'gray.800',
        bg: 'gray.200',
      }}
      transition="all 0.2s ease-in-out"
      boxShadow="0px 0px 15px 0px rgba(0,0,0,0.4)"
    >
      <BiChevronRight
        fontSize={26}
        style={{
          transform: isPrev ? 'rotate(180deg)' : 'rotate(0deg)',
        }}
      />
    </Box>
  );
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
    pauseOnFocus: true,
    nextArrow: <Arrow />,
    prevArrow: <Arrow isPrev />,
    afterChange: (currentIndex) => setActiveSlide(currentIndex + 1),
  };

  return (
    <Box
      w={[
        '100%',
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
