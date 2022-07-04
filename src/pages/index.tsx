import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Hero } from '../components/banners/Hero';
import { PagesList } from '../components/PagesList';
import api from '../services/api';
import { BannerProps } from '../types/banner';
import { PageProps } from '../types/pages';

type HomeProps = {
  banner: BannerProps;
  pages: PageProps[];
}

export default function Home({ banner, pages }: HomeProps) {
  return (
    <>
      <Head>
        <title>Postos | Grupo JR</title>
        <meta
          name="description"
          content="GRUPO JR - Conheça nossos postos e veja detalhes e informações sobre os nossos serviços."
        />
      </Head>
      {banner && <Hero images={banner.images.data} />}
      <PagesList pages={pages} />
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
  const pages = data || null;

  return {
    props: {
      banner,
      pages,
    },
    revalidate: 60, // 60 seconds
  };
};
