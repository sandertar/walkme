import { getTrails } from '../../../../services/trails';

import TrailsList from './list';

export default async function TrailsListPage(): Promise<JSX.Element> {
  const trails = await getTrails();
  return <TrailsList trails={trails} />;
}
