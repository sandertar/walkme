import appConfig from '../../../appconfig';
import { useMapBounds } from '../useMapBounds';

describe('useMapBounds', () => {
  it('returns the map bounds', () => {
    expect(useMapBounds.getState().bounds).toEqual(appConfig.mapBounds);
  });
  it('sets the map bounds', () => {
    const bounds = {
      northEast: [1, 2],
      southWest: [3, 4],
    };
    useMapBounds.getState().setActiveBounds(bounds);
    expect(useMapBounds.getState().bounds).toEqual(bounds);
  });
});
