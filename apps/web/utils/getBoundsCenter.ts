import { Bounds, LngLat } from 'types';

export function getBoundsCenter(bounds: Bounds): LngLat {
  const { _ne, _sw } = bounds;
  const lat = (_ne.lat + _sw.lat) / 2;
  const lng = (_ne.lng + _sw.lng) / 2;
  return [lng, lat];
}
