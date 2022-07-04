import { Flex, Text } from '@chakra-ui/react';
import { BiMap } from 'react-icons/bi';
import { theme } from '../../../styles/theme';
import useMediaQuery from '../../../hooks/useMediaQuery';

type PageDetailsProps = {
  name: string;
  local: string;
}

export function PageDetails({ name, local }: PageDetailsProps) {
  const [isMobile] = useMediaQuery('(max-width: 950px)');

  const getLocal = () => {
    if (isMobile) {
      return local;
    }

    return local.length > 40 ? `${local.substring(0, 55)}...` : local;
  };

  return (
    <Flex
      padding={[
        3,
        3,
        5,
      ]}
      direction="column"
      gap={[
        1,
        2,
        3,
      ]}
    >
      <Text
        as="h3"
        color={theme.colors.text}
        fontWeight="extrabold"
        fontSize={[18, 22, 26]}
      >
        {name}
      </Text>
      {local && (
        <Flex gap={3}>
          <BiMap fontSize={35} color={theme.colors.text} />
          <Text fontWeight="medium" fontSize={[12, 14, 16]}>
            {getLocal()}
          </Text>
        </Flex>
      )}
    </Flex>
  );
}
