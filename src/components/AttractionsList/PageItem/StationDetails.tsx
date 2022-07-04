import { Flex, Text } from '@chakra-ui/react';
import { theme } from '../../../styles/theme';

type StationDetailsProps = {
  name: string;
  details: string;
}

export function StationDetails({ name, details }: StationDetailsProps) {
  return (
    <Flex
      padding={[
        2,
        3,
        5,
      ]}
      direction="column"
      gap={[
        0,
        2,
        3,
      ]}
    >
      <Text as="h3" color={theme.colors.text} fontWeight="extrabold" fontSize={[14, 18, 24]} textAlign="center">
        {name}
      </Text>
      <Text fontWeight="medium" fontSize={[12, 14, 16]}>
        {details}
      </Text>
    </Flex>
  );
}
