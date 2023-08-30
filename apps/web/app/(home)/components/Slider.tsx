'use client';

import { useKeenSlider } from 'keen-slider/react';
import { Trail } from 'types';

import { TrailCard } from '@components';

interface Props {
  trails: Trail[];
}

export function Slider({ trails }: Props): JSX.Element {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      breakpoints: {
        '(min-width: 400px)': {
          slides: { perView: 3, spacing: 15 },
        },
        '(min-width: 768px)': {
          slides: { perView: 4, spacing: 15 },
        },
      },
      slides: {
        perView: 1,
        spacing: 15,
      },
    },
    [
      (slider): void => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout(): void {
          clearTimeout(timeout);
        }
        function nextTimeout(): void {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout((): void => {
            slider.next();
          }, 10000);
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ],
  );
  return (
    <div ref={sliderRef} className="keen-slider">
      {trails.map((trail) => (
        <div key={trail.slug} className="keen-slider__slide">
          <TrailCard width={200} height={200} trail={trail} />
        </div>
      ))}
    </div>
  );
}
