import { ReadonlyURLSearchParams } from 'next/navigation';
import { Bounds } from 'types';

export function searchParamsToBounds(search: ReadonlyURLSearchParams): Bounds | null {
  const neLat = search.get('ne_lat');
  const neLng = search.get('ne_lng');
  const swLat = search.get('sw_lat');
  const swLng = search.get('sw_lng');
  if (neLat && neLng && swLat && swLng) {
    return {
      _ne: { lng: parseFloat(neLng), lat: parseFloat(neLat) },
      _sw: { lng: parseFloat(swLng), lat: parseFloat(swLat) },
    };
  }
  return null;
}
