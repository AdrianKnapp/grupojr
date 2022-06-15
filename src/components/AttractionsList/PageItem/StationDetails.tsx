import { Flex, Text } from '@chakra-ui/react';
import { BiMap } from 'react-icons/bi';
import { theme } from '../../../styles/theme';

export function StationDetails() {
  return (
    <Flex padding={5} direction="column" gap={3}>
      <Text as="h3" color={theme.colors.text} fontWeight="extrabold" fontSize={30}>
        Posto X
      </Text>
      <Flex gap={3}>
        <BiMap fontSize={30} color={theme.colors.text} />
        <Text fontWeight="medium">
          Campo Grande, 32281-189, Vinte e Quatro, 2224.
        </Text>
      </Flex>
    </Flex>
  );
}
