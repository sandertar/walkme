import dynamic from 'next/dynamic';

export { Footer } from './Footer';
export { Header } from './Header';
export { Logo } from './Logo';
export { Search } from './Search';
export { TrailCard } from './TrailCard';
export { Section } from './Section';
export { Rating } from './Rating';

// disableSSR for map component
export const Map = dynamic(() => import('./Map').then((mod) => mod.Map), { ssr: false });
