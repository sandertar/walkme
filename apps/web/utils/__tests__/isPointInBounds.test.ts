import { isPointInBounds } from '../isPointInBounds';

describe('isPointInBounds', () => {
  it('returns true if the point is in the bounds', () => {
    const bounds = {
      _ne: { lat: 10, lng: 10 },
      _sw: { lat: 0, lng: 0 },
    };
    const point: [number, number] = [5, 5];
    expect(isPointInBounds(point, bounds)).toBe(true);
  });

  it('returns false if the point is not in the bounds', () => {
    const bounds = {
      _ne: { lat: 10, lng: 10 },
      _sw: { lat: 0, lng: 0 },
    };
    const point: [number, number] = [11, 11];
    expect(isPointInBounds(point, bounds)).toBe(false);
  });
});
