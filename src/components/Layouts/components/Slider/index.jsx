import cake1 from '~/assets/images/Slidecake/cake1.jpg';
import cake2 from '~/assets/images/Slidecake/cake2.jpg';
import cake3 from '~/assets/images/Slidecake/cake3.jpg';
import cake4 from '~/assets/images/Slidecake/cake4.jpg';
import cake5 from '~/assets/images/Slidecake/cake5.jpg';
import cake6 from '~/assets/images/Slidecake/cake6.jpg';
import cake7 from '~/assets/images/Slidecake/cake7.png';

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { RxDotFilled } from 'react-icons/rx';

function Slider() {
  const sliders = [cake1, cake2, cake3, cake4, cake5, cake6, cake7];

  const [slider, setSlider] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  });

  const prevSlide = () => {
    const isFirstSlide = slider === 0;
    const handle = isFirstSlide ? sliders.length - 1 : slider - 1;
    setSlider(handle);
  };

  const nextSlide = () => {
    const isLastSlide = slider === sliders.length - 1;
    const handle = isLastSlide ? 0 : slider + 1;
    setSlider(handle);
  };

  const goToSlide = (index) => {
    setSlider(index);
  };
  return (
    <div className="slider relative w-full">
      <div
        style={{ backgroundImage: `url(${sliders[slider]})` }}
        className="mt-16 flex w-full items-center bg-cover bg-center pt-[50%] duration-500"
      ></div>
      <h2 className="absolute bottom-[22rem] left-28 text-2xl font-bold text-slate-100">
        Bring you Happiness <br />
        through a piece of cake
      </h2>
      <p className="absolute bottom-[18rem] left-28 text-xl font-medium text-slate-100">
        Reach out to us to place an order or ask about our many menu options. <br />
        We'd love to help you create a memorable dessert experience
      </p>
      <button className="absolute bottom-48 left-28 h-12 w-40 rounded-lg bg-slate-200 text-xl font-medium text-primary">
        Discover
      </button>
      <div className="absolute left-5 top-[50%] -translate-x-0 translate-y-[50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white">
        <BsChevronCompactLeft size={30} onClick={() => prevSlide()} />
      </div>
      <div className="absolute right-5 top-[50%] -translate-x-0 translate-y-[50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white">
        <BsChevronCompactRight size={30} onClick={() => nextSlide()} />
      </div>
      <div className="absolute bottom-0 left-[45%] flex justify-center py-2">
        {sliders.map((slider, index) => (
          <div key={index} className="cursor-pointer text-2xl">
            <RxDotFilled onClick={() => goToSlide(index)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
