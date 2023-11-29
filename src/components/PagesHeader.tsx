'use client';

import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Nav_pages } from 'src/data/data';
import { animated } from '@react-spring/web';

const PagesHeader = () => {
  return (
    <div className='flex gap-8 items-center w-full px-[calc(1vw_+_1rem)] py-[calc(1vh_+_2rem)]'>
      <button className='flex justify-between items-center gap-4 bg-yellow-500 px-[2rem] py-2 rounded-md'>
        <span className='text-[2rem]'>
          <RxHamburgerMenu />
        </span>
        <h2>SHOP BY CATEGORY</h2>
      </button>

      <ul className='hidden items-center gap-[2rem] min-[1040px]:flex'>
        {Nav_pages.map((page) => {
          return (
            <Link
              key={page.id}
              className={`flex items-center text-[1rem] hover:text-yellow-400 transition-all`}
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
