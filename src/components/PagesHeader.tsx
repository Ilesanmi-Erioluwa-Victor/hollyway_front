'use client';
import { RxHamburgerMenu } from 'react-icons/rx';

const PagesHeader = () => {
  return (
    <div className='flex justify-between items-center w-full px-[calc(1vw_+_1rem)] py-[calc(1vh_+_1rem)]'>
      <button className='flex justify-between items-center gap-4 bg-yellow-500 px-[2rem] py-2 rounded-md'>
        <span className='text-[2rem]'>
          <RxHamburgerMenu />
        </span>
        <h2>SHOP BY CATEGORY</h2>
      </button>
    </div>
  );
};

export default PagesHeader;
