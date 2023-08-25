'use client';

import { Trail } from 'types';

import { TrailCard } from '@components';
import { useMapBounds } from '@lib/state';
import { isPointInBounds } from '@utils';

interface Props {
  trails: Trail[];
}

export default function TrailsList({ trails }: Props): JSX.Element {
  const { bounds } = useMapBounds();
  return (
    <div className="grid grid-cols-3 gap-4 px-4 pb-4">
      {trails
        .filter((t) => isPointInBounds(t.coordinates, bounds))
        .map((trail) => (
          <TrailCard key={trail.slug} width={300} height={300} trail={trail} />
        ))}
    </div>
  );
}
