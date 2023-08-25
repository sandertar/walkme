'use client';

import { Icon } from 'leaflet';
import iconData from 'leaflet/dist/images/marker-icon.png';
import { MapContainer, TileLayer, Marker, Popup, LayerGroup, useMapEvents } from 'react-leaflet';
import { Trail } from 'types';

import { useMapBounds } from '../../../../lib/state/useMapBounds';

const icon = new Icon({
  iconUrl: iconData.src,
  iconSize: [25, 40],
});

interface Props {
  points: Trail[];
}

function MapController(): JSX.Element {
  const { setActiveBounds } = useMapBounds();
  const map = useMapEvents({
    moveend: () => {
      const bounds = map.getBounds();
      setActiveBounds({
        northEast: [bounds.getNorthEast().lat, bounds.getNorthEast().lng],
        southWest: [bounds.getSouthWest().lat, bounds.getSouthWest().lng],
      });
    },
  });
  return null;
}

export default function Map({ points = [] }: Props): JSX.Element {
  return (
    <MapContainer center={[48.669, 19.699]} zoom={8} scrollWheelZoom style={{ height: '100%', width: '100%' }}>
      <MapController />
      <TileLayer
        attribution='<a href="https://api.mapy.cz/copyright">Seznam.cz a.s. and others</a>'
        url="https://api.mapy.cz/v1/maptiles/outdoor/256/{z}/{x}/{y}?apikey=0eRFg_TDMhO8IM-m-8C9gssx6WgREZwwnknLdKw3iqQ"
      />
      <LayerGroup>
        {points.map((point) => (
          <Marker title={point.slug} key={point.id} icon={icon} position={point.coordinates}>
            <Popup>{point.name}</Popup>
          </Marker>
        ))}
      </LayerGroup>
    </MapContainer>
  );
}
