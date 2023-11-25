'use client';

import Link from 'next/link';
import { ProductItem } from '../../components';
import product from 'src/hooks/useProducts';
import Slider from 'react-slick';

const BestSelling = () => {
  const category = [
    { name: 'All', id: 1 },
    { name: 'Fruits & Vegetables', id: 2 },
    { name: 'Frozen Seafoods', id: 3 },
    { name: 'Raw Meats', id: 4 },
    { name: 'Coffees & Teas', id: 5 },
    { name: 'Pet Foods', id: 6 },
    { name: 'Milks & Diaries', id: 7 },
  ];

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
  return (
    <div className='w-full'>
      <div>
        <section className='flex bg-[#02010100] justify-start p-[0_0_2.5rem_0] items-center flex-wrap'>
          <h2 className='mr-[3.9375rem] mb-0 text-[1rem] lg:text-[1.475rem] leading-[1em] lg:mr-[.8rem]'>
            Best Seller
          </h2>
          <div className='max-w-full hidden lg:block'>
            <ul className='flex items-center py-[0.25rem] flex-nowrap'>
              {category.map((cat) => (
                <li
                  key={cat.id}
                  className={`${
                    cat?.name === 'All' && 'pl-0'
                  } px-[1rem] lg:px-[.5rem] relative shrink-0 hover:text-yellow-500 transition-all`}
                >
                  <Link
                    href={'/all'}
                    className='lg:text-[.9rem]'
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className='flex bg-[#fff]'>
          <div className='p-0 w-full border pb-8'>
            <Slider
              {...settings}
              className='best'
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
  );
};

export default BestSelling;
