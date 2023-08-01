import React from 'react';
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/solid';
import Image from 'next/image';
import AppNavItem from './AppNavItem';
import Link from 'next/link';

function AppNav(): JSX.Element {
  return (
    <nav className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
      <div role="menu" className='flex flex-grow justify-evenly max-w-2xl'>
        <Link href='/' passHref legacyBehavior>
          <AppNavItem title='HOME' Icon={HomeIcon} />
        </Link>
        <button
          role="menuitem"
          onClick={() => {}}
          className="focus:outline-none"
        >
          <AppNavItem title='TRENDING' Icon={LightningBoltIcon} />
        </button>
        <button
          role="menuitem"
          onClick={() => {}}
          className="focus:outline-none"
        >
          <AppNavItem title='VERIFIED' Icon={BadgeCheckIcon} />
        </button>
        <button
          role="menuitem"
          onClick={() => {}}
          className="focus:outline-none"
        >
          <AppNavItem title='COLLECTIONS' Icon={CollectionIcon} />
        </button>
        <button
          role="menuitem"
          onClick={() => {}}
          className="focus:outline-none"
        >
          <AppNavItem title='SEARCH' Icon={SearchIcon} />
        </button>
        <button
          role="menuitem"
          onClick={() => {}}
          className="focus:outline-none"
        >
          <AppNavItem title='ACCOUNT' Icon={UserIcon} />
        </button>
      </div>
      <Link href='/' passHref legacyBehavior>
        <a aria-label="Hulu Home" className="focus:outline-none">
          <Image
            className='object-contain'
            src='https://links.papareact.com/ua6'
            width={200}
            height={100}
            alt='hulu logo'
          />
        </a>
      </Link>
    </nav>
  );
}

export default AppNav;

  