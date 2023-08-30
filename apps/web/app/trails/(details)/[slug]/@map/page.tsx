import { TrailMap } from '../components/TrailMap';

import { getTrailDetails } from '@services/trails';

interface Props {
  params: {
    slug: string;
  };
}

export default async function TrailMapPage({ params: { slug } }: Props): Promise<JSX.Element> {
  const trail = await getTrailDetails({ slug });
  return <TrailMap trail={trail} />;
}
