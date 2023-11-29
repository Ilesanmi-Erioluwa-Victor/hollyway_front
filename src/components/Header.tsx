'use client';
import { useState } from 'react';
import Link from 'next/link';

import Select from 'react-select';
import { BsCart, BsSearch } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { PagesHeader } from '.';
import { User } from 'src/components/atoms';
const Header = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const [cartItems, setCartItems] = useState<string[] | null>([]);
  const [showEmptyCartMessage, setShowEmptyCartMessage] = useState<
    boolean | null
  >(false);

  const handleMouseOver = () => {
    if (cartItems?.length === 0) {
      setShowEmptyCartMessage(true);
    }
  };

  const handleMouseOut = () => {
    setShowEmptyCartMessage(false);
  };

  const isLoggedIn = false;

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

        <div className='hidden flex-col text-right min-[1150px]:flex'>
          <h2 className='text-[1.5rem] font-semibold leading-none'>
            08081495166
          </h2>
          <span className='text-sm text-gray-400'>Support 24/7</span>
        </div>

        <div className='flex gap-5 relative'>
          {isLoggedIn ? <AiOutlineUser /> : <User />}

          <Link
            href={'/'}
            className='flex relative gap-5'
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <span className='absolute bg-orange-500 px-[3px] block rounded-sm top-[-15px] right-[70%] text-[0.9rem]'>
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
              {showEmptyCartMessage && cartItems?.length === 0 && (
                <>
                  <span className='w-0 h-0 border-solid  border top-border  block absolute bottom-[-1.8rem] right-[3rem] transition-all'></span>
                  <p className='text-sm absolute w-[20rem] top-[4rem] p-5 text-center text-gray-400 right-0 block border bg-white transition-all'>
                    No products in the cart.
                  </p>
                </>
              )}
            </div>
          </Link>
        </div>
      </main>
      <hr />
      <PagesHeader />
    </nav>
  );
};

export default Header;
