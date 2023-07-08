import { Flex, SimpleGrid } from '@chakra-ui/react';
import { AiOutlinePhone } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import { theme } from '../../styles/theme';
import { PageProps } from '../../types/pages';
import { IconsBox } from '../IconsBox';
import Map from '../Map';
import { StationInfo } from '../StationInfo ';

type StationInfoProps = {
  station: PageProps['attributes'];
}

export function StationDetails({ station }: StationInfoProps) {
  return (
    <SimpleGrid minChildWidth={['200px', '300px', '400px']} columns={2} spacing="20px" mt={8}>
      <Flex direction="column">
        <StationInfo
          title="Localização"
          description={station.local}
          icon={<BiMap fontSize={30} color={theme.colors.text} />}
        />
        <Map />
      </Flex>
      <SimpleGrid minChildWidth={['200px', '100px', '200px']} columns={2} spacing="20px">
        {station?.socialmedia && (
        <StationInfo
          title="Redes sociais"
          description={<IconsBox href={station?.socialmedia} />}
          icon={null}
        />
        )}
        <StationInfo
          title="Contato"
          description={station.contact}
          icon={<AiOutlinePhone fontSize={35} />}
        />
      </SimpleGrid>
    </SimpleGrid>
  );
}
