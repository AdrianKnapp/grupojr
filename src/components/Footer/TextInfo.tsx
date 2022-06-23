import { Text } from '@chakra-ui/react';
import React from 'react';

type TextInfoProps = {
  children: React.ReactNode;
}

export function TextInfo({ children }: TextInfoProps) {
  return (
    <Text
      lineHeight={[
        '1.3rem',
        '1.5rem',
        '1.8rem',
      ]}
      fontWeight="medium"
      fontSize={[
        'xs',
        'sm',
        'md',
      ]}
    >
      {children}
    </Text>
  );
}
