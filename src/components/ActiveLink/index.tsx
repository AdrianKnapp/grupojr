import { Flex } from '@chakra-ui/react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { cloneElement, ReactElement } from 'react';
import { theme } from '../../styles/theme';

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
}

export function ActiveLink({ children, shouldMatchExactHref = false, ...rest }: ActiveLinkProps) {
  const { pathname } = useRouter();
  let isActive = false;

  if (shouldMatchExactHref && (pathname === rest.href || pathname === rest.as)) {
    isActive = true;
  }

  if (!shouldMatchExactHref
    && (pathname.startsWith(String(rest.href))
    || pathname.startsWith(String(rest.as)))) {
    isActive = true;
  }

  const activeLinkBar = isActive ? {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '3px',
    bg: theme.colors.highlight,
    opacity: '1',
    bottom: '0',
  } : {
    content: '""',
  };

  return (
    <Link {...rest}>
      <Flex
        position="relative"
        _after={activeLinkBar}
      >
        {cloneElement(children, {
          fontWeight: isActive ? 'black' : 'medium',
          _hover: {
            opacity: !isActive ? '0.5' : '1',
          },
        })}
      </Flex>
    </Link>
  );
}
