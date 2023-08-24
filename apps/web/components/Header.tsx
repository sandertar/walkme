'use client';

import Link from 'next/link';
import { useCallback, useState } from 'react';
import { BiX, BiMenu, BiDirections, BiInfoCircle, BiLogIn, BiUser } from 'react-icons/bi';

import ROUTES from '../routes';

import { Logo } from './Logo';

interface Props {
  isHomePage?: boolean;
}

const linkClasses = 'block px-4 mx-2 py-5';
const linkClassesMobile = 'px-10 py-5 flex justify-end items-center space-x-3 w-full';

export function Header({ isHomePage }: Props): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((v) => !v);
  }, []);
  const isAuthenticated = false;
  return (
    <header className="flex justify-between items-center w-full ui-container py-5 md:py-0">
      <Link href="/">
        <Logo light={isHomePage} />
      </Link>
      <button className="md:hidden text-2xl text-white" type="button" onClick={toggleMenu}>
        <BiMenu />
      </button>
      <nav className="hidden md:inline-flex whitespace-nowrap text-white">
        <Link className={linkClasses} href={ROUTES.trails}>
          Trails
        </Link>
        <Link className={linkClasses} href={ROUTES.about}>
          About
        </Link>
        {isAuthenticated ? (
          <Link className={linkClasses} href={ROUTES.account}>
            Account
          </Link>
        ) : (
          <Link className={linkClasses} href={ROUTES.signin}>
            Sign in
          </Link>
        )}
      </nav>
      <div
        className={`md:hidden fixed w-full h-screen backdrop-blur-sm bg-white/30 top-0 left-0 grid grid-cols-5 gap-4 transition-opacity ${
          isMenuOpen ? 'opacity-100 left-0' : 'opacity-0 left-full'
        }`}
      >
        <div
          className={`bg-white col-start-3 col-span-4 relative transition-right delay-300 duration-500 ${
            isMenuOpen ? 'right-0' : '-right-full'
          }`}
        >
          <div className="text-right px-5 py-6">
            <button className="text-2xl" type="button" onClick={toggleMenu}>
              <BiX />
            </button>
          </div>
          <div className="flex justify-center py-10 border-b border-slate-200 mb-10">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <nav className="text-xl">
            <Link className={linkClassesMobile} href={ROUTES.trails}>
              <span>Trails</span> <BiDirections className="ui-text-primary" />
            </Link>
            <Link className={linkClassesMobile} href={ROUTES.about}>
              <span>About</span> <BiInfoCircle className="ui-text-primary" />
            </Link>
            {isAuthenticated ? (
              <Link className={linkClassesMobile} href={ROUTES.account}>
                <span>Account</span> <BiUser className="ui-text-primary" />
              </Link>
            ) : (
              <Link className={linkClassesMobile} href={ROUTES.signin}>
                <span>Sign in</span> <BiLogIn className="ui-text-primary" />
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
