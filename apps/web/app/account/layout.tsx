import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'walkme.sk account',
};

export default function AccountLayout({
  children,
  user,
  trails,
}: {
  children: React.ReactNode;
  user: React.ReactNode;
  trails: React.ReactNode;
}): JSX.Element {
  return (
    <div className="border-2 border-secondary-600">
      <div>account layout</div>
      {children}
      {user}
      {trails}
    </div>
  );
}
