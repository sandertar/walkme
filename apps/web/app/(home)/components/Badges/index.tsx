import { BsGeoAlt, BsSignpostSplit, BsPerson } from 'react-icons/bs';

import { Badge } from './Badge';

export function Badges(): JSX.Element {
  return (
    <div className="flex justify-between align-top grid md:grid-cols-3">
      <Badge
        icon={<BsSignpostSplit />}
        title="More than 50 trails"
        content="Discover the wonderful nature of Slovakia by hiking along the best trails."
      />
      <Badge
        icon={<BsGeoAlt />}
        title="Map and directions"
        content="Find all the trails on the map and how to get to any walk, by car or public transportations."
      />
      <Badge icon={<BsPerson />} title="Made by local" content="Trust us, we love hiking in Slovakia!" />
    </div>
  );
}
