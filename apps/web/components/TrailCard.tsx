import Image from 'next/image';
import Link from 'next/link';
import { BsGeoAlt, BsStarFill } from 'react-icons/bs';
import { Trail } from 'types';

import ROUTES from '../routes';

interface Props {
  width: number;
  height: number;
  trail: Trail;
}

export function TrailCard({ width, height, trail }: Props): JSX.Element {
  const url = `${ROUTES.trails}/${trail.slug}`;
  return (
    <Link href={url}>
      <div className="relative group rounded-lg overflow-hidden">
        <div className="aspect-square">
          <Image
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            width={width}
            height={height}
            alt={trail.name}
            src={trail.photos[0]}
          />
        </div>
        <div className="absolute top-0 left-0  w-full h-full grid grid-cols-1 gap-4 content-end bg-gradient-to-t from-black/50">
          <div className="p-5">
            <p className="font-accent text-xl text-white mb-3">{trail.name}</p>
            <div className="text-white flex justify-between">
              <p>
                <BsGeoAlt className="inline ui-text-primary" /> {trail.region}
              </p>
              <div className="inline-flex items-center space-x-2">
                <BsStarFill /> <span>{trail.rating}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
