import { Text } from '@chakra-ui/react';
import React from 'react';

type HeaderProps = {
  children: React.ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <Text
      fontWeight="bold"
      fontSize={[
        'lg',
        'xl',
        '2xl',
      ]}
      mb={[
        1,
        3,
        5,
      ]}
    >
      {children}
    </Text>
  );
}
