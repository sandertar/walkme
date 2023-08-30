import { Trail } from 'types';

import { TrailMap } from '../components/TrailMap';

import { getTrailDetails } from '@services/trails';

interface Props {
  params: {
    slug: string;
    trail: Trail;
  };
}

export default async function TrailMapPage({ params: { slug } }: Props): Promise<JSX.Element> {
  const trail: Trail = await getTrailDetails({ slug });
  return <TrailMap trail={trail} />;
}
