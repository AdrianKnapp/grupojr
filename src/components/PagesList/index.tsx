import { Grid, GridItem } from '@chakra-ui/react';
import { theme } from '../../styles/theme';
import { PageItem } from './PageItem/index.';

export function PagesList() {
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
      mx="auto"
    >
      <GridItem w="100%">
        <PageItem />
      </GridItem>
      <GridItem w="100%">
        <PageItem />
      </GridItem>
      <GridItem w="100%">
        <PageItem />
      </GridItem>
      <GridItem w="100%">
        <PageItem />
      </GridItem>
    </Grid>
  );
}
