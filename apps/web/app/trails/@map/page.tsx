import { Trail } from 'types';

import Map from './map';

async function getData(): Promise<Trail[]> {
  const trails = await fetch('http://localhost:8080/api/v1/tours').then((res) => res.json());
  return trails;
}

export default async function TrailsPage(): Promise<JSX.Element> {
  const trails = await getData();
  return <Map points={trails} />;
}
