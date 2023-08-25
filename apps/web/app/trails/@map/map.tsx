'use client';

import { Icon } from 'leaflet';
import iconData from 'leaflet/dist/images/marker-icon.png';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Trail } from 'types';

const icon = new Icon({
  iconUrl: iconData.src,
  iconSize: [25, 40],
});

interface Props {
  points: Trail[];
}

export default function Map({ points = [] }: Props): JSX.Element {
  return (
    <MapContainer center={[48.669, 19.699]} zoom={8} scrollWheelZoom style={{ height: '100%', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {points.map((point) => (
        <Marker key={point.id} icon={icon} position={point.coordinates}>
          <Popup>{point.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
