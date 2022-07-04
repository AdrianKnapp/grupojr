import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { theme } from '../../styles/theme';

export function Credits() {
  return (
    <Flex
      justify="space-between"
      width="100%"
      maxW={theme.container.width.desktop}
      mx="auto"
      px={[
        theme.container.padding.mobile,
        theme.container.padding.mobile,
        theme.container.padding.desktop,
      ]}
      direction={[
        'column',
        'column',
        'row',
      ]}
    >
      <Text color="gray.200" fontSize={['xs', 'sm', 'sm']} textAlign="center">
        Grupo JR - Todos os direitos reservados
      </Text>
      <Link href="https://flow.page/adrianknapp" passHref>
        <a target="_blank">
          <Text color="gray.200" fontSize={['xs', 'sm', 'sm']} cursor="pointer" textDecoration="underline" textAlign="center">
            Desenvolvido por Adrian Knapp
          </Text>
        </a>
      </Link>
    </Flex>
  );
}
