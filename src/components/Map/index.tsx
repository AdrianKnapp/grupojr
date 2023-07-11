import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { Box, Skeleton } from '@chakra-ui/react';

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

type MapProps = {
  latitute: number;
  longitude: number;
}

export default function Map({
  latitute,
  longitude,
}: MapProps) {
  const [isLoading, setIsLoading] = useState(true);

  function renderMarkers(map, maps) {
    setIsLoading(false);

    const marker = new maps.Marker({
      position: {
        lat: latitute,
        lng: longitude,
      },
      map,
      title: 'Hello World!',
    });

    marker.addListener('click', () => {
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${latitute},${longitude}&travelmode=driving`, '_blank');
    });
  }

  return (
    <Skeleton endColor="gray.200" isLoaded={!isLoading}>
      <Box h={[150, 150, 200, 250]} w="100%" borderRadius={5} overflow="hidden">
        <GoogleMapReact
          center={{
            lat: latitute,
            lng: longitude,
          }}
          zoom={10}
          bootstrapURLKeys={{ key: API_KEY }}
          onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
        />
      </Box>
    </Skeleton>
  );
}
