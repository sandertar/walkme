import { getBoundsCenter } from '../getBoundsCenter';

describe('getBoundsCenter', () => {
  it('should return the center of the bounds', () => {
    const bounds = {
      _sw: { lat: 1, lng: 2 },
      _ne: { lat: 3, lng: 4 },
    };
    expect(getBoundsCenter(bounds)).toEqual([3, 2]);
  });
});
