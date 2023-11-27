'use client';

import Slider from 'react-slick';
import BlogImg from '../../assets/images/blog.jpg';
import Link from 'next/link';
import Image from 'next/image';
import { IoChevronForwardOutline } from 'react-icons/io5';

const Articles = () => {
  const blog = [
    {
      id: 1,
      title: 'The Intermediate Guide to Farm',
      para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt laborum possimus...',
      Author: 'Erioluwa',
      tags: ['Farm', 'News'],
      date: new Date(Date.now()).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      img: BlogImg,
    },

    {
      id: 2,
      title: 'The Evolution of Farming',
      para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt laborum possimus...',
      Author: 'Erioluwa',
      tags: ['Farm', "how to's"],
      date: new Date(Date.now()).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      img: BlogImg,
    },

    {
      id: 3,
      title: 'The Evolution of Farming',
      para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt laborum possimus...',
      Author: 'Erioluwa',
      tags: ['Farm', "how to's"],
      date: new Date(Date.now()).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      img: BlogImg,
    },

    {
      id: 4,
      title: 'The Evolution of Farming',
      para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt laborum possimus...',
      Author: 'Erioluwa',
      tags: ['Farm', "how to's"],
      date: new Date(Date.now()).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      img: BlogImg,
    },

    {
      id: 5,
      title: 'The Evolution of Farming',
      para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt laborum possimus...',
      Author: 'Erioluwa',
      tags: ['Farm', "how to's"],
      date: new Date(Date.now()).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      img: BlogImg,
    },

    {
      id: 6,
      title: 'The Evolution of Farming',
      para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt laborum possimus...',
      Author: 'Erioluwa',
      tags: ['Farm', "how to's"],
      date: new Date(Date.now()).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      img: BlogImg,
    },

    {
      id: 7,
      title: 'The Evolution of Farming',
      para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt laborum possimus...',
      Author: 'Erioluwa',
      tags: ['Farm', "how to's"],
      date: new Date(Date.now()).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      img: BlogImg,
    },

    {
      id: 8,
      title: 'The Evolution of Farming',
      para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt laborum possimus...',
      Author: 'Erioluwa',
      tags: ['Farm', "how to's"],
      date: new Date(Date.now()).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      img: BlogImg,
    },
  ];

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
    <article className='mt-[5.9375rem] mb-0 w-full relative'>
      <div className='max-w-[104.375rem] flex relative mx-auto'>
        <div className='w-full flex relative p-[0_0_0_0] content-start flex-wrap'>
          <article className='p-[0_0_2.375rem_0] justify-between items-center flex w-full'>
            <div>
              <h3 className='text-[1.875rem] leading-[1em] m-0'>News</h3>
            </div>
            <Link href='/articles block'>
              All Blogs{' '}
              <span className='ml-[0.625rem] text-[0.75rem] inline-flex'>
                <IoChevronForwardOutline />
              </span>
            </Link>
          </article>

          <div className='p-[1.5625rem_0_2.375rem_0] rounded-[0.625rem] border-solid bg-[#fff] border border-[#eee] w-full'>
            <Slider
              {...settings}
              className='article'
            >
              {blog.map((blog) => (
                <article className='w-[27.0625rem] px-[1.5625rem] border-l-[solid] border-l-[1px] border-l-[#eee]' key={blog.id}>
                  <div className='w-full '>
                    <div className='mb-[1.8125rem] relative'>
                      <Link
                        className='block rounded-[0.625rem]'
                        href='/about'
                      >
                        <Image
                          src={blog?.img}
                          alt={blog.title}
                          className='rounded-[0.625rem]'
                        />
                      </Link>
                    </div>

                    <article>
                      <header className='mb-[1.4375rem]'>
                        <div className='mt-[0.625rem] text-[0.8125rem] flex flex-wrap'>
                          <h3 className='pl-[0.1875rem] text-[#333]'>
                            By
                            <Link
                              href='/author'
                              className='text-[#09f] font-[700] pl-[0.1875rem] hover:underline'
                            >
                              {blog.Author}
                            </Link>
                          </h3>

                          <div className='pl-[0.1875rem]'>
                            {' '}
                            In{' '}
                            <Link href='/cat'>
                              {blog.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className='hover:text-yellow-500 transition-all'
                                >{` ${tag} |`}</span>
                              ))}
                            </Link>
                          </div>

                          <div className='pl-[0.1875rem]'>
                            on <span>{blog.date}</span>
                          </div>
                        </div>
                        <h3 className='mb-[1.1875rem] font-[700] text-[1.3125rem] leading-[1.25714] transition-all hover:text-yellow-500'>
                          <Link
                            href={'.'}
                            className='text-[1.5rem] leading-[2.25rem]'
                          >
                            {blog.title}
                          </Link>
                        </h3>
                      </header>

                      <section>
                        <div>
                          <p>{blog.para}</p>
                        </div>
                      </section>
                    </article>
                  </div>
                </article>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Articles;
