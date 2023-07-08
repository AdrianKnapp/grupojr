import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Box } from '@chakra-ui/react';

const LAT = -21.07214690742099;
const LNG = -41.227204891227586;

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

export default function Map() {
  function renderMarkers(map, maps) {
    const marker = new maps.Marker({
      position: {
        lat: LAT,
        lng: LNG,
      },
      map,
      title: 'Hello World!',
    });

    marker.addListener('click', () => {
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${LAT},${LNG}&travelmode=driving`, '_blank');
    });
  }

  return (
    <Box h={[150, 150, 200, 250]} w="100%" borderRadius={5} overflow="hidden">
      <GoogleMapReact
        center={{
          lat: LAT,
          lng: LNG,
        }}
        zoom={10}
        bootstrapURLKeys={{ key: API_KEY }}
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      />
    </Box>
  );
}
