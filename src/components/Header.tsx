'use client';

import Select from 'react-select';
import { BsHeart, BsCart } from 'react-icons/bs';
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
        </div>
        <div>Menu Icon</div>
      </main>
      <hr />
    </nav>
  );
};

export default Header;
