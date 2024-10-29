function Footer() {
  return (
    <footer className="relative flex h-[540px] w-full justify-evenly bg-white text-black border-t-2">
      <div className="my-20">
        <img src="./src/assets/images/logo.svg" alt="Cake with AI" className="mt-12" />
        <div className="mt-2">
          <h2>INFO TEXT</h2>
          <address>Address: UIT</address>
          <span>Tel: 0939666666</span>
          <div className="flex space-x-2 mt-2">
          <img src="./src/assets/images/facebook.png" alt="facebook" />
          <img src="./src/assets/images/tiktok-16.png" alt="tiktok" />
          <img src="./src/assets/images/instagram-16.png" alt="instagram" />
          </div>        
        </div>
      </div>
      <div className="my-32">
        <h3 className="text-lg font-semibold">Thông tin cửa hàng</h3>
        <ul className="mt-4 space-y-2">
          <li>Menu con</li>
          <li>Menu con</li>
          <li>Menu con</li>
          <li>Menu con</li>
        </ul>
      </div>
      <div className="my-32">
        <h3 className="text-lg font-semibold">Quyền lợi khách hàng</h3>
        <ul className="mt-4 space-y-2">
          <li>Menu con</li>
          <li>Menu con</li>
          <li>Menu con</li>
          <li>Menu con</li>
        </ul>
      </div>
      <div className="my-32">
        <h3 className="text-lg font-semibold">Tin tức</h3>
        <ul className="mt-4 space-y-2">
          <li>Menu con</li>
          <li>Menu con</li>
          <li>Menu con</li>
          <li>Menu con</li>
        </ul>
      </div>
      <div className="my-32">
        <h3 className="text-lg font-semibold">Chính sách</h3>
        <ul className="mt-4 space-y-2">
          <li>Menu con</li>
          <li>Menu con</li>
          <li>Menu con</li>
          <li>Menu con</li>
        </ul>
      </div>
     
      <div className="absolute bottom-12  justify-center flex items-end border-t-2 py-4 mx-auto w-[60%]">
      Copyright © 2024 CAKEWAI | All Rights Reserved | <a href="#" className="underline hover:text-green-500">Terms and Conditions</a> | <a href="#" className="underline hover:text-green-500">Privacy Policy</a>
      </div>
    </footer>
  );
}

export default Footer;
