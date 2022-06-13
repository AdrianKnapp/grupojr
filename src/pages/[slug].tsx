import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import api from '../services/api';
import { BannerProps } from '../types/banner';

const PAGES_REQUEST = process.env.NEXT_PUBLIC_PAGES_REQUEST;

type StationProps = {
  id: number;
  slug: string;
  name: string;
  local: string;
  banner: BannerProps;
  attractions: any[];
};

type ProductComponentProps = {
  station: StationProps;
};

export default function PetrolStation({ station }: ProductComponentProps) {
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
      <h1>{station.name}</h1>
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
  let stationData = null;

  try {
    const getStation = await api.get(`${PAGES_REQUEST}&filters[slug][$eq]=${slug}`);
    stationData = getStation.data.data[0].attributes;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }

  return {
    props: {
      station: stationData,
    },
    redirect: 60, // 60 seconds
  };
};
