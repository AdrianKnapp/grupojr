import { Flex, Text } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { AttractionsList } from '../../components/AttractionsList';
import { Carousel } from '../../components/banners/Carousel';
import { StationDetails } from '../../components/StationDetails';
import api from '../../services/api';
import { theme } from '../../styles/theme';
import { AttractionProps } from '../../types/attraction';
import { BannerProps } from '../../types/banner';
import { PageProps } from '../../types/pages';

const PAGES_REQUEST = process.env.NEXT_PUBLIC_PAGES_REQUEST;

type ProductComponentProps = {
  station: PageProps['attributes'];
  banner: BannerProps;
  attractions: AttractionProps[];
};

export default function PetrolStation({ station, banner, attractions }: ProductComponentProps) {
  const bannerImages = banner?.images?.data;

  if (!station) return null;

  return (
    <>
      <Head>
        <title>
          {`${station.name} | Grupo JR`}
        </title>
        <meta
          name="description"
          content={`GRUPO JR - Conheça o ${station.name} - ${station.local}`}
        />
      </Head>
      <Flex
        direction="column"
        w="100%"
        maxW={theme.container.width.desktop}
        px={[
          theme.container.padding.mobile,
          theme.container.padding.mobile,
          theme.container.padding.tablet,
          theme.container.padding.desktop,
        ]}
        mx="auto"
      >
        <Text as="h1" fontWeight="black" fontSize={['2xl', '2xl', '3xl']} py={4}>
          {station.name}
        </Text>
        {bannerImages && (
          <Carousel images={bannerImages} />
        )}
        <StationDetails station={station} />
        <Text as="h3" fontWeight="black" fontSize="2xl" mt={8}>
          Atrativos
        </Text>
        {attractions.length > 0 && (
          <AttractionsList attractions={attractions} />
        )}
      </Flex>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const getProductsSlug = await api.get('pages');
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
    const station: ProductComponentProps['station'] = getStation.data.data[0]?.attributes;
    const banner = station.banner.data?.attributes || null;
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
    revalidate: 60, // 60 seconds
  };
};
