import {
  Flex, IconButton, ListItem, Menu, MenuButton, MenuItem, MenuList, UnorderedList,
} from '@chakra-ui/react';
import { CgMenu } from 'react-icons/cg';
import { theme } from '../../styles/theme';
import { ActiveLink } from '../ActiveLink';
import useMediaQuery from '../../hooks/useMediaQuery';

type menuItem = {
  text: string;
  href: string;
}

export function NavMenu() {
  const [isMobile] = useMediaQuery('(max-width: 768px)');

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

  const getMenuItems = () => menuItems.map(({ text, href }) => {
    const listItem = isMobile ? (
      <ListItem
        cursor="pointer"
        h="100%"
        width="100%"
        d="flex"
        alignItems="center"
        px={3}
        color={theme.colors.text}
        transition="all 0.2s"
        py={2}
      >
        { text }
      </ListItem>
    ) : (
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
    );

    const individualItem = (
      <ActiveLink href={href} key={href} shouldMatchExactHref isMobile={isMobile}>
        { listItem }
      </ActiveLink>
    );

    return isMobile ? (
      <MenuItem key={href} _focus={{ background: 'white' }} w="100%" className="menuMobileItem">
        { individualItem }
      </MenuItem>
    ) : (
      individualItem
    );
  });

  const desktopMenu = (
    <Flex h="100%">
      <UnorderedList d="flex" styleType="none" gap={10} h="100%">
        {getMenuItems()}
      </UnorderedList>
    </Flex>
  );

  const MobileMenu = (
    <Flex h="100%" align="center">
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton
              as={IconButton}
              isActive={isOpen}
              aria-label="Options"
              icon={<CgMenu />}
              variant="outline"
              fontSize={24}
            />
            <MenuList zIndex={2} boxShadow=" 0px 0px 10px 0px rgba(0,0,0,0.3)">
              <UnorderedList margin={0} w="100%">
                {getMenuItems()}
              </UnorderedList>
            </MenuList>
          </>
        )}
      </Menu>
    </Flex>
  );

  if (isMobile === null) return null;

  return !isMobile ? desktopMenu : MobileMenu;
}
