import { BiDirections, BiMap, BiUser } from 'react-icons/bi';

import Badge from './badge';

export default function Badges(): JSX.Element {
  return (
    <div className="flex justify-between align-top grid md:grid-cols-3">
      <Badge
        icon={<BiDirections />}
        title="More than 50 trails"
        content="Discover the wonderful nature of Slovakia by hiking along the best trails."
      />
      <Badge
        icon={<BiMap />}
        title="Map and directions"
        content="Find all the trails on the map and how to get to any walk, by car or public transportations."
      />
      <Badge icon={<BiUser />} title="Made by local" content="Trust us, we love hiking in Slovakia!" />
    </div>
  );
}
