'use client';

import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Nav_pages } from 'src/data/data';

const PagesHeader = () => {
  return (
    <div className='flex gap-8 items-center w-full px-[calc(1vw_+_1rem)] py-[calc(1vh_+_1rem)]'>
      <button className='flex justify-between items-center gap-4 bg-yellow-500 px-[2rem] py-2 rounded-md'>
        <span className='text-[2rem]'>
          <RxHamburgerMenu />
        </span>
        <h2>SHOP BY CATEGORY</h2>
      </button>

      <ul className='flex items-center gap-[2rem]'>
        {Nav_pages.map((page) => {
          return (
            <Link
              key={page.id}
              className={`flex items-center text-[1.1rem]`}
              href={'.'}
            >
              {page.icon && (
                <div className='flex items-center gap-2'>
                  <span>{page.icon}</span>
                  <span>{page.name}</span>
                </div>
              )}
              {!page.icon && <span className='block'>{page.name}</span>}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default PagesHeader;
