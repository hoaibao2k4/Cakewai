import { useEffect, useState, useRef } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';
import cake4 from '~/assets/images/Slidecake/cake4.jpg';
import cake5 from '~/assets/images/Slidecake/cake5.jpg';
import cake6 from '~/assets/images/Slidecake/cake6.jpg';
import cake7 from '~/assets/images/Slidecake/cake7.png';

function Slider() {
  const sliders = [
    {
      image: cake4,
      heading: 'Mang đến niềm hạnh phúc qua từng chiếc bánh kem',
      text: 'Liên hệ với chúng tôi để đặt bánh hoặc tìm hiểu thêm về thực đơn phong phú của chúng tôi. Chúng tôi sẵn sàng giúp bạn tạo nên những kỷ niệm ngọt ngào đáng nhớ.',
      buttonText: 'Khám Phá Thực Đơn',
      path: '/category?mode=cookie'
    },
    {
      image: cake5,
      heading: 'Trải nghiệm sự kỳ diệu từ những chiếc bánh tươi mới',
      text: 'Những chiếc bánh của chúng tôi được làm từ những nguyên liệu tốt nhất để mang đến cho bạn một trải nghiệm khó quên.',
      buttonText: 'Đặt Hàng Ngay',
      path: '/category?mode=bread'
    },
    {
      image: cake6,
      heading: 'Thưởng thức sự ngọt ngào qua từng miếng bánh',
      text: 'Mỗi miếng bánh được làm bằng tình yêu và sự tận tâm để biến khoảnh khắc của bạn trở nên đặc biệt.',
      buttonText: 'Xem Thực Đơn',
      path: '/category?mode=birthday'
    },
    {
      image: cake7,
      heading: 'Hãy để những chiếc bánh mì làm ngọt ngào từng phút giây',
      text: 'Hoàn hảo cho sinh nhật, kỷ niệm hoặc chỉ đơn giản là một ngày bình thường – bánh mì của chúng tôi sẽ làm cho mọi khoảnh khắc trở nên ngọt ngào hơn.',
      buttonText: 'Mua Ngay',
      path: '/category?mode=tradition'
    },
  ];

  const [slider, setSlider] = useState(0);
  const sliderRef = useRef(null);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const navigate = useNavigate()
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [slider]);

  const prevSlide = () => {
    setSlider(slider === 0 ? sliders.length - 1 : slider - 1);
  };

  const nextSlide = () => {
    setSlider(slider === sliders.length - 1 ? 0 : slider + 1);
  };

  const goToSlide = (index) => {
    setSlider(index);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX || e.touches[0].pageX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentX = e.pageX || e.touches[0].pageX;
    const diff = currentX - startX;

    if (diff > 50) {
      prevSlide();
      setIsDragging(false);
    } else if (diff < -50) {
      nextSlide();
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleNavigate = (path) => {
    navigate(path)
  }

  return (
    <div
      className="slider relative mt-16 w-full"
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseUp}
    >
      {/* Image */}
      <div
        style={{ backgroundImage: `url(${sliders[slider].image})` }}
        className="relative flex w-full items-center bg-cover bg-center pt-[40%] duration-500"
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Text Content */}
      <div className="absolute bottom-[25%] left-[10%] space-y-4 text-slate-100">
        <h2 className="text-sm font-bold sm:text-base md:text-xl lg:text-3xl">{sliders[slider].heading}</h2>
        <p className="line-clamp-2 w-8/12 text-xs font-medium md:text-base lg:text-lg">{sliders[slider].text}</p>
        <button onClick={() => handleNavigate(sliders[slider].path)} className="rounded-md bg-slate-200 px-4 py-2 text-xs font-medium text-primary md:text-base lg:text-lg hover:text-fourth hover:bg-primary">
          {sliders[slider].buttonText}
        </button>
      </div>

      {/* Left Arrow */}
      <div
        className="absolute left-4 top-[50%] hidden -translate-y-[50%] cursor-pointer rounded-full bg-black/20 p-2 text-white md:block"
        onClick={prevSlide}
      >
        <BsChevronCompactLeft size={30} />
      </div>

      {/* Right Arrow */}
      <div
        className="absolute right-4 top-[50%] hidden -translate-y-[50%] cursor-pointer rounded-full bg-black/20 p-2 text-white md:block"
        onClick={nextSlide}
      >
        <BsChevronCompactRight size={30} />
      </div>

      {/* Dot Navigation */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
        {sliders.map((_, index) => (
          <div
            key={index}
            className={`cursor-pointer text-2xl ${index === slider ? 'text-yellow-400' : 'text-slate-50'}`}
            onClick={() => goToSlide(index)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
