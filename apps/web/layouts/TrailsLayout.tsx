import { Header, Footer } from '@components';

interface Props {
  sidebar: React.ReactNode;
  map: React.ReactNode;
}

export function TrailsLayout({ sidebar, map }: Props): JSX.Element {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="sticky top-0 z-10">
          <Header />
        </div>
        <div className="flex flex-1 w-full">
          <div className="grow-0 shrink-0 w-1/5 md:w-[400px] border-r pt-3 shadow-md bg-white">{sidebar}</div>
          <div className="grow-1 shrink-1 w-4/5 bg-gray-50">
            <div className="sticky top-16 h-[calc(100vh-theme(space.16))] p-3">{map}</div>
          </div>
        </div>
        <Footer isHomePage />
      </div>
    </>
  );
}
