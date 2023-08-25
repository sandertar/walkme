import { Trail } from 'types';

export async function getTrails(): Promise<Trail[]> {
  const trails = await fetch('http://localhost:8080/api/v1/tours').then((res) => res.json());
  return trails;
}
