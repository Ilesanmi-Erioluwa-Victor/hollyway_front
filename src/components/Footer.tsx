import { Fragment } from 'react';
import { RiSpaceShipFill } from 'react-icons/ri';
import { GiWaterRecycling } from 'react-icons/gi';
import { BsShieldCheck } from 'react-icons/bs';
import { SlSupport } from "react-icons/sl";
import { IoPricetagsOutline } from 'react-icons/io5';

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
      <div>
        <div className='border-b border-b-[solid] border-b-[#dcdcdc] w-full px-[1.875rem]'>
          <div className='flex items-center flex-wrap justify-between p-[57.5px_0_47.5px_0] mx-[-0.9375rem]'>
            {data.map((data) => (
              <section
                className='flex items-center px-[0.9375rem] py-[0.4688rem]'
                key={data.id}
              >
                <div className='mr-[1.4375rem]'>
                  <span>Hello</span>
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
      </div>

      <section className='relative border border-solid border-[#dcdcdc]'>
        <div className='px-[1.875rem] pt-[5rem] pb-[2.8125rem]'>
          <div className="justify-around flex items-center flex-wrap mx-[-0.9375rem]">

          </div>
        </div>
      </section>
      <section></section>
    </footer>
  );
};

export default Footer;
