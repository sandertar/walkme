import { LatLng, Bounds } from 'types';

export function isPointInBounds(latLng: LatLng, bounds: Bounds) {
  return (
    latLng[0] < bounds.northEast[0] &&
    latLng[1] < bounds.northEast[1] &&
    latLng[0] > bounds.southWest[0] &&
    latLng[1] > bounds.southWest[1]
  );
}
