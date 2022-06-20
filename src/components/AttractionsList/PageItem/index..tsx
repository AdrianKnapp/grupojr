import { Box, Flex } from '@chakra-ui/react';
import FsLightbox from 'fslightbox-react';
import { useState } from 'react';
import { theme } from '../../../styles/theme';
import { StationDetails } from './StationDetails';
import { StationThumb } from './StationThumb';

export function PageItem() {
  const [toggleViewImage, setToggleViewImage] = useState(false);

  return (
    <>
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
      >
        <Box onClick={() => setToggleViewImage(!toggleViewImage)}>
          <StationThumb />
        </Box>
        <StationDetails />
      </Flex>
      <FsLightbox
        toggler={toggleViewImage}
        sources={[
          'https://i.imgur.com/fsyrScY.jpg',
          'https://www.youtube.com/watch?v=xshEZzpS4CQ',
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        ]}
      />
    </>
  );
}
