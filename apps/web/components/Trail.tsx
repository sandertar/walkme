import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { BiMap } from 'react-icons/bi';
import { Button } from 'ui';

interface Props {
  width: string;
  height: string;
  alt: string;
  src: StaticImageData;
  location: string;
  title: string;
  url: string;
}

export function Trail({ width, height, alt, src, url, title, location }: Props): JSX.Element {
  return (
    <div className="relative group rounded-lg overflow-hidden">
      <Image
        style={{
          width,
          height,
          objectFit: 'cover',
        }}
        alt={alt}
        src={src}
      />
      <div className="absolute top-0 left-0  w-full h-full grid grid-cols-1 gap-4 content-end">
        <div className="text-center p-5">
          <div className="mb-5 opacity-0 group-hover:opacity-100 transition-opacity">
            <Link href={url}>
              <Button uiSize={Button.size.SMALL} variant={Button.variant.PRIMARY}>
                See more
              </Button>
            </Link>
          </div>
          <p className="font-accent text-2xl text-center text-white mb-3">{title}</p>
          <p className="text-white">
            <BiMap className="inline ui-text-primary" /> {location}
          </p>
        </div>
      </div>
    </div>
  );
}
