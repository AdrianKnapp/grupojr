import { Flex, ListItem, UnorderedList } from '@chakra-ui/react';

export function NavMenu() {
  const menuItems: string[] = [
    'Postos',
    'Sobre nós',
    'Transportadora',
    'Controle de frotas',
  ];

  return (
    <Flex>
      <UnorderedList d="flex" styleType="none" gap={20}>
        {menuItems.map((item) => (
          <ListItem fontWeight="medium">{item}</ListItem>
        ))}
      </UnorderedList>
    </Flex>
  );
}
