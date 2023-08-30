import { ReadonlyURLSearchParams } from 'next/navigation';
import { Bounds } from 'types';

export function searchParamsToBounds(search: ReadonlyURLSearchParams): { bounds: Bounds; zoom: number } | null {
  const neLat = search.get('ne_lat');
  const neLng = search.get('ne_lng');
  const swLat = search.get('sw_lat');
  const swLng = search.get('sw_lng');
  const z = search.get('z');
  if (neLat && neLng && swLat && swLng && z) {
    return {
      bounds: {
        _ne: { lng: parseFloat(neLng), lat: parseFloat(neLat) },
        _sw: { lng: parseFloat(swLng), lat: parseFloat(swLat) },
      },
      zoom: parseInt(z),
    };
  }
  return null;
}
