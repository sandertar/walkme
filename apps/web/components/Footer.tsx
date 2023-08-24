import Link from 'next/link';

import ROUTES from '../routes';

import { Logo } from './Logo';

interface Props {
  isHomePage?: boolean;
}

const linkClasses = 'mx-4 p-2';
const homePageClasses = 'text-white bg-slate-700';

export function Footer({ isHomePage }: Props): JSX.Element {
  return (
    <footer className={`py-5 ${isHomePage ? homePageClasses : ''}`}>
      <div className="ui-container">
        <div className="flex justify-between w-full">
          <div className="flex justify-between w-full py-2">
            <Link href="/">
              <Logo light />
            </Link>
          </div>
          <div className="block whitespace-nowrap py-2 ">
            <Link className={linkClasses} href={ROUTES.trails}>
              Trails
            </Link>
            <Link className={linkClasses} href={ROUTES.about}>
              About
            </Link>
          </div>
        </div>
        <p className="text-center text-xs mt-4">Copyright © 2022-2023 WALKME.SK. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
