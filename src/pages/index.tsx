import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Hero } from '../components/banners/Hero';
import { PagesList } from '../components/PagesList';
import api from '../services/api';
import { BannerProps } from '../types/banner';

type HomeProps = {
  banner: BannerProps;
}

export default function Home({ banner }: HomeProps) {
  return (
    <>
      <Head>
        <title>Postos JR</title>
      </Head>
      {banner && <Hero images={banner.images.data} />}
      <PagesList />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const PAGES_REQUEST = process.env.NEXT_PUBLIC_PAGES_REQUEST;

  const {
    data: {
      data,
    },
  } = await api.get(PAGES_REQUEST);
  const banner = data[0]?.attributes.banner.data?.attributes || null;

  return {
    props: {
      banner,
    },
    revalidate: 60, // 60 seconds
  };
};
