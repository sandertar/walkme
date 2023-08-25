export interface Trail {
  name: string;
  description: string;
  slug: string;
  id: number;
  coordinates: [number, number];
  region: string;
  rating: number;
  photos: string[];
}
