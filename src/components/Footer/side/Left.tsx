import { Flex, Spacer } from '@chakra-ui/react';
import { Header } from '../Header';
import { TextInfo } from '../TextInfo';

export function Left() {
  return (
    <Flex width="100%" height="100%" direction="column">
      <Header>
        Grupo JR
      </Header>
      <TextInfo>
        Grupo de Postos JR
      </TextInfo>
      <Spacer mt={5} />
      <TextInfo>
        Av. Major Barbosa, S/N, Centro.
      </TextInfo>
      <TextInfo>
        CEP: 29.460-000
      </TextInfo>
      <TextInfo>
        Bom Jesus do Norte - ES.
      </TextInfo>
    </Flex>
  );
}
