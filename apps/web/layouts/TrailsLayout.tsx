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
        <div className="md:flex flex-1 w-full">
          <div className="grow-0 shrink-0 md:w-[400px] border-r py-3 shadow-md bg-white">{sidebar}</div>
          <div className="grow-1 shrink-1 md:w-4/5 bg-gray-50">
            <div className="sticky top-16 h-[300px] md:h-[calc(100vh-theme(space.16))] p-3">{map}</div>
          </div>
        </div>
        <Footer isHomePage />
      </div>
    </>
  );
}
