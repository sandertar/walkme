'use client';

import { useKeenSlider } from 'keen-slider/react';

import hero from '../../assets/images/hero1.jpeg';
import { Trail } from '../../components';

export default function Slider(): JSX.Element {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      breakpoints: {
        '(min-width: 400px)': {
          slides: { perView: 2, spacing: 15 },
        },
        '(min-width: 768px)': {
          slides: { perView: 3, spacing: 15 },
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
      <div className="keen-slider__slide">
        <Trail src={hero} alt="1" width="100%" height="300px" location="Slovakia" title="Krivan" url="" />
      </div>
      <div className="keen-slider__slide">
        <Trail src={hero} alt="1" width="100%" height="300px" location="Slovakia" title="Krivan" url="" />
      </div>
      <div className="keen-slider__slide">
        <Trail src={hero} alt="1" width="100%" height="300px" location="Slovakia" title="Krivan" url="" />
      </div>
      <div className="keen-slider__slide">
        <Trail src={hero} alt="1" width="100%" height="300px" location="Slovakia" title="Krivan" url="" />
      </div>
      <div className="keen-slider__slide">
        <Trail src={hero} alt="1" width="100%" height="300px" location="Slovakia" title="Krivan" url="" />
      </div>
      <div className="keen-slider__slide">
        <Trail src={hero} alt="1" width="100%" height="300px" location="Slovakia" title="Krivan" url="" />
      </div>
      <div className="keen-slider__slide">
        <Trail src={hero} alt="1" width="100%" height="300px" location="Slovakia" title="Krivan" url="" />
      </div>
    </div>
  );
}
