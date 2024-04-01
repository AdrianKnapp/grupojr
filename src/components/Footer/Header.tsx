import { As, Text } from '@chakra-ui/react';
import React from 'react';

type HeaderProps = {
  children: React.ReactNode;
  as?: As;
};

export function Header({ children, as }: HeaderProps) {
  return (
    <Text
      as={as}
      fontWeight="bold"
      fontSize={['lg', 'xl', '2xl']}
      mb={[1, 3, 5]}
    >
      {children}
    </Text>
  );
}
