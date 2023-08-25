import Image from 'next/image';

import hero from '@assets/images/hero1.jpeg';
import { Search } from '@components';

export default function Hero(): JSX.Element {
  return (
    <div className="relative">
      <Image
        alt="hero"
        src={hero}
        sizes="100vw"
        style={{
          maxHeight: '800px',
          width: '100%',
          height: '100vh',
          objectFit: 'cover',
        }}
      />
      <div className="absolute w-full h-full top-0 left-0">
        <div className="ui-container relative top-1/3">
          <div>
            <div className="text-center text-white mb-10">
              <h1 data-testid="heading" className="text-4xl md:text-5xl font-bold mb-5 font-accent">
                Find amazing trails to explore
              </h1>
              <span>The adventure is much closer than you think</span>
            </div>
            <div className="w-full max-w-2xl mx-auto">
              <Search />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
