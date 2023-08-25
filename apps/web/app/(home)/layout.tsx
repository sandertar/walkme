import type { Metadata } from 'next';

import { Footer, Header } from '@components';

export const metadata: Metadata = {
  title: 'walkme.sk',
};

export default function HomeLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div className="">
      <div className="absolute t-0 l-0 w-full z-10">
        <Header isHomePage />
      </div>
      {children}
      <Footer isHomePage />
    </div>
  );
}
