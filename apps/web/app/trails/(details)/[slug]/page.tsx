import { round } from '@turf/helpers';
import length from '@turf/length';
import { BsGeoAlt } from 'react-icons/bs';
import { Trail } from 'types';

import { Slider } from './components/Slider';

import { Rating } from '@components';
import { getTrailDetails } from '@services/trails';

interface Props {
  params: {
    slug: string;
    trail: Trail;
  };
}

export default async function TrailPage({ params: { slug } }: Props): Promise<JSX.Element> {
  const trail: Trail = await getTrailDetails({ slug });
  const feature = trail.trail.features.find((f) => f.geometry.type === 'LineString');
  const l = feature
    ? round(
        length(feature, {
          units: 'kilometers',
        }),
        3,
      )
    : null;

  return (
    <div>
      <div className="mb-4">
        <Slider photos={trail.photos} />
      </div>
      <div className="px-4">
        <div className="flex">
          <h1 className="font-accent text-xl flex-1 text-ellipsis overflow-hidden whitespace-nowrap" title="trail.name">
            {trail.name}
          </h1>{' '}
          <Rating rating={trail.rating} />
        </div>
        <p className="mb-4">
          <BsGeoAlt className="inline ui-text-primary" /> {trail.region}
        </p>
        <p>{trail.description}</p>
        <p>Distance: {l || 'N/A'}</p>
      </div>
    </div>
  );
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const trails = await fetch('http://localhost:8080/api/v1/tours').then((res) => res.json());
  return trails.map((trail) => ({ slug: trail.slug }));
}
