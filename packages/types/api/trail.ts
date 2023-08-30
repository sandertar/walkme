import { GeoJSONFeatureCollection, GeoJSONGeometry } from '../common';

export interface Trail {
  name: string;
  description: string;
  slug: string;
  id: number;
  location: GeoJSONGeometry;
  trail: GeoJSONFeatureCollection;
  region: string;
  rating: number;
  photos: string[];
}
