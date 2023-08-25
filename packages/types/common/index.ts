export type LatLng = [lat: number, lng: number];

export interface Bounds {
  northEast: LatLng;
  southWest: LatLng;
}
