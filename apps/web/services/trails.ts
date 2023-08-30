import { Trail } from 'types';

export async function getTrails(): Promise<Trail[]> {
  const trails = await fetch('http://localhost:8080/api/v1/tours').then((res) => res.json());
  return trails;
}

export async function getTrailDetails({ slug }: { slug: string }): Promise<Trail> {
  const trails = await fetch(`http://localhost:8080/api/v1/tours/${slug}`).then((res) => res.json());
  return trails;
}
