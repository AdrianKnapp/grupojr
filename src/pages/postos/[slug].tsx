import { Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { BiMap } from 'react-icons/bi';
import { RiWhatsappLine } from 'react-icons/ri';
import { AttractionsList } from '../../components/AttractionsList';
import { Carousel } from '../../components/banners/Carousel';
import { StationInfo } from '../../components/StationInfo ';
import api from '../../services/api';
import { theme } from '../../styles/theme';
import { AttractionProps } from '../../types/attraction';
import { BannerProps } from '../../types/banner';

const PAGES_REQUEST = process.env.NEXT_PUBLIC_PAGES_REQUEST;

type StationProps = {
  id: number;
  slug: string;
  name: string;
  local: string;
  contact: string;
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
  const bannerImages = banner?.images?.data;

  return station ? (
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
      <Flex
        direction="column"
        w="100%"
        maxW={theme.container.width.desktop}
        px={[
          theme.container.padding.mobile,
          theme.container.padding.mobile,
          theme.container.padding.desktop,
        ]}
        mx="auto"
      >
        <Text as="h1" fontWeight="black" fontSize="3xl" py={4}>
          {station.name}
        </Text>
        {bannerImages && (
          <Carousel images={bannerImages} />
        )}
        {attractions.length > 0 && (
          <AttractionsList attractions={attractions} />
        )}
        <SimpleGrid minChildWidth={['200px', '300px', '400px']} columns={2} spacing="20px" mt={8}>
          <StationInfo
            title="Localização"
            description={station.local}
            icon={<BiMap fontSize={30} color={theme.colors.text} />}
          />
          <StationInfo
            title="Contato"
            description={station.contact}
            icon={<RiWhatsappLine fontSize={30} color={theme.colors.text} />}
          />
        </SimpleGrid>
      </Flex>
    </>
  ) : null;
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
    const station: StationProps = getStation.data.data[0]?.attributes;
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
    redirect: 60, // 60 seconds
  };
};
