import { Flex, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { theme } from '../../styles/theme';
import { BannerImagesProps } from '../../types/banner';
import { Carousel } from '../banners/Carousel';

type InfosPageProps = {
  title: string;
  children: string | ReactNode;
  bannerImages?: BannerImagesProps[];
}

function InfosPage({ title, children, bannerImages }: InfosPageProps) {
  return (
    <Flex
      w="100%"
      maxW={theme.container.width.desktop}
      px={[
        theme.container.padding.desktop,
        theme.container.padding.desktop,
        theme.container.padding.desktop,
      ]}
      mx="auto"
      direction="column"
      marginTop={5}
      gap={5}
    >
      {bannerImages && (
        <Flex>
          <Carousel images={bannerImages} customDesktopHeight={600} customMobileHeight={250} />
        </Flex>
      )}
      <Flex direction="column" gap={3}>
        <Text as="h3" color={theme.colors.text} fontWeight="extrabold" fontSize={[20, 30, 40]}>
          {title}
        </Text>
        <Text fontWeight="medium" fontSize={[11, 14, 16]}>
          {children}
        </Text>
      </Flex>
    </Flex>
  );
}

export default InfosPage;
