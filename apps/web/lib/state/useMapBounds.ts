import { Bounds } from 'types';
import { create } from 'zustand';

import appConfig from '../../appconfig';

interface MapBounds {
  bounds: Bounds;
  setActiveBounds: (bounds: Bounds) => void;
}

export const useMapBounds = create<MapBounds>((set) => ({
  bounds: appConfig.mapBounds,
  setActiveBounds: (bounds): void => {
    set({ bounds });
  },
}));
