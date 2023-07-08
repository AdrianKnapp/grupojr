import { Grid, GridItem } from '@chakra-ui/react';
import { theme } from '../../styles/theme';
import { AttractionProps } from '../../types/attraction';
import { PageItem } from './PageItem/index.';

type AttractionsListProps = {
  attractions: AttractionProps[];
}

export function AttractionsList({ attractions }: AttractionsListProps) {
  return (
    <Grid
      templateColumns={[
        'repeat(2, 1fr)',
        'repeat(2, 1fr)',
        'repeat(2, 1fr)',
        'repeat(3, 1fr)',
      ]}
      mt={4}
      gap={[
        2,
        3,
        5,
      ]}
      as="section"
      id="postos"
      h="auto"
      w="100%"
      maxW={theme.container.width.desktop}
      mx="auto"
    >
      {attractions.map((attraction) => (
        <GridItem w="100%" key={attraction.id}>
          <PageItem attraction={attraction} />
        </GridItem>
      ))}
    </Grid>
  );
}
