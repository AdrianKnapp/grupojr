import { Flex, Text } from '@chakra-ui/react';
import { BiMap } from 'react-icons/bi';
import { theme } from '../../../styles/theme';

type PageDetailsProps = {
  name: string;
  local: string;
}

export function PageDetails({ name, local }: PageDetailsProps) {
  return (
    <Flex padding={5} direction="column" gap={3}>
      <Text as="h3" color={theme.colors.text} fontWeight="extrabold" fontSize={30}>
        {name}
      </Text>
      {local && (
        <Flex gap={3}>
          <BiMap fontSize={30} color={theme.colors.text} />
          <Text fontWeight="medium">
            {local}
          </Text>
        </Flex>
      )}
    </Flex>
  );
}
