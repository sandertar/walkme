import type { Metadata } from 'next';

import { Footer, Header } from '../../../components';

export const metadata: Metadata = {
  title: 'walkme.sk Trails',
};

interface Props {
  list: React.ReactNode;
  map: React.ReactNode;
}

export default function TrailsLayout({ list, map }: Props): JSX.Element {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="sticky top-0 z-10">
        <Header />
      </div>
      <div className="flex w-full">
        <div className="grow-0 shrink-0 w-3/5">{list}</div>
        <div className="grow-1 shrink-1 w-2/5">
          <div className="sticky top-16 h-[calc(100vh-theme(space.16))]">{map}</div>
        </div>
      </div>
      <Footer isHomePage />
    </div>
  );
}
