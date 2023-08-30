export type LngLat = [number, number];

export interface Bounds {
  _ne: { lat: number; lng: number };
  _sw: { lat: number; lng: number };
}

export interface GeoJSONGeometry {
  type: 'Point' | 'MultiPoint' | 'LineString' | 'MultiLineString' | 'Polygon' | 'MultiPolygon' | 'GeometryCollection';
  coordinates: number[] | number[][] | number[][][] | number[][][][];
}

export interface GeoJSONFeature {
  type: string;
  properties: {
    [key: string]: string;
  };
  geometry: GeoJSONGeometry;
}

export interface GeoJSONFeatureCollection {
  type: 'FeatureCollection';
  features: GeoJSONFeature[];
}
