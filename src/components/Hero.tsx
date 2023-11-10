'use client';

import Slider from 'react-slick';
import first from '../assets/images/homepage-new-banner-1.jpg';
import second from '../assets/images/homepage-new-cat-3.png';
import third from '../assets/images/homepage-new-slider-1.jpg';
import Link from 'next/link';

const products = [
  {
    image: third,
    title: 'Active Summer With Juice Milk 300ml',
    summary:
      'New arrivals with nature  fruits, juice milks, essential for summer',
    price: '$19.99',
  },
  {
    image: third,
    title: 'Active Summer With Juice Milk 300ml',
    summary:
      'New arrivals with nature  fruits, juice milks, essential for summer',
    price: '$24.99',
  },
  {
    image: third,
    title: 'Active Summer With Juice Milk 300ml',
    summary:
      'New arrivals with nature  fruits, juice milks, essential for summer',
    price: '$29.99',
  },
  {
    image: third,
    title: 'Active Summer With Juice Milk 300ml',
    summary:
      'New arrivals with nature  fruits, juice milks, essential for summer',
    price: '$14.99',
  },
];

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-[url('../assets/images/hero.jpg')] bg-no-repeat bg-cover bg-center">
      <section className='flex justify-between  w-full px-[calc(1vw_+_1rem)] py-[calc(1vh_+_2rem)] gap-8'>
        <article className='w-[70%] relative h-[30rem]'>
          <Slider {...settings} className='get' >
            {products.map((product, index) => (
              <div
                key={index}
                style={{ width: '100%', height: '30rem' }}
                className='relative'
              >
                <div
                  style={{
                    backgroundImage: `url(${product.image.src})`,
                    width: '100%',
                    height: '30rem',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    maxWidth: '100%',
                  }}
                  className='rounded-md'
                />

                <article className='absolute top-[20%] text-black pl-[2rem]'>
                  <h2 className='text-[2rem] font-semibold'>{product.title}</h2>
                  <p className='text-[1rem] mt-4'>{product.summary}</p>
                  <p className='font-semibold text-[1.2rem] mt-4'>
                    Price: {product.price}
                  </p>
                  <Link
                    href={`product/${product.title}`}
                    className='bg-white inline-block px-[2rem] py-3 text-sm rounded-sm mt-[6rem] hover:bg-yellow-500 transition-all hover:text-white'
                  >
                    Shop Now
                  </Link>
                </article>
              </div>
            ))}
          </Slider>
        </article>

        <article className=' bg-[#fac250] w-full relative rounded-md'>
          <div
            style={{
              backgroundImage: `url(${first.src})`,
              width: '100%',
              height: '30rem',
              backgroundPosition: 'bottom right',
              backgroundRepeat: 'no-repeat',
              maxWidth: '100%',
            }}
          />
          <Link
            href={'shop/go'}
            className='absolute left-0 right-0 bottom-0 top-0'
          ></Link>
          <div className='absolute top-[20%] pl-[2rem]'>
            <div>
              <h3 className='text-[2.5rem] font-semibold mb-[1rem]'>
                20% SALE OFF
              </h3>
              <p>
                Lorem ipsum dolor sit amet <br />
                consectetur adipisicing elit. <br />
                Voluptatem, veritatis.
              </p>
              <Link
                href={`product/`}
                className='bg-white inline-block px-[2rem] py-3 text-sm rounded-sm mt-[6rem] hover:bg-yellow-500 transition-all hover:text-white'
              >
                Shop Now
              </Link>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Hero;
