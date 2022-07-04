import { Flex, Spacer } from '@chakra-ui/react';
import Link from 'next/link';
import { Header } from '../Header';
import { TextInfo } from '../TextInfo';

export function Right() {
  return (
    <Flex width="100%" height="100%" direction="column" justify="start">
      <Header>
        Contatos
      </Header>
      <TextInfo>
        Telefone e Whatsapp: (22) 99981-0383
      </TextInfo>
      <TextInfo>
        E-mail: escritoriobj.postos@hotmail.com
      </TextInfo>
      <Spacer mt={5} />
      {/* <IconsBox /> */}
      <Link href="https://linktr.ee/grupo.jr" passHref>
        <a target="_blank">
          <TextInfo textDecoration="underline">
            Conheça nossas redes sociais
          </TextInfo>
        </a>
      </Link>
    </Flex>
  );
}
