import { Grid, GridItem } from '@chakra-ui/react';
import { theme } from '../../styles/theme';
import { PageProps } from '../../types/pages';
import { PageItem } from './PageItem/index.';

type PagesListProps = {
  pages: PageProps[];
}

export function PagesList({ pages }: PagesListProps) {
  return (
    <Grid
      templateColumns={[
        'repeat(1, 1fr)',
        'repeat(1, 1fr)',
        'repeat(1, 1fr)',
        'repeat(2, 1fr)',
      ]}
      gap={5}
      as="section"
      id="postos"
      h="auto"
      w="100%"
      maxW={theme.container.width.desktop}
      px={theme.container.padding.desktop}
      mt={8}
      mx="auto"
    >
      {pages.map((page) => page.attributes.name.toUpperCase() !== 'HOME' && (
      <GridItem w="100%" key={page.id}>
        <PageItem page={page} />
      </GridItem>
      ))}
    </Grid>
  );
}
