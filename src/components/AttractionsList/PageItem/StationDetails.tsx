import { Flex, Text } from '@chakra-ui/react';
import { theme } from '../../../styles/theme';

type StationDetailsProps = {
  name: string;
  details: string;
}

export function StationDetails({ name, details }: StationDetailsProps) {
  return (
    <Flex padding={5} direction="column" gap={3}>
      <Text as="h3" color={theme.colors.text} fontWeight="extrabold" fontSize={30} textAlign="center">
        {name}
      </Text>
      <Text fontWeight="medium">
        {details}
      </Text>
    </Flex>
  );
}
