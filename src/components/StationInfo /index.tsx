import { Box, Flex, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

type StationInfoProps = {
  title: string;
  description: string | ReactNode;
  icon: ReactNode;
}

export function StationInfo({ title, description, icon }: StationInfoProps) {
  return (
    <Flex width="100%" direction="column">
      <Text
        as="h3"
        fontWeight="black"
        fontSize={[
          20,
          22,
          28,
        ]}
        mb={3}
      >
        {title}
      </Text>
      <Flex gap={3}>
        {icon && (
          <Box>
            {icon}
          </Box>
        )}
        <Box fontSize={[
          12,
          14,
          18,
        ]}
        >
          {description}
        </Box>
      </Flex>
    </Flex>
  );
}
