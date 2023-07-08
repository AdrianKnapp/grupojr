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
        1,
        1,
        2,
      ]}
      direction="column"
      gap={[
        0,
        2,
        3,
      ]}
    >
      <Text as="h3" color={theme.colors.text} fontWeight="bold" fontSize={[14, 18, 20]} textAlign="center">
        {name}
      </Text>
      {details ? (
        <Text fontWeight="medium" fontSize={[12, 14, 16]}>
          {details}
        </Text>
      ) : null}
    </Flex>
  );
}
