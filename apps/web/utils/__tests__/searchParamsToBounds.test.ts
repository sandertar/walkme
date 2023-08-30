import { ReadonlyURLSearchParams } from 'next/navigation';
import { searchParamsToBounds } from '../searchParamsToBounds';

describe('searchParamsToBounds', () => {
  it('should return bounds if all params are present', () => {
    const search = new URLSearchParams({
      ne_lat: '1',
      ne_lng: '2',
      sw_lat: '3',
      sw_lng: '4',
    }) as ReadonlyURLSearchParams;
    expect(searchParamsToBounds(search)).toEqual({
      _ne: { lat: 1, lng: 2 },
      _sw: { lat: 3, lng: 4 },
    });
  });
  it('should return null if any param is missing', () => {
    const search = new URLSearchParams({
      ne_lat: '1',
      ne_lng: '2',
      sw_lat: '3',
    }) as ReadonlyURLSearchParams;
    expect(searchParamsToBounds(search)).toBeNull();
  });
});
