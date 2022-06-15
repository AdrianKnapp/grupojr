import { Flex } from '@chakra-ui/react';
import Link from 'next/link';
import { theme } from '../../../styles/theme';
import { StationDetails } from './StationDetails';
import { StationThumb } from './StationThumb';

export function PageItem() {
  return (
    <Link href="/">
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
        <StationThumb />
        <StationDetails />
      </Flex>
    </Link>
  );
}
