'use client';

import Slider from 'react-slick';
import product from 'src/hooks/useProducts';

import Link from 'next/link';
import { IoChevronForwardOutline } from 'react-icons/io5';
import { IoFlashOutline } from 'react-icons/io5';
import { ProductItem } from '../components';

const Top_Saver = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className='w-full relative mt-[4.375rem] mb-[6.25rem] p-[0.625rem_0.3125rem_0.625rem_0.3125rem]'>
      <div className='max-w-[104.375rem] flex mx-auto relative'>
        <article className='md:w-full flex relative'>
          <div className='p-[0.625rem] flex relative content-start w-full flex-wrap'>
            <div className='w-full'>
              <div className=' justify-start flex items-center p-[0_0_2.8125rem_0]'>
                <span className='text-[1.875rem] leading-[2rem]'>
                  <IoFlashOutline />
                </span>
                <h3 className='text-[1.875rem] leading-[1rem]'>
                  Top Products Today
                </h3>
                <Link
                  href={'/features'}
                  className='text-[#666] mt-[0.3125rem] ml-[2.1875rem] flex items-center'
                >
                  All Products
                  <span className='ml-[0.625rem] text-[0.875rem]'>
                    <IoChevronForwardOutline />
                  </span>
                </Link>
              </div>

              <section>
                <div className='relative flex flex-col gap-6'>
                  <Slider
                    {...settings}
                    className='saver'
                  >
                    {product.map((cat) => (
                      <ProductItem
                        key={cat.id}
                        cat={cat}
                      />
                    ))}
                  </Slider>
                </div>
              </section>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Top_Saver;
