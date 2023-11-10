'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';

const ProductItem = ({ cat }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleIconClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleAddToCart = () => {
    // Add logic to add product to cart
    console.log(`Added ${quantity} ${cat.name}(s) to the cart.`);
  };

  return (
    <div
      key={cat.id}
      className='relative'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={'/about'}
        className='p-[1.25rem_1.5625rem_1.875rem] flex items-start flex-col hover:text-yellow-500 transition-all text-blue-400'
      >
        <span className=' block p-5'>
          <Image
            src={cat.img[0]}
            alt={cat.name}
          />
        </span>
        <span className='block px-5'>
          <span className='leading-[1.5rem] text-[0.9rem] block text-center'>
            {cat.name}
          </span>
        </span>
        <span className='block px-5'>
          <span className='leading-[1.5rem] text-[0.9rem] flex items-center gap-2'>
            <AiFillStar className='text-yellow-500' /> {`(${cat.rating})`}
          </span>
        </span>
        <span className='block px-5'>
          <span className='leading-[1.5rem] text-[0.9rem] block gap-2'>
            {`${cat.weight}g`}
          </span>
        </span>
        <span className='block px-5 my-4'>
          <span className='leading-[1.5rem] text-[1.1rem] block'>
            {`$${cat.price}`}
          </span>
        </span>
      </Link>

      {isHovered && (
        <div className='hover-overlay'>
          <span
            className='info-icon'
            onClick={handleIconClick}
          >
            ℹ️
          </span>
          <div className='quantity-controls'>
            <button onClick={() => setQuantity(quantity - 1)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      )}

      {isModalOpen && (
        <div className='modal'>
          <div className='modal-content'>
            <h2>{cat.name}</h2>
            <p>{cat.description}</p>
            {/* Add more product details as needed */}
            <button onClick={handleModalClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductItem;
