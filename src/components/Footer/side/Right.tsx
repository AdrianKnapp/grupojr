import { Flex, Spacer } from '@chakra-ui/react';
import { Header } from '../Header';
import { TextInfo } from '../TextInfo';
import { IconsBox } from './IconsBox';

export function Right() {
  return (
    <Flex width="100%" height="100%" direction="column" justify="start">
      <Header>
        Contatos
      </Header>
      <TextInfo>
        Telefone: +55 (81) 3279-4559
      </TextInfo>
      <TextInfo>
        Whatsapp comercial: +55 (81) 9 8472-23-04
      </TextInfo>
      <TextInfo>
        E-mail: suporte@postojr.com.br
      </TextInfo>
      <Spacer mt={5} />
      <IconsBox />
    </Flex>
  );
}
