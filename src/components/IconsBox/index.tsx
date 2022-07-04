import { Flex } from '@chakra-ui/react';
import Link from 'next/link';
import { BsFacebook } from 'react-icons/bs';
import { RiInstagramLine, RiWhatsappLine } from 'react-icons/ri';

export function IconsBox({ href }: { href: string }) {
  return (
    <Link href={href} passHref>
      <a target="_blank">
        <Flex gap={5}>
          <Flex>
            <BsFacebook fontSize={35} cursor="pointer" />
          </Flex>
          <Flex>
            <RiInstagramLine fontSize={35} cursor="pointer" />
          </Flex>
          <Flex>
            <RiWhatsappLine fontSize={35} cursor="pointer" />
          </Flex>
        </Flex>
      </a>
    </Link>
  );
}
