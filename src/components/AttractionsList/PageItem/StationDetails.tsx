import { Flex, Text } from '@chakra-ui/react';
import { theme } from '../../../styles/theme';

export function StationDetails() {
  return (
    <Flex padding={5} direction="column" gap={3}>
      <Text as="h3" color={theme.colors.text} fontWeight="extrabold" fontSize={30} textAlign="center">
        Posto X
      </Text>
      <Text fontWeight="medium">
        Campo Grande, 32281-189, Vinte e Quatro, 2224.
      </Text>
    </Flex>
  );
}
