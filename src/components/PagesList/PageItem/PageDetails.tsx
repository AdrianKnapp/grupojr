import { Button, Flex, Text } from '@chakra-ui/react';
import { BiMap } from 'react-icons/bi';
import { theme } from '../../../styles/theme';

type PageDetailsProps = {
  name: string;
  local: string;
}

export function PageDetails({ name, local }: PageDetailsProps) {
  return (
    <Flex
      direction="column"
      justifyContent="space-between"
      padding={[
        3,
        3,
        5,
      ]}
    >
      <Flex
        direction="column"
        gap={1}
      >
        <Text
          as="h3"
          color={theme.colors.text}
          fontWeight="extrabold"
          fontSize={[18, 22, 26]}
        >
          {name}
        </Text>
        {local && (
        <Flex gap={3}>
          <BiMap fontSize={35} color={theme.colors.text} />
          <Text fontWeight="medium" fontSize={[12, 14, 16]}>
            {local}
          </Text>
        </Flex>
        )}
      </Flex>
      <Button
        fontSize={[14]}
        height="auto"
        padding={[
          3,
          3,
          3,
        ]}
        mt={[4, 0]}
      >
        Ver mais
      </Button>
    </Flex>
  );
}
