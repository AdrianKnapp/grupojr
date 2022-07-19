import { Spacer } from '@chakra-ui/react';
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
        bannerImages={images}
      >
        O Grupo JR é uma rede de postos de combustíveis que tem como objetivo oferecer aos clientes uma experiência única em abastecimento e outros serviços, como troca de óleo, lavador, lubrificação, lavanderia, barbearia, academia, borracharia e outros mais. Nossos postos de combustíveis estão localizados em diversos pontos do RJ, ES e são facilmente encontrados em aplicativos de locomoção. Temos a confiança como um de nossos pilares. Por isso, prezamos por produtos versáteis e de qualidade, garantindo ao consumidor que seus automóveis receberão um combustível de procedência garantida.
        <Spacer mt={4} />
        Hoje contamos com 4 postos de combustíveis: Posto Cavil, Posto Caju, Posto JR Mimoso e Posto JR Tanguá. Ao longo da nossa história conseguimos conquistar algumas premiações: o Posto Caju foi eleito por 3 vezes o melhor posto do Brasil pela Petrobras, o Posto Cavil ganhou midas (melhor posto do brasil pela Ipiranga) na Categoria Urbano e o Posto JR Tanguá ganhou o midas na categoria Rodovia.
        <Spacer mt={4} />
        Estamos construindo uma grande história e contamos com você para fazer parte dela.
      </InfosPage>
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
