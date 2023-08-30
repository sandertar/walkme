import { LngLat, Bounds } from 'types';

export function isPointInBounds(lngLat: LngLat, bounds: Bounds) {
  return (
    lngLat[0] < bounds._ne.lng && lngLat[1] < bounds._ne.lat && lngLat[0] > bounds._sw.lng && lngLat[1] > bounds._sw.lat
  );
}
