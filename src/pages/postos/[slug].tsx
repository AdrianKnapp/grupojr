import { Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { BiMap } from 'react-icons/bi';
import { AiOutlinePhone } from 'react-icons/ai';
import { AttractionsList } from '../../components/AttractionsList';
import { Carousel } from '../../components/banners/Carousel';
import { IconsBox } from '../../components/IconsBox';
import { StationInfo } from '../../components/StationInfo ';
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

  return station ? (
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
        px={theme.container.padding.desktop}
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
          <SimpleGrid minChildWidth={['200px', '100px', '200px']} columns={2} spacing="20px">
            {station?.socialmedia && (
              <StationInfo
                title="Redes sociais"
                description={<IconsBox href={station?.socialmedia} />}
                icon={null}
              />
            )}
            <StationInfo
              title="Contato"
              description={station.contact}
              icon={<AiOutlinePhone fontSize={35} />}
            />
          </SimpleGrid>
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
