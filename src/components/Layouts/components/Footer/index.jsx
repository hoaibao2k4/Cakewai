function Footer() {
  return (
    <footer className="flex h-[540px] w-full justify-evenly bg-primary text-white">
      <div className="my-20">
        <img src="./src/assets/images/baker.jpg" alt="Cake with AI" className="rounded-lg" />
        <div className="mt-5">
          <h2>INFO TEXT</h2>
          <address>Address: UIT</address>
          <span>Tel: 0939666666</span>
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
    </footer>
  );
}

export default Footer;
