import { Grid, GridItem, Text } from '@chakra-ui/react';
import { theme } from '../../styles/theme';
import { AttractionProps } from '../../types/attraction';
import { PageItem } from './PageItem/index.';

type AttractionsListProps = {
  attractions: AttractionProps[];
}

export function AttractionsList({ attractions }: AttractionsListProps) {
  return (
    <>
      <Text
        as="h3"
        mt={8}
        fontWeight="black"
        fontSize="2xl"
      >
        Atrativos
      </Text>
      <Grid
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(1, 1fr)',
          'repeat(1, 1fr)',
          'repeat(3, 1fr)',
        ]}
        gap={5}
        as="section"
        id="postos"
        h="auto"
        w="100%"
        maxW={theme.container.width.desktop}
        mt={3}
        mx="auto"
      >
        {attractions.map((attraction) => (
          <GridItem w="100%" key={attraction.id}>
            <PageItem attraction={attraction} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
}
