import React from 'react';
import GoogleMapReact from 'google-map-react';

const LAT = -21.0717996215792;
const LNG = -41.22712832327406;

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
    console.log('🚀 ~ file: index.tsx:29 ~ renderMarkers ~ marker:', marker);
  }

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '300px', width: '100%' }}>
      <GoogleMapReact
        center={{
          lat: LAT,
          lng: LNG,
        }}
        zoom={11}
        bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API_KEY }}
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      />
    </div>
  );
}
