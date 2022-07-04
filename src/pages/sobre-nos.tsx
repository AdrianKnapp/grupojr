import { GetStaticProps } from 'next';
import Head from 'next/head';
import InfosPage from '../components/InfosPage';
import api from '../services/api';
import { BannerImagesProps } from '../types/banner';

type SobreNosProps = {
  images: BannerImagesProps[];
}

export default function SobreNos({ images }: SobreNosProps) {
  return (
    <>
      <Head>
        <title>Sobre nós | Grupo JR</title>
        <meta
          name="description"
          content="GRUPO JR - Conheça mais sobre nós."
        />
      </Head>
      <InfosPage
        title="Sobre nós"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        bannerImages={images}
      />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const {
    data: {
      data,
    },
  } = await api.get('banners?filters[name][$eq]=sobre-nos&populate=images');
  const [banner] = data;

  const images = banner.attributes.images?.data?.map((image) => image) || null;

  return {
    props: {
      images,
    },
    revalidate: 60, // 60 seconds
  };
};
