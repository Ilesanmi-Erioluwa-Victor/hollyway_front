'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';

const ProductItem = ({ cat }: any) => {
  return (
    <div
      key={cat.id}
      className='relative '
    >
      <div className='mb-[1.875rem] relative'>
        <Link href={'/about'}>
          <span className=' block px-[2rem]'>
            <Image
              src={cat.img[0]}
              alt={cat.name}
            />
          </span>
        </Link>
      </div>

      <section className='relative px-[2rem]'>
        <div>
          <h2 className='mt-[0.3125rem] text-[0.875rem] leading-[1.4] m-0 text-[#09f] hover:text-yellow-500'>
            <Link href={'/about'}>{cat.name}</Link>
          </h2>

          <div className='mt-[0.3125rem] mb-[0.4375rem] flex items-center'>
            <div className='mr-[0.125rem] text-[0.75rem] relative inline-block'>
              {' '}
              <AiFillStar className='text-yellow-500' />
            </div>
            <span className='text-[0.75rem] mr-[0.3125rem] text-[#999]'>{`(${cat.rating})`}</span>
          </div>
          <span className='mb-[0.8125rem] text-[0.6875rem] text-[#666] block leading-[1] '>{`${cat.weight}g`}</span>
          <span className='mb-[0.3125rem] font-[700] text-[0.9375rem]'>
            <ins className='text-[#fa532c] mr-[0.25rem] no-underline'>
              <span>{`$${cat.price}`}</span>
            </ins>
          </span>
        </div>
      </section>
    </div>
  );
};

export default ProductItem;
