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
    <div className='bg-red-700 w-full'>
      <div>
        <section className='flex bg-[#02010100] justify-start p-[0_0_2.5rem_0] items-center flex-wrap'>
          <h2 className='mr-[3.9375rem] mb-0 text-[1.875rem] leading-[1em]'>
            Best Seller
          </h2>
          <div className='max-w-full'>
            <ul className='flex items-center py-[0.25rem] flex-nowrap'></ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BestSelling;
