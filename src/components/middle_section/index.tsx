import Articles from './Articles';
import BestSelling from './BestSelling';
import Essential from './Essential';
import Landing from './Landing';
import Middle from './Middle';

const MiddleSection = () => {
  return (
    <div
      className={`w-[84.3125rem] p-[5.625rem_0.3125rem_9.375rem_0.3125rem] transition-all bg-[#f3f3f3] bg-[url(../assets/images/hero.jpg)] bg-cover bg-no-repeat bg-[bottom_center]`}
    >
      <div className='max-w-[104.375rem] flex mx-auto relative'>
        <div className='w-full'>
          <section className='p-[0.625rem] flex w-full flex-wrap items-start relative flex-col'>
            <BestSelling />
            <Landing />
            <Middle />
            <Essential />
            <Articles />
          </section>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
