import { Flex } from '@chakra-ui/react';
import Link from 'next/link';
import { BsFacebook } from 'react-icons/bs';
import { RiInstagramLine } from 'react-icons/ri';

export function IconsBox() {
  return (
    <Flex gap={5}>
      <Link href="https://facebook.com" passHref>
        <a target="_blank">
          <BsFacebook fontSize={35} cursor="pointer" />
        </a>
      </Link>
      <Link href="https://instagram.com" passHref>
        <a target="_blank">
          <RiInstagramLine fontSize={35} cursor="pointer" target="_blank" />
        </a>
      </Link>
    </Flex>
  );
}
