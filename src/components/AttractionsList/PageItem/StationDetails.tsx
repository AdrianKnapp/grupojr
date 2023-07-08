import { Flex, Text } from '@chakra-ui/react';
import { theme } from '../../../styles/theme';
import Button from '../../Button';

type StationDetailsProps = {
  name: string;
  details: string;
}

export function StationDetails({ name, details }: StationDetailsProps) {
  return (
    <Flex
      padding={[
        2,
        2,
        2,
      ]}
      direction="column"
    >
      <Text as="h3" color={theme.colors.text} fontWeight="medium" fontSize={[14, 16, 16]} textAlign="center">
        {name}
      </Text>
      {details ? (
        <Text fontWeight="medium" fontSize={[12, 14, 16]}>
          {details}
        </Text>
      ) : null}
      <Button />
    </Flex>
  );
}
