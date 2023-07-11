import { Button as ChakraButton } from '@chakra-ui/react';

export default function Button() {
  return (
    <ChakraButton
      fontSize={[12, 14, 14]}
      height="auto"
      padding={[
        3,
        3,
        3,
      ]}
      mt={[3, 3, 4]}
    >
      Ver mais
    </ChakraButton>
  );
}
