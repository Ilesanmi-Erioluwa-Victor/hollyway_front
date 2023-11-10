'use client';

import Slider from 'react-slick';
import cart from '../assets/images/cart.jpg';
import cart2 from '../assets/images/cart2.jpg';
import card3 from '../assets/images/card3.jpg';
import cart4 from '../assets/images/cart4.jpg';
import cart5 from '../assets/images/cart5.jpg';

import Link from 'next/link';
import { IoChevronForwardOutline } from 'react-icons/io5';
import { IoFlashOutline } from 'react-icons/io5';
import { ProductItem } from "../components" 

const Top_Saver = () => {
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

  const product = [
    {
      name: 'Vimto Squash Remix Apple 1.5...',
      id: 1,
      img: [card3, cart],
      price: 6.0,
      rating: 1,
      weight: 454,
      sku: '#VEG20957',
      type: 'Organic',
      Availability: 56,
    },
    {
      name: 'Taylors of Harrogate Yorkshi...',
      id: 2,
      img: [cart, cart],
      price: 10.5,
      rating: 1,
      weight: 200,
      sku: '#VEG20957',
      type: 'Organic',
      Availability: 56,
    },
    {
      name: 'Soft Mochi & Galeto Ice...',
      id: 3,
      img: [cart2, cart],
      price: 10.5,
      rating: 1,
      weight: 200,
      sku: '#VEG20957',
      type: 'Organic',
      Availability: 56,
    },
    {
      name: 'Naked Noodle Egg Noodles Sin...',
      id: 4,
      img: [cart4, cart],
      price: 10.5,
      rating: 1,
      weight: 500,
      sku: '#VEG20957',
      type: 'Organic',
      Availability: 56,
    },
    {
      name: 'Casillero Diablo Cabernet Sa...',
      id: 5,
      img: [card3, cart],
      price: 16.9,
      rating: 1,
      weight: 500,
      sku: '#VEG20957',
      type: 'Organic',
      Availability: 56,
    },
    {
      name: 'Taylors of Harrogate Yorkshi...',
      id: 6,
      img: [cart5, cart],
      price: 10.5,
      rating: 1,
      weight: 200,
      sku: '#VEG20957',
      type: 'Organic',
      Availability: 56,
    },
    {
      name: 'Soft Mochi & Galeto Ice...',
      id: 7,
      img: [cart2, cart],
      price: 10.5,
      rating: 1,
      weight: 200,
      sku: '#VEG20957',
      type: 'Organic',
      Availability: 56,
    },
    {
      name: 'Naked Noodle Egg Noodles Sin...',
      id: 8,
      img: [cart4, cart],
      price: 10.5,
      rating: 1,
      weight: 500,
      sku: '#VEG20957',
      type: 'Organic',
      Availability: 56,
    },
    {
      name: 'Casillero Diablo Cabernet Sa...',
      id: 9,
      img: [card3, cart],
      price: 16.9,
      rating: 1,
      weight: 500,
      sku: '#VEG20957',
      type: 'Organic',
      Availability: 56,
    },
  ];



  return (
    <section className='w-[84.3125rem]  relative mt-[4.375rem] mb-[6.25rem] p-[0.625rem_0.3125rem_0.625rem_0.3125rem]'>
      <div className='max-width-[104.375rem] flex mx-auto relative'>
        <article className='md:w-full flex relative'>
          <div className='p-[0.625rem] flex relative content-start w-full flex-wrap'>
            <div className='w-full'>
              <div className=' justify-start flex items-center'>
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
