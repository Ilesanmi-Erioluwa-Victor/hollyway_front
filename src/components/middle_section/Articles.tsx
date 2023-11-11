'use client';
import BlogImg from '../assets/images/blog.jpg';
import Link from 'next/link';
import { IoChevronForwardOutline } from 'react-icons/io5';

const Articles = () => {
  const blog = [
    {
      id: 1,
      title: 'The Intermediate Guide to Farm',
      para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt laborum possimus, earum rerum libero tempore pariatur quos! Recusandae, nostrum quae?',
      Author: 'Erioluwa',
      tags: ['Farm', 'News'],
      date: Date.now(),
      img: BlogImg,
    },

    {
      id: 2,
      title: 'The Evolution of Farming',
      para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt laborum possimus, earum rerum libero tempore pariatur quos! Recusandae, nostrum quae?',
      Author: 'Erioluwa',
      tags: ['Farm', "how to's"],
      date: Date.now(),
      img: BlogImg,
    },

    {
      id: 3,
      title: 'The Evolution of Farming',
      para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt laborum possimus, earum rerum libero tempore pariatur quos! Recusandae, nostrum quae?',
      Author: 'Erioluwa',
      tags: ['Farm', "how to's"],
      date: Date.now(),
      img: BlogImg,
    },

    {
      id: 4,
      title: 'The Evolution of Farming',
      para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt laborum possimus, earum rerum libero tempore pariatur quos! Recusandae, nostrum quae?',
      Author: 'Erioluwa',
      tags: ['Farm', "how to's"],
      date: Date.now(),
      img: BlogImg,
    },
  ];

  return (
    <article className='mt-[5.9375rem] mb-0 w-full relative'>
      <div className='max-w-[104.375rem] flex relative mx-auto'>
        <div className='w-full flex relative p-[0_1.875rem_0_0] content-start flex-wrap'>
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
            hello
          </div>
        </div>
      </div>
    </article>
  );
};

export default Articles;
