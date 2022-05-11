import { Flex } from '@chakra-ui/react';
import { Logo } from './Logo';
import { NavMenu } from './NavMenu';
import { theme } from '../../styles/theme';

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      h={20}
      align="center"
      justify="center"
      boxShadow="0px 0px 15px 0px rgba(0, 0, 0, 0.2)"
      bgColor="white"
    >
      <Flex h="100%" w="100%" maxW={theme.container.width.desktop} align="center" px={theme.container.padding.desktop} justify="space-between">
        <Logo />
        <NavMenu />
      </Flex>
    </Flex>
  );
}
