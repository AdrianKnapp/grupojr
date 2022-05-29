import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Hero } from '../components/banners/Hero';
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
      <div>
        {banner && <Hero images={banner.images.data} />}
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const {
    data: {
      data: [{ attributes }],
    },
  } = await api.get('pages?name=Home&populate=attractions.images&populate=banner.images');

  return {
    props: {
      banner: attributes.banner.data.attributes,
    },
    revalidate: 60, // 60 seconds
  };
};
