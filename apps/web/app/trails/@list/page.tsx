import { Trail } from 'types';

import { TrailCard } from '../../../components';

async function getData(): Promise<Trail[]> {
  const trails = await fetch('http://localhost:8080/api/v1/tours').then((res) => res.json());
  return trails;
}

export default async function TrailsList(): Promise<JSX.Element> {
  const trails = await getData();
  return (
    <div className="grid grid-cols-3 gap-4 px-4 pb-4">
      {trails.map((trail) => (
        <TrailCard width={300} height={300} trail={trail} />
      ))}
    </div>
  );
}
