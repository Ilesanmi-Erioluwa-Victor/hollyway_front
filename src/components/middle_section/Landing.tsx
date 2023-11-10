'use client';

import Link from 'next/link';
import { ProductItem } from '../../components';
import product from 'src/hooks/useProducts';
import Slider from 'react-slick';

const Landing = () => {
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
  return (
    <div className='w-full'>
      <div className='m-[6.25rem_0_0_0]'>
        <section className='flex bg-[#02010100] justify-start p-[0_0_2.5rem_0] items-center flex-wrap'>
          <h2 className='mr-[3.9375rem] mb-0 text-[1.875rem] leading-[1em]'>
            Landing
          </h2>
          <div className='max-w-full'>
            <ul className='flex items-center py-[0.25rem] flex-nowrap'>
              {category.map((cat) => (
                <li
                  key={cat.id}
                  className={`${
                    cat?.name === 'All' && 'pl-0'
                  } px-[1rem] relative shrink-0 hover:text-yellow-500 transition-all`}
                >
                  <Link href={'/all'}>{cat.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className='flex bg-[#fff]'>
          <div className='p-0 w-full border pb-8'>
            <Slider
              {...settings}
              className='landing'
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

export default Landing;
