import { Flex } from '@chakra-ui/react';
import Link from 'next/link';
import { theme } from '../../../styles/theme';
import { PageProps } from '../../../types/pages';
import { PageDetails } from './PageDetails';
import { PageThumb } from './PageThumb';

type PageItemProps = {
  page: PageProps;
}

export function PageItem({ page }: PageItemProps) {
  const {
    slug, name, local, banner,
  } = page.attributes;
  const bannerImages = banner.data.attributes.images.data;
  const [firstBannerImage] = bannerImages || [];

  return (
    <Link href={`/postos/${slug}`}>
      <Flex
        borderRadius={5}
        borderWidth={3}
        borderColor={theme.colors.text}
        overflow="hidden"
        bgColor="white"
        boxShadow="0px 0px 15px 0px rgba(0,0,0,0.1);"
        cursor="pointer"
        transition=".2s"
        _hover={{
          borderColor: theme.colors.highlight,
          transform: 'translateY(-5px)',
        }}
      >
        {firstBannerImage && <PageThumb image={firstBannerImage} />}
        <PageDetails name={name} local={local} />
      </Flex>
    </Link>
  );
}
