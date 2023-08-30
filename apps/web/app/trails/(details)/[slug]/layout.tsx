import type { Metadata } from 'next';

import { TrailsLayout } from '@layouts';

export const metadata: Metadata = {
  title: 'walkme.sk Trails',
};

interface Props {
  children: React.ReactNode;
  map: React.ReactNode;
}

export default function Layout({ children, map }: Props): JSX.Element {
  return <TrailsLayout sidebar={children} map={map} />;
}
