import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'walkme.sk trails',
};

export default function TrailsLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div className="border-2 border-secondary-600">
      <div>trails layout</div>
      {children}
    </div>
  );
}
