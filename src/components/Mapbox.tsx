import { useEffect, useState } from 'preact/hooks';

import { Map, Marker } from 'react-map-gl';
import { FaLocationPin } from 'react-icons/fa6';

import useGeoLocation from '../hooks/useGeoLocation';
import data from '../assets/data.json';

export default function Mapbox() {
  const [isDark, setIsDark] = useState(false);

  const [mapStyle, setMapStyle] = useState(
    'mapbox://styles/mapbox/streets-v12'
  );

  useEffect(() => {
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    if (prefersDark) {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    setMapStyle(
      isDark
        ? 'mapbox://styles/mapbox/dark-v11'
        : 'mapbox://styles/mapbox/light-v11'
    );
  }, [isDark]);

  const currentLocation = useGeoLocation();

  return (
    <Map
      style={{
        width: '100%',
        height: '100%',
        borderRadius: '20px',
      }}
      mapboxAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
      mapStyle={mapStyle}
      initialViewState={{
        zoom: 12,
        latitude: 27.700769,
        longitude: 85.30014,
      }}
    >
      {currentLocation && (
        <Marker
          longitude={currentLocation.coordinates.lng}
          latitude={currentLocation.coordinates.lat}
        >
          <span class='relative flex h-3 w-3'>
            <span class='animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75'></span>
            <span class='relative inline-flex rounded-full h-3 w-3 bg-blue-400'></span>
          </span>
        </Marker>
      )}
      {data.map((location) => (
        <Marker
          key={location.name}
          longitude={location.longitude}
          latitude={location.latitude}
        >
          <FaLocationPin className='text-2xl text-emerald-500' />
        </Marker>
      ))}
    </Map>
  );
}
