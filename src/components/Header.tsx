'use client';

import Select from 'react-select';
import { BsHeart, BsCart, BsSearch } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';

const Header = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <nav>
      <main>
        <div>
          Hollyway <span>global</span>
        </div>

        <div className='relative'>
          <Select options={options} />
          <input
            type='search'
            placeholder="i'm searching for..."
            className='w-full '
          />
          <span>
            <BsSearch />
          </span>
        </div>

        <div>
          <p>
            <span>8 800 332 65-66</span>
            <span>Support 24/7</span>
          </p>
          <p>
            <AiOutlineUser />
          </p>
          <section>
            <span>
              <span>{0}</span>
              <BsCart />
            </span>
            <div>
              <p>Your Cart</p>
              <h2># 0.00</h2>
            </div>
          </section>
        </div>
      </main>
      <hr />
    </nav>
  );
};

export default Header;
