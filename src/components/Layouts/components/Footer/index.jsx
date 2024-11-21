import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer className="relative grid grid-custom-4 lg:h-[416px] h-[660px] w-full justify-evenly border-t-2 bg-[#E8E1E1] text-black">
      <div className="lg:col-span-1 col-span-4 items-center lg:py-10 py-4 lg:mx-0 mx-auto">
        <Link to="/">
          <img src={`./src/assets/images/logo.svg?v=${Date.now()}` }alt="Cake with AI" className="lg:mt-12 mt-4 mx-auto lg:mx-0" />
        </Link>
        <div className="mt-2">
          <h2 className="text-xl text-[#3D3D3D]">Luôn lắng nghe, luôn thấu hiểu</h2>
        </div>
      </div>

      <div className="lg:my-20 lg:col-span-1 col-span-2 lg:mx-0 mx-4">
        <h3 className="text-xl font-semibold text-[#664545]">Về chúng tôi</h3>
        <ul className="mt-4 space-y-4 text-base text-[#3D3D3D]">
          <li>
            <Link to="/about?mode=info1" className="hover:text-[#9E6B6B]">
              Câu chuyện
            </Link>
          </li>
          <li>
            <Link to="/about?mode=info3" className="hover:text-[#9E6B6B]">
              Lời cam kết
            </Link>
          </li>
          <li>
            <Link to="/about?mode=info2" className="hover:text-[#9E6B6B]">
              Dịch vụ
            </Link>
          </li>
        </ul>
      </div>
      <div className="lg:my-20 lg:col-span-1 col-span-2 lg:mx-0 mx-4">
        <h3 className="text-xl font-semibold text-[#664545]">Chính sách</h3>
        <ul className="mt-4 space-y-4 text-base text-[#3D3D3D]">
          <li>
            <Link to="/policy?mode=general" className="hover:text-[#9E6B6B]">
              Chính sách quy định chung
            </Link>
          </li>
          <li>
            <Link to="/policy?mode=security" className="hover:text-[#9E6B6B]">
              Chính sách bảo mật
            </Link>
          </li>
          <li>
            <Link to="/policy?mode=delivery" className="hover:text-[#9E6B6B]">
              Chính sách vận chuyển
            </Link>
          </li>
          <li>
            <Link to="/policy?mode=return" className="hover:text-[#9E6B6B]">
              Chính sách đổi trả
            </Link>
          </li>
          <li>
            <Link to="/policy?mode=payment" className="hover:text-[#9E6B6B]">
              Chính sách giao dịch & thanh toán
            </Link>
          </li>
        </ul>
      </div>
      <div className="lg:my-20 lg:col-span-1 col-span-4 lg:mx-0 mx-4">
        <h3 className="text-xl font-semibold text-[#664545]">Liên hệ</h3>
        <ul className="mt-4 space-y-4 text-base text-[#3D3D3D]">
          <li>
            <img src={`./src/assets/images/Location on.svg?v=${Date.now()}`} alt="iconlocate" className="mb-1 mr-2 inline-flex" />
            371 Đ.Đoàn Kết, P.Bình Thọ, TP.Thủ Đức, HCM
          </li>
          <li>
            <img src={`./src/assets/images/Email.svg?v=${Date.now()}`} alt="iconmail" className="mb-1 mr-2 inline-flex" />
            cakewai@gmail.com
          </li>
          <li>
            <img src={`./src/assets/images/Local phone.svg?v=${Date.now()}`} alt="iconphone" className="mb-1 mr-2 inline-flex" />
            0966.888888
          </li>
          <li className="inline-flex space-x-2">
            <a href="">
              <img src={`./src/assets/images/facebook.svg?v=${Date.now()}`} alt="facebook" />
            </a>
            <a href="">
              <img src={`./src/assets/images/instagram.svg?v=${Date.now()}`} alt="instagram" />
            </a>
            <a href="">
              <img src={`./src/assets/images/tiktok.svg?v=${Date.now()}`} alt="tiktok" />
            </a>
            <a href="">
              <img src={`./src/assets/images/youtube.svg?v=${Date.now()}`} alt="youtube" />
            </a>
          </li>
        </ul>
      </div>

      <div className="lg:col-span-1 col-span-4 lg:absolute inset-x-0 bottom-0 mx-auto mt-1 lg:flex lg:w-[60%] lg:items-end items-center justify-center border-t-2 py-4">
        
          <div className="text-[#B4B9C9]"> Copyright © 2024 CAKEWAI | All Rights Reserved | </div>{' '}

          <div className='text-center'>
            <Link to="/condition?mode=condition" className="ml-1 text-[#353E5C] underline hover:text-[#9E6B6B]">

              Điều khoản và điều kiện
            </Link>
          </div>
       
      </div>
    </footer>
  );
}

export default Footer;
