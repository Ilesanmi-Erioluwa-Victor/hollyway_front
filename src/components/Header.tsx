'use client';
import Link from "next/link"

import Select from 'react-select';
import { BsCart, BsSearch } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';


const Header = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <nav className='flex flex-col w-full'>
      <main className='flex justify-between items-center w-full px-[calc(1vw_+_1rem)] py-[calc(1vh_+_2rem)]'>
        <div className='mr-[3rem] w-[10%]'>
          Hollyway <span className='block'>global</span>
        </div>

        <form className='relative flex bg-gray-200 w-[50%]'>
          <span className='w-[60%] block'>
            <Select options={options} />
          </span>
          <input
            type='search'
            placeholder="i'm searching for..."
            className='border-0 bg-inherit w-full focus:outline-0 focus:border-none pl-4'
          />
          <button
            className='absolute right-[10px] top-[30%] '
            type='submit'
          >
            <BsSearch />
          </button>
        </form>

        <p className='flex flex-col text-right'>
          <h2 className='text-[1.5rem] font-semibold leading-none'>
            08081495166
          </h2>
          <span className='text-sm'>Support 24/7</span>
        </p>

        <div className='flex gap-5'>
          <p className='text-[1.5rem]'>
            <AiOutlineUser />
          </p>
          <Link href={"/"} className='flex relative gap-5'>
            <span className='absolute bg-orange-500 px-[3px] block rounded-sm top-[-15px] right-[70%]'>
              {0}
            </span>
            <span className='text-[1.5rem] relative'>
              <BsCart />
            </span>
            <div className='relative'>
              <p className='text-[0.9rem] text-gray-400 leading-none'>
                Your Cart
              </p>
              <h2 className='text-sm font-semibold'># 0.00</h2>
            </div>
          </Link>
        </div>
      </main>
      <hr />
    </nav>
  );
};

export default Header;
