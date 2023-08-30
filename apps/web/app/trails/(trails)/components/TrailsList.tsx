'use client';

import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { LngLat, Trail } from 'types';

import { TrailCard } from '@components';
import { isPointInBounds, searchParamsToBounds } from '@utils';

interface Props {
  trails: Trail[];
}

export function TrailsList({ trails }: Props): JSX.Element {
  const searchParams = useSearchParams();
  const parsedParams = useMemo(() => searchParamsToBounds(searchParams), [searchParams]);
  return (
    <div className="grid grid-cols-1 gap-4 px-4 pb-4">
      {trails
        .filter((t) => (parsedParams ? isPointInBounds(t.location.coordinates as LngLat, parsedParams.bounds) : true))
        .map((trail) => (
          <TrailCard key={trail.slug} width={300} height={300} trail={trail} />
        ))}
    </div>
  );
}
