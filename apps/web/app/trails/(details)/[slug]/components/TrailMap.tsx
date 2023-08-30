'use client';

import { LngLat, Trail } from 'types';

import { Map } from '@components';

interface Props {
  trail: Trail;
}

export function TrailMap({ trail }: Props): JSX.Element {
  return <Map geoJSON={trail.trail} center={trail.location.coordinates as LngLat} zoom={12} />;
}
