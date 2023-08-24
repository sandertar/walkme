import Image from 'next/image';

import LogoLightSVG from '../assets/images/logo-light.svg';
import LogoSVG from '../assets/images/logo.svg';

interface Props {
  light?: boolean;
}

export function Logo({ light }: Props): JSX.Element {
  return (
    <Image
      style={{
        maxWidth: '120px',
        height: 'auto',
      }}
      alt="walkme"
      src={light ? LogoLightSVG : LogoSVG}
    />
  );
}
