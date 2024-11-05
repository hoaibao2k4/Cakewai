import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer className="relative flex h-[416px] w-full justify-evenly border-t-2 bg-[#E8E1E1] text-black">
      <div className="flex flex-col items-center py-10">
        <Link to="/">
          <img src="./src/assets/images/logo.svg" alt="Cake with AI" className="mt-12" />
        </Link>
        <div className="mt-2">
          <h2 className="text-xl text-[#3D3D3D]">Luôn lắng nghe, luôn thấu hiểu</h2>
        </div>
      </div>
      <div className="my-20">
        <h3 className="text-xl font-semibold text-[#664545]">Về chúng tôi</h3>
        <ul className="mt-4 space-y-4 text-base text-[#3D3D3D]">
          <li>
            <Link to="#" className="hover:text-[#9E6B6B]">
              Câu chuyện
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:text-[#9E6B6B]">
              Lời cam kết
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:text-[#9E6B6B]">
              Dịch vụ
            </Link>
          </li>
        </ul>
      </div>
      <div className="my-20">
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
      <div className="my-20">
        <h3 className="text-xl font-semibold text-[#664545]">Liên hệ</h3>
        <ul className="mt-4 space-y-4 text-base text-[#3D3D3D]">
          <li>
            <img src="./src/assets/images/Location on.svg" alt="iconlocate" className="mb-1 mr-2 inline-flex" />
            371 Đ.Đoàn Kết, P.Bình Thọ, TP.Thủ Đức, HCM
          </li>
          <li>
            <img src="./src/assets/images/Email.svg" alt="iconmail" className="mb-1 mr-2 inline-flex" />
            cakewai@gmail.com
          </li>
          <li>
            <img src="./src/assets/images/Local phone.svg" alt="iconphone" className="mb-1 mr-2 inline-flex" />
            0966.888888
          </li>
          <li className="inline-flex space-x-2">
            <a href="">
              <img src="./src/assets/images/facebook.svg" alt="facebook" />
            </a>
            <a href="">
              <img src="./src/assets/images/instagram.svg" alt="instagram" />
            </a>
            <a href="">
              <img src="./src/assets/images/tiktok.svg" alt="tiktok" />
            </a>
            <a href="">
              <img src="./src/assets/images/youtube.svg" alt="youtube" />
            </a>
          </li>
        </ul>
      </div>

      <div className="absolute inset-x-0 bottom-0 mx-auto mt-1 flex w-[60%] items-end justify-center border-t-2 py-4">
        <div className="inline-flex">
          <div className="text-[#B4B9C9]"> Copyright © 2024 CAKEWAI | All Rights Reserved | </div>{' '}
          <div>
            <Link to="#" className="ml-1 text-[#353E5C] underline hover:text-[#9E6B6B]">
              Điều khoản và điều kiện
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
