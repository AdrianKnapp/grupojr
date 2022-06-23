import {
  Box, Flex, Spacer,
} from '@chakra-ui/react';
import { theme } from '../../styles/theme';
import { Credits } from './Credits';
import { Left } from './side/Left';
import { Right } from './side/Right';
import useMediaQuery from '../../hooks/useMediaQuery';

export function Footer() {
  const [isMobile] = useMediaQuery('(max-width: 950px)');

  return (
    <Flex
      as="footer"
      w="100%"
      bgColor={theme.colors.text}
      color="white"
      mt={8}
      direction="column"
      align="center"
    >
      <Flex
        h="100%"
        w="100%"
        maxW={theme.container.width.desktop}
        align="start"
        px={theme.container.padding.desktop}
        py={5}
        direction={[
          'column',
          'column',
          'column',
          'row',
        ]}
      >
        <Box flex={1}>
          <Left />
        </Box>
        {isMobile && <Spacer mt={5} />}
        <Box flex={1}>
          <Right />
        </Box>
      </Flex>
      <Flex
        h="100%"
        w="100%"
        maxW={theme.container.width.full}
        align="center"
        py={2}
        borderTop="1px solid"
        borderColor="gray.400"
      >
        <Credits />
      </Flex>
    </Flex>
  );
}
