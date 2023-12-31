import { TrailsList } from './components/TrailsList';

import { getTrails } from '@services/trails';

export default async function TrailsListPage(): Promise<JSX.Element> {
  const trails = await getTrails();
  return <TrailsList trails={trails} />;
}
