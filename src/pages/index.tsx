import { GetStaticProps } from 'next';
import { Hero } from '../components/banners/Hero';
import api from '../services/api';
import { BannerProps } from '../types/banner';

type HomeProps = {
  banner: BannerProps;
}

export default function Home({ banner }: HomeProps) {
  return (
    <div>
      {banner && <Hero images={banner.images} />}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('/paginas?name=Home');
  const [{ banner }] = data;

  return {
    props: {
      banner,
    },
    revalidate: 60, // 60 seconds
  };
};
