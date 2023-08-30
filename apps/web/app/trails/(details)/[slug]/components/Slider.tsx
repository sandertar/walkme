'use client';

import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import React from 'react';

interface Props {
  photos: string[];
}

export function Slider({ photos }: Props): JSX.Element {
  const [isCreated, setIsCreated] = React.useState(false);
  const [sliderRef] = useKeenSlider({
    created: () => {
      setIsCreated(true);
    },
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
  });
  return (
    <div ref={sliderRef} className={`keen-slider ${isCreated ? 'visible' : 'invisible'}`}>
      {photos.map((url) => (
        <div key={url} className="keen-slider__slide">
          <Image
            style={{
              width: '100%',
              height: '300px',
              objectFit: 'cover',
            }}
            width={400}
            height={400}
            alt={url}
            src={url}
          />
        </div>
      ))}
    </div>
  );
}
