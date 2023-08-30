import { ReadonlyURLSearchParams } from 'next/navigation';
import { searchParamsToBounds } from '../searchParamsToBounds';

describe('searchParamsToBounds', () => {
  it('should return bounds if all params are present', () => {
    const search = new URLSearchParams({
      ne_lat: '1',
      ne_lng: '2',
      sw_lat: '3',
      sw_lng: '4',
      z: '7',
    }) as ReadonlyURLSearchParams;
    expect(searchParamsToBounds(search)).toEqual({
      bounds: {
        _ne: { lng: 2, lat: 1 },
        _sw: { lng: 4, lat: 3 },
      },
      zoom: 7,
    });
  });
  it('should return null if any param is missing (fe "z")', () => {
    const search = new URLSearchParams({
      ne_lat: '1',
      ne_lng: '2',
      sw_lat: '3',
      sw_lng: '4',
    }) as ReadonlyURLSearchParams;
    expect(searchParamsToBounds(search)).toBeNull();
  });
});
