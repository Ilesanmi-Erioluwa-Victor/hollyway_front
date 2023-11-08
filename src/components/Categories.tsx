'use client';

import Slider from 'react-slick';
import second from '../assets/images/homepage-new-cat-3.png';
import Link from 'next/link';
import Image from 'next/image';

const Categories = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
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
    { name: 'Coffees and Teas', id: 1, img: second },
    { name: 'Food Cupboard', id: 2, img: second },
    { name: 'Frozen Seafoods', id: 3, img: second },
    { name: 'Fruits & Vegetables', id: 4, img: second },
    { name: 'Milks and Diaries', id: 5, img: second },
    { name: 'Pet Foods', id: 6, img: second },
    { name: 'Raw Meats', id: 7, img: second },
    { name: 'Wines & Alcohols', id: 8, img: second },
    { name: 'Bread Sweets', id: 9, img: second },
  ];
  return (
    <section className='pt-[4.8125rem] pr-[0.3125rem] pl-[0.3125rem] relative'>
      <div className='max-w-[1670px] relative mx-auto flex'>
        <div className='p-[0.625rem] flex relative w-full flex-wrap content-start'>
          <div className='w-full'>
            <div className='pb-[2.5rem] justify-start flex items-center relative'>
              <h3 className='text-[2rem] font-semibold'>Browse By Category</h3>
            </div>
            <article className='w-full bg-white'>
              <ul className='relative flex flex-col gap-6'>
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
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
