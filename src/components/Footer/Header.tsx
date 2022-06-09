import { Text } from '@chakra-ui/react';
import React from 'react';

type HeaderProps = {
  children: React.ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <Text
      fontWeight="bold"
      fontSize="2xl"
      mb={5}
    >
      {children}
    </Text>
  );
}
