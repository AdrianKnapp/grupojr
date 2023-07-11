import { Box, Flex, Text } from '@chakra-ui/react';
import { BiMap } from 'react-icons/bi';
import { theme } from '../../../styles/theme';
import Button from '../../Button';

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
        4,
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
          fontSize={[18, 22, 24]}
        >
          {name}
        </Text>
        {local && (
        <Flex gap={2} alignItems="center">
          <Box>
            <BiMap fontSize={20} color={theme.colors.text} />
          </Box>
          <Text fontWeight="medium" fontSize={[12, 14, 14]}>
            {local}
          </Text>
        </Flex>
        )}
      </Flex>
      <Button />
    </Flex>
  );
}
