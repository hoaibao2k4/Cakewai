function Footer() {
  return (
    <footer className="relative flex h-[416px] w-full justify-evenly bg-[#E8E1E1] text-black border-t-2 ">
      <div className="flex-col items-center py-10 flex ">
        <img src="./src/assets/images/logo.svg" alt="Cake with AI" className="mt-12" />
        <div className="mt-2">
          <h2 className="text-xl text-[#3D3D3D]">Luôn lắng nghe, luôn thấu hiểu</h2>
      
        </div>
      </div>
      <div className="my-20 ">
        <h3 className="text-xl font-semibold text-[#664545]">Về chúng tôi</h3>
        <ul className="mt-4 space-y-4 text-[#3D3D3D] text-base">
          <li><a href="#" className="hover:text-[#9E6B6B] ">Câu chuyện</a></li>
          <li><a href="#" className="hover:text-[#9E6B6B]">Lời cam kết</a></li>
          <li><a href="#" className="hover:text-[#9E6B6B]">Dịch vụ</a></li>
        </ul>
      </div>
      <div className="my-20">
        <h3 className="text-xl font-semibold text-[#664545]">Chính sách</h3>
        <ul className="mt-4 space-y-4 text-[#3D3D3D] text-base">
          <li><a href="#" className="hover:text-[#9E6B6B]">Chính sách quy định chung</a></li>
          <li><a href="#" className="hover:text-[#9E6B6B]">Chính sách bảo mật</a></li>
          <li><a href="#" className="hover:text-[#9E6B6B]">Chính sách vận chuyển</a></li>
          <li><a href="#" className="hover:text-[#9E6B6B]">Chính sách đổi trả</a></li>
          <li><a href="#" className="hover:text-[#9E6B6B]">Chính sách giao dịch & thanh toán</a></li>
        </ul>
      </div>
      <div className="my-20">
        <h3 className="text-xl font-semibold text-[#664545]">Contact us</h3>
        <ul className="mt-4 space-y-4 text-[#3D3D3D] text-base">
          <li><img src="./src/assets/images/Location on.svg" alt="iconlocate" className="inline-flex mr-2 mb-1"/> Khu Phố 6, Phường Linh Trung, Thủ Đức, TP.HCM</li>
          <li><img src="./src/assets/images/Email.svg" alt="iconmail" className="inline-flex mr-2 mb-1"/>cakewai@gmail.com</li>  
          <li><img src="./src/assets/images/Local phone.svg" alt="iconphone" className="inline-flex mr-2 mb-1"/>0912476521</li>
          <li className="inline-flex space-x-2">
            <a href=""><img src="./src/assets/images/facebook.svg" alt="facebook" /></a>
            <a href=""><img src="./src/assets/images/instagram.svg" alt="instagram" /></a>
            <a href=""><img src="./src/assets/images/tiktok.svg" alt="tiktok" /></a>
            <a href=""><img src="./src/assets/images/youtube.svg" alt="youtube" /></a>
          </li>
        </ul>
      </div>
     
      <div className="absolute inset-x-0 bottom-0 justify-center flex items-end border-t-2 py-4 mx-auto w-[60%] mt-1">
        <div className="inline-flex">
       <div className="text-[#B4B9C9]"> Copyright © 2024 CAKEWAI | All Rights Reserved | </div> <div><a href="#" className="underline hover:text-[#9E6B6B] ml-1 text-[#353E5C]">Điều khoản và điều kiện</a></div> 
       </div>      
      </div>
    </footer>
  );
}

export default Footer;
