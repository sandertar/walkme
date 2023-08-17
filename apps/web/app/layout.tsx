import 'ui/styles.css';

export const metadata = {
  title: 'walkme.sk',
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body className="text-red-500">{children}</body>
    </html>
  );
}
