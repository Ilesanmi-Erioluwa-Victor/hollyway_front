'use client';

import Slider from 'react-slick';
import soda from '../assets/images/homepage-new-brand-img-3.png';
import sausage from '../assets/images/homepage-new-brand-img-4.png';
import tea from '../assets/images/homepage-new-brand-img-2.png';
import pouch from '../assets/images/homepage-new-brand-img-1.png';

import Link from 'next/link';
import Image from 'next/image';
import { IoChevronForwardOutline } from 'react-icons/io5';

const Features = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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

  const category = [
    { name: 'New Snacks Release', id: 1, img: pouch, cat: 'FOODPOUCH' },
    { name: 'Food Cupboard', id: 2, img: tea, cat: 'ITEA JSC' },
    { name: 'Fresh Meat Sausage', id: 3, img: sausage, cat: 'FARMART' },
    { name: 'Soda Can Box', id: 4, img: soda, cat: 'SODA BRAND' },
    { name: 'Food Cupboard', id: 6, img: tea, cat: 'ITEA JSC' },
    { name: 'New Snacks Release', id: 5, img: pouch, cat: 'FOODPOUCH' },
    { name: 'Soda Can Box', id: 8, img: soda, cat: 'SODA BRAND' },
    { name: 'Fresh Meat Sausage', id: 7, img: sausage, cat: 'FARMART' },
  ];

  return (
    <section className='w-[84.3125rem] px-[0.3125rem] relative'>
      <div className='max-width-[104.375rem] flex mx-auto relative'>
        <article className='md:w-full flex relative'>
          <div className='p-[0.625rem] flex relative content-start w-full flex-wrap'>
            <div className='w-full'>
              <div className=' justify-start flex items-center'>
                <h3 className='text-[1.875rem] leading-[1rem]'>
                  Featured Products
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
                    className='cat'
                  >
                    {category.map((cat) => (
                      <div
                        key={cat.id}
                        className=''
                      >
                        <Link
                          href={'/about'}
                          className=' rounded-[0.625rem] p-[2.875rem_.6875rem_2.375rem_.6875rem] flex items-start flex-col hover:text-yellow-500 transition-all'
                        >
                          <span className=' block'>
                            <Image
                              src={cat.img}
                              alt={cat.name}
                            />
                          </span>
                          <h3 className='mt-[1.5625rem] text-[#999] font-[700] uppercase '>
                            {cat.cat}
                          </h3>
                          <span className='block'>
                            <span className='font-[700] leading-[1.5rem] text-[1.125rem] block text-center'>
                              {cat.name}
                            </span>
                          </span>
                        </Link>
                      </div>
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

export default Features;
