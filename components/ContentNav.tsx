import React from 'react';
import requests from '../utils/requests';
import { useRouter } from 'next/router';

interface ContentNavItem {
  title: string;
  url: string;
}

function ContentNav() {
  const router = useRouter();

  return (
    <nav className='relative'>
      <div
        className='flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide'
        role='navigation' // Add the role attribute to indicate it's a navigation element
        aria-label='Content Navigation' // Provide a label for screen readers to describe the navigation purpose
      >
        {Object.entries(requests).map(([key, { title, url }]: [string, ContentNavItem]) => (
          <button
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className='last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-blue-500 focus:outline-none' // Added focus styles
            role='menuitem' // Use role="menuitem" for buttons representing menu items
          >
            {title}
          </button>
        ))}
      </div>
      <div className='absolute top-0 right-0 bg-gradient-to-l from-[#8a319e] h-10 w-1/12' />
    </nav>
  );
}

export default ContentNav;
