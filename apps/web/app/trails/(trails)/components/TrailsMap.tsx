'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import { Bounds, LngLat, Trail } from 'types';

import appConfig from '../../../../appconfig';
import ROUTES from '../../../../routes';

import { Map } from '@components';
import { getBoundsCenter, searchParamsToBounds } from '@utils';

interface Props {
  points: Trail[];
}

function boundsToQuery(bounds: Bounds, zoom: number): string {
  return `?ne_lat=${bounds._ne.lat}&ne_lng=${bounds._ne.lng}&sw_lat=${bounds._sw.lat}&sw_lng=${bounds._sw.lng}&z=${zoom}`;
}

export function TrailsMap({ points = [] }: Props): JSX.Element {
  const router = useRouter();
  const searchParams = useSearchParams();
  const parsedParams = useMemo(() => searchParamsToBounds(searchParams), [searchParams]);
  const markers = useMemo(
    () => points.map((p) => ({ coordinates: p.location.coordinates as LngLat, slug: p.slug })),
    [points],
  );
  const onMoveEnd = useCallback(
    (newBounds: Bounds, zoom: number): void => {
      router.push(`${ROUTES.trails}${boundsToQuery(newBounds, zoom)}`);
    },
    [router],
  );
  return (
    <Map
      points={markers}
      center={getBoundsCenter(parsedParams?.bounds || appConfig.mapBounds)}
      zoom={parsedParams?.zoom || appConfig.mapZoom}
      onDragEnd={onMoveEnd}
      onZoomEnd={onMoveEnd}
    />
  );
}
