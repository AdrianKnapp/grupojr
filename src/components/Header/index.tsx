import { Flex } from '@chakra-ui/react';
import { Logo } from './Logo';
import { NavMenu } from './NavMenu';

export function Header() {
  return (
    <Flex as="header" w="100%" maxW={1120} h={20} mx="auto" align="center" px={6} justify="space-between">
      <Logo />
      <NavMenu />
    </Flex>
  );
}
