import { Box, Flex, Tooltip } from '@chakra-ui/react';
import FsLightbox from 'fslightbox-react';
import { useState } from 'react';
import { theme } from '../../../styles/theme';
import { AttractionProps } from '../../../types/attraction';
import { StationDetails } from './StationDetails';
import { StationThumb } from './StationThumb';

type PageItemProps = {
  attraction: AttractionProps;
}

export function PageItem({ attraction }: PageItemProps) {
  const {
    name,
    details,
    images,
  } = attraction.attributes;

  const [toggleViewImage, setToggleViewImage] = useState(false);

  return (
    <Tooltip
      label="Ver mais imagens"
      placement="auto"
      bgColor={theme.colors.text}
      color="white"
      fontSize="md"
    >
      <Box>
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
          direction="column"
          onClick={() => setToggleViewImage(!toggleViewImage)}
        >

          <StationThumb image={images.data[0]} />
          <StationDetails name={name} details={details} />
        </Flex>
        <FsLightbox
          toggler={toggleViewImage}
          sources={images.data.map((image) => image.attributes.url)}
        />
      </Box>
    </Tooltip>
  );
}
