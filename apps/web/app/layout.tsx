import 'ui/styles.css';
import 'keen-slider/keen-slider.min.css';
import '../styles/globals.css';

import { Open_Sans, Libre_Baskerville } from 'next/font/google';
import Head from 'next/head';

const openSans = Open_Sans({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin-ext'],
});

const lb = Libre_Baskerville({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin-ext'],
  variable: '--font-lb',
});

export const metadata = {
  title: 'walkme.sk',
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en" className={`${openSans.className} ${lb.variable}`}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
