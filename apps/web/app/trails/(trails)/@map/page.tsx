import { TrailsMap } from '../components/TrailsMap';

import { getTrails } from '@services/trails';

export default async function TrailsMapPage(): Promise<JSX.Element> {
  const trails = await getTrails();
  return <TrailsMap points={trails} />;
}
