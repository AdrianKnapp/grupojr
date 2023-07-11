import { Flex } from '@chakra-ui/react';
import Link from 'next/link';
import { RiInstagramLine, RiWhatsappLine, RiFacebookCircleLine } from 'react-icons/ri';

export function IconsBox({ href }: { href: string }) {
  return (
    <Link href={href} passHref>
      <a target="_blank">
        <Flex gap={3}>
          <Flex>
            <RiFacebookCircleLine fontSize={30} cursor="pointer" />
          </Flex>
          <Flex>
            <RiInstagramLine fontSize={30} cursor="pointer" />
          </Flex>
          <Flex>
            <RiWhatsappLine fontSize={30} cursor="pointer" />
          </Flex>
        </Flex>
      </a>
    </Link>
  );
}
