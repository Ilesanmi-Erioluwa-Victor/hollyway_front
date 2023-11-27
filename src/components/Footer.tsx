import { Fragment } from 'react';
import { RiSpaceShipFill } from 'react-icons/ri';
import { GiWaterRecycling } from 'react-icons/gi';
import { BsShieldCheck, BsTelephoneOutbound } from 'react-icons/bs';
import { SlSupport } from 'react-icons/sl';
import {
  IoPricetagsOutline,
  IoHomeOutline,
  IoMailOutline,
} from 'react-icons/io5';
import { footer_data } from 'src/data/footer.data';
import Link from 'next/link';
import Image from "next/image"
import Payment from "../assets/images/payment.png"

const data = [
  {
    id: 1,
    name: 'Free Shipping',
    sum: 'For all orders over $200',
    img: <RiSpaceShipFill />,
  },

  {
    id: 2,
    name: '1 & 1 Returns',
    sum: 'Cancellation after 1 day',
    img: <GiWaterRecycling />,
  },

  {
    id: 3,
    name: '100% Secure Payment',
    sum: 'Guarantee secure payments',
    img: <BsShieldCheck />,
  },

  {
    id: 4,
    name: '24/7 Dedicated Support',
    sum: 'Anywhere & anytime',
    img: <SlSupport />,
  },

  {
    id: 5,
    name: 'Daily Offers',
    sum: 'Discount up to 70% OFF',
    img: <IoPricetagsOutline />,
  },
];

const Footer = () => {
  return (
    <footer className='relative border border-solid border-[#dcdcdc]'>
      <section>
        <div className='border-b border-b-[solid] border-b-[#dcdcdc] w-full px-[1.875rem]'>
          <div className='flex items-center flex-wrap justify-between p-[57.5px_0_47.5px_0] mx-[-0.9375rem]'>
            {data.map((data) => (
              <section
                className='flex items-center px-[0.9375rem] py-[0.4688rem]'
                key={data.id}
              >
                <div className='mr-[1.4375rem]'>
                  <span className='text-[2.125rem] text-orange-400'>
                    {data.img}
                  </span>
                </div>
                <div>
                  <div className='text-[1.125rem] font-[700] mb-[0.1875rem] tracking-[-0.0625rem]'>
                    {data.name}
                  </div>
                  <div className='tracking-[-0.0313rem] text-[0.875rem] leading-[1.71429] wrap-break'>
                    {data.sum}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className='px-[1.875rem] pt-[5rem] pb-[2.8125rem] relative border border-solid border-[#dcdcdc] max-[1680px]:w-full max-[1680px]:px-[1.875rem]'>
          <div className='justify-around flex items-center flex-wrap mx-[-0.9375rem]'>
            <article className='flex justify-around flex-wrap mx-[-0.9375rem]'>
              <section className='flex-[0_0_100%] max-w-[100%] md:flex-[0_0_41.66667%] md:max-w-[41.66667%] min-[992px]:flex-[0_0_25%] min-[992px]:max-w-[25%] px-[0.9375rem]'>
                <div className='mb-[1.875rem] text-[1rem]'>
                  <h2 className='text-[1.125rem] leading-[1.5rem] pb-[2.0625rem]'>
                    Hollywayglobal – Your Online agro-store
                  </h2>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    finibus viverra iaculis. Etiam vulputate et justo eget
                    scelerisque.
                  </div>
                </div>

                <div className='mb-[1.875rem]'>
                  <div className='leading-[1.375rem] text-[#555]'>
                    <ul className='p-0 m-0'>
                      <li className='mb-0 py-[0.3125rem]'>
                        <span className='mr-[0.625rem] inline-flex'>
                          <BsTelephoneOutbound />
                        </span>
                        <span>Hotline 24/7:</span>
                        <h3 className='text-[1.5625rem] m-[0.5rem_0_1.4375rem_1.875rem] font-[700] leading-[1.25714]'>
                          (+965) 7492-4277{' '}
                        </h3>
                      </li>

                      <li className='mb-0 py-[0.3125rem]'>
                        <span className='mr-[0.625rem] inline-flex'>
                          <IoHomeOutline />
                        </span>
                        <span>959 Homestead Street Eastlake, NYC</span>
                      </li>

                      <li className='mb-0 py-[0.3125rem] flex items-center'>
                        <span className='mr-[0.625rem] inline-flex'>
                          <IoMailOutline />
                        </span>
                        <span>support@farmart.com</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className='flex-[0_0_100%] max-w-[100%] md:flex-[0_0_58.33333%] md:max-w-[58.33333%] min-[992px]:flex-[0_0_50%] min-[992px]:max-w-[50%] px-[0.9375rem]'>
                <div className='flex justify-around mx-[-0.9375rem]'>
                  {footer_data.map((footer_data) => (
                    <Fragment key={footer_data.id}>
                      <div className='px-[0.9375rem]'>
                        <div className='mb-[30px] text-[1rem]'>
                          <h2 className='text-[1.125rem] leading-[1.5rem] pb-[2.0625rem] '>
                            {footer_data.name}
                          </h2>
                          <div>
                            {footer_data.links.map((data) => (
                              <Fragment key={data.id}>
                                <ul>
                                  <li className='mb-0 py-[0.3125rem]'>
                                    <Link
                                      href={data.link}
                                      className='text-[#666] transition-all hover:text-[#fab528] block'
                                    >
                                      {data.name}
                                    </Link>
                                  </li>
                                </ul>
                              </Fragment>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Fragment>
                  ))}
                </div>
              </section>

              <section className='flex-[0_0_100%] max-w-[100%] md:flex-[0_0_41.66667%] md:max-w-[41.66667%] min-[992px]:flex-[0_0_25%] min-[992px]:max-w-[25%] px-[0.9375rem]'>
                <div className='mb-[30px] text-[1rem]'>
                  <h2 className='text-[1.125rem] leading-[1.5rem] pb-[2.0625rem]'>
                    Hollywayglobal Newsletter
                  </h2>

                  <div className='leading-[1.375rem]'>
                    <p className='mb-[1.5em] mt-0'>
                      Register now to get updates on promotions and coupns.
                      Don’t worry! We not spam
                    </p>
                  </div>
                </div>
              </section>
            </article>
          </div>
        </div>
      </section>

      <section className='py-[2.1875rem]'>
        <div className='max-[1680px]:w-full max-[1680px]:px-[1.875rem] flex justify-between items-center'>
          <div className='flex-1 text-left justify-start flex item-center'>
            <div className='mr-[2.5rem] text-[#555] flex gap-1'>
              &copy;{new Date().getFullYear()}
              <b>Hollywayglobal</b>
              All rights reserved
            </div>
          </div>

          <div className="flex item-center">
            <div>
              <ul className='mx-[-0.1563rem] p-0'>
                <li className='inline-block px-[0.1563rem]'>
                  <Link href="#" className='block'>
                  <Image src={Payment} alt="payment"/>
                  </Link>
                </li>
    </ul>
            </div>
          </div>

          <div className="flex flex-1 text-right justify-end items-center"/>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
