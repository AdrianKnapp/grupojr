import { GetStaticProps } from 'next';
import Head from 'next/head';
import InfosPage from '../components/InfosPage';
import api from '../services/api';
import { BannerImagesProps } from '../types/banner';

type TransportadoraProps = {
  images: BannerImagesProps[];
}

export default function Transportadora({ images }: TransportadoraProps) {
  return (
    <>
      <Head>
        <title>Transportadora | Grupo JR</title>
        <meta
          name="description"
          content="GRUPO JR - Conheça nossa transportadora própria."
        />
      </Head>
      <InfosPage
        title="Transportadora"
        bannerImages={images}
      >
        O Grupo JR é uma empresa focada em levar combustíveis de qualidade para seus clientes e, pensando exatamente nesse ponto, decidimos desenvolver nossa própria logística para agregar valor e reconhecimento ao nosso grupo! Com a logística própria, possuímos uma facilidade de ir e vir com maior segurança e com isso, sempre levamos o melhor combustível para você. Oferecemos rapidez, eficiência e segurança para todos os nossos clientes. Abasteça com a gente!
      </InfosPage>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const {
    data: {
      data,
    },
  } = await api.get('banners?filters[name][$eq]=transportadora&populate=images');
  const [banner] = data;

  const images = banner.attributes.images?.data?.map((image) => image) || null;

  return {
    props: {
      images,
    },
    revalidate: 60, // 60 seconds
  };
};
