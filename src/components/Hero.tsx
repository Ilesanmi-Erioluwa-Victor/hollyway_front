"use client"

import Slider from 'react-slick';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };

  return (
    <div className="bg-[url('../assets/images/hero.jpg')] bg-no-repeat bg-cover bg-center">
      <section className='flex justify-between  w-full px-[calc(1vw_+_1rem)] py-[calc(1vh_+_2rem)] gap-8'>
        <article className='w-[70%] relative h-[25rem]'>
          
            <Slider {...settings}>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
            </Slider>
      
        </article>

        <article className=' bg-yellow-500 w-full'>Hello 2</article>
      </section>
    </div>
  );
};

export default Hero;
