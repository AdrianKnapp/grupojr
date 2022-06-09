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
        REDE JR COMBUSTIVEIS LTDA.
      </TextInfo>
      <TextInfo>
        CNPJ: 14.325.976/0001-40
      </TextInfo>
      <Spacer mt={5} />
      <TextInfo>
        R. Alm. Barroso, 2360;
      </TextInfo>
      <TextInfo>
        CEP: 87054-240
      </TextInfo>
      <TextInfo>
        Campo Grande, MS
      </TextInfo>
    </Flex>
  );
}
