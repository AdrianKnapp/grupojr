import { Flex, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

type StationInfoProps = {
  title: string;
  description: string;
  icon: ReactNode;
}

export function StationInfo({ title, description, icon }: StationInfoProps) {
  return (
    <Flex width="100%" direction="column">
      <Text
        as="h3"
        fontWeight="black"
        fontSize="2xl"
        mb={3}
      >
        {title}
      </Text>
      <Flex gap={3}>
        {icon}
        {description}
      </Flex>
    </Flex>
  );
}
