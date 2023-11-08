'use client';

import Slider from 'react-slick';
import second from '../assets/images/homepage-new-cat-3.png';
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
    { name: 'New Snacks Release', id: 1, img: second, cat: 'FOODPOUCH' },
    { name: 'Food Cupboard', id: 2, img: second, cat: 'ITEA JSC' },
    { name: 'Fresh Meat Sausage', id: 3, img: second, cat: 'FARMART' },
    { name: 'Soda Can Box', id: 4, img: second, cat: 'SODA BRAND' },
    { name: 'Milks and Diaries', id: 5, img: second },
    { name: 'Pet Foods', id: 6, img: second },
    { name: 'Raw Meats', id: 7, img: second },
    { name: 'Wines & Alcohols', id: 8, img: second },
    { name: 'Bread Sweets', id: 9, img: second },
  ];

  return (
    <section className='w-[84.3125rem] px-[0.3125rem] relative'>
      <div className='max-width-[104.375rem] flex mx-auto relative'>
        <article className='md:w-full flex relative'>
          <div className='p-[0.625rem] flex relative content-start w-full flex-wrap'>
            <div className='w-full'>
              <div className='pb-[2.8125rem] justify-start flex items-center'>
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
                      <li
                        key={cat.id}
                        className=' w-[139px] px-[10px]'
                      >
                        <Link
                          href={'/about'}
                          className='bg-[#f7f7f6] rounded-[0.625rem] p-[2.875rem_1.6875rem_2.375rem_1.6875rem] flex items-center flex-col hove'
                        >
                          <span className='mb-[1.25rem] block'>
                            <Image
                              src={cat.img}
                              alt={cat.name}
                            />
                          </span>

                          <span className='block'>
                            <span className='font-[700] leading-[1.5rem] text-[1.125rem] block text-center'>
                              {cat.name}
                            </span>
                          </span>
                        </Link>
                      </li>
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
