import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'walkme.sk auth',
};

export default function AuthLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div className="border-2 border-secondary-600">
      <div>Auth layout</div>
      {children}
    </div>
  );
}
