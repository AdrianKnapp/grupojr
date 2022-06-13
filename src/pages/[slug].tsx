import { Flex, Text } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { Carousel } from '../components/banners/Carousel';
import api from '../services/api';
import { theme } from '../styles/theme';
import { AttractionProps } from '../types/attraction';
import { BannerProps } from '../types/banner';

const PAGES_REQUEST = process.env.NEXT_PUBLIC_PAGES_REQUEST;

type StationProps = {
  id: number;
  slug: string;
  name: string;
  local: string;
  banner: {
    data: {
      attributes: BannerProps;
    }
  };
  attractions: {
    data: {
      attributes: BannerProps;
    }
  };
};

type ProductComponentProps = {
  station: StationProps;
  banner: BannerProps;
  attractions: AttractionProps[];
};

export default function PetrolStation({ station, banner, attractions }: ProductComponentProps) {
  return (
    <>
      <Head>
        <title>
          {`${station.name} - Grupo JR`}
        </title>
        <meta
          name="description"
          content={`Venha conhecer o ${station.name} - ${station.local}`}
        />
      </Head>
      <Flex direction="column" w="100%" maxW={theme.container.width.desktop} px={theme.container.padding.desktop} mx="auto">
        <Text as="h1" fontWeight="black" fontSize="xl" py={4}>
          {station.name}
        </Text>
        <Carousel images={banner.images.data} />
      </Flex>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const getProductsSlug = await api.get(PAGES_REQUEST);
  const productsSlug = getProductsSlug.data.data.map(({ attributes }) => ({
    params: {
      slug: String(attributes.slug),
    },
  }));

  return {
    paths: productsSlug,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;
  let stationData = {
    station: null,
    attractions: null,
    banner: null,
  };

  try {
    const getStation = await api.get(`${PAGES_REQUEST}&filters[slug][$eq]=${slug}`);
    const station: StationProps = getStation.data.data[0].attributes;
    const banner = station.banner.data.attributes;
    const attractions = station.attractions.data;

    stationData = {
      station,
      attractions,
      banner,
    };
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }

  return {
    props: {
      station: stationData.station,
      banner: stationData.banner,
      attractions: stationData.attractions,
    },
    redirect: 60, // 60 seconds
  };
};
