import { Flex, ListItem, UnorderedList } from '@chakra-ui/react';
import { theme } from '../../styles/theme';
import { ActiveLink } from '../ActiveLink';

type menuItem = {
  text: string;
  href: string;
}

export function NavMenu() {
  const menuItems: menuItem[] = [
    {
      text: 'Postos',
      href: '/',
    },
    {
      text: 'Sobre nós',
      href: '/sobre-nos',
    },
    {
      text: 'Transportadora',
      href: '/transportadora',
    },
    {
      text: 'Controle de frotas',
      href: '/controle-de-frotas',
    },
  ];

  return (
    <Flex h="100%">
      <UnorderedList d="flex" styleType="none" gap={10} h="100%">
        {menuItems.map(({ text, href }) => (
          <ActiveLink href={href} key={href} shouldMatchExactHref>
            <ListItem
              cursor="pointer"
              h="100%"
              d="flex"
              alignItems="center"
              px={3}
              color={theme.colors.text}
              transition="all 0.2s"
            >
              { text }
            </ListItem>
          </ActiveLink>
        ))}
      </UnorderedList>
    </Flex>
  );
}
