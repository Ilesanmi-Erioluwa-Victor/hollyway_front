import Link from 'next/link';

const BestSelling = () => {
  const category = [
    { name: 'All', id: 1 },
    { name: 'Fruits & Vegetables', id: 2 },
    { name: 'Frozen Seafoods', id: 3 },
    { name: 'Raw Meats', id: 4 },
    { name: 'Coffees & Teas', id: 5 },
    { name: 'Pet Foods', id: 6 },
    { name: 'Milks & Diaries', id: 7 },
  ];
  return (
    <div className='w-full'>
      <div>
        <section className='flex bg-[#02010100] justify-start p-[0_0_2.5rem_0] items-center flex-wrap'>
          <h2 className='mr-[3.9375rem] mb-0 text-[1.875rem] leading-[1em]'>
            Best Seller
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

        <section></section>
      </div>
    </div>
  );
};

export default BestSelling;
