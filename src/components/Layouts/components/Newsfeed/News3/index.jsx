import { Link } from 'react-router-dom';

function Newsfeed3() {
  const handleDate = (field) => {
    const date = new Date(field);
    const formattedDate = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
    return formattedDate;
  };
  return (
    <div className="mx-4 sm:mx-10 lg:mx-28 my-28 items-center  text-black text-primary">
      <div>
        <a href="/">Trang chủ </a>
        <span>&gt;&gt;</span>
        <a href="/news"> Tin tức </a>
        <span>&gt;&gt;</span>
        <span> Nội dung</span>
      </div>
      <div className="flex justify-center text-lg">
        <div className="font-inter my-5 flex h-auto max-w-[900px] flex-col space-y-2 overflow-hidden break-words rounded-xl border-2 bg-[#E8E1E1] px-5 py-5">
          <h1 className="font-inter mb-10 text-center text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-none text-black">
            Happy women day - 20/10 Dành tặng cho những đóa hoa hồng rực rỡ - rạng ngời - quý phái.
          </h1>
          <div className="inline-flex space-x-4 sm:space-x-8">
            <div className="flex items-center">
              <img src="./src/assets/images/Circle Avatar.svg" alt="" className="mr-1 inline-flex h-6 sm:h-8 w-6 sm:w-8" />
              <span>Gia Mẫn</span>
            </div>
            <div className="flex items-center">
              <img src="./src/assets/images/calendar.svg" alt="" className="mr-1 inline-flex h-6 sm:h-8 w-6 sm:w-8" />
              <p>{handleDate('2024-10-20')}</p>
            </div>
          </div>
          <hr className="mx-auto my-5 h-[2px] w-full sm:w-[850px] border border-t-2 border-gray-400 bg-gray-400" />
          <div className="text-black">
            <div className="my-5">Happy Women's Day - 20.10</div>
            <div className="my-5">Dành tặng những người phụ nữ tôi yêu !!!</div>
            <div>------------</div>
            <div className="my-2">
              Vẻ đẹp của người phụ nữ được so sánh với những đóa hoa hồng lung linh và ngọt ngào như những chiếc bánh
              ngọt.
            </div>
            <div className="my-2">
              Cakewai hiểu rõ được điều đó, đội ngũ thiết kế và sản xuất luôn sáng tạo không ngừng để mang đến những
              chiếc bánh kem độc đáo sánh tựa như vẻ đẹp ngọc ngà son sắc của các cô gái.
            </div>
            <img src="./src/assets/images/20-10_1.png" alt="" width="600px" className="mx-auto my-5 block w-full max-w-[600px]" />
            <div>------------</div>
            <div className="my-5">Đắn đo suy nghĩ nên tặng gì cho bà, cho mẹ hay những cô thiên thần nhỏ.</div>
            <div className="my-5">Tạo bất ngờ như thế nào là hợp lí với chị em trong công ty.</div>
            <div className="my-5">Món quà nào vừa đẹp vừa tinh tế cho dịp lễ đặc biệt này.</div>
            <img src="./src/assets/images/20-10_2.png" alt="" width="600px" className="mx-auto my-5 block w-full max-w-[600px]" />
            <div className="my-5">
              Nắm rõ các mưu cầu đó - Cakewai cho ra mắt bộ sưu tập bánh kem 20/10 đầy tinh tế với mong muốn giúp đỡ bạn
              bày tỏ những lời yêu thương qua những chiếc bánh ngọt dịu kì.
            </div>
            <div>------------</div>
            <div className="my-5 italic">Nhân ngày Phụ Nữ Việt Nam </div>
            <div>
              Nhà Cakewai xin gửi lời chúc yêu thương và sức khỏe đến với chị, em phụ nữ thành công trong công việc,
              hạnh phúc trong tình yêu và trọn vẹn trong cuộc sống.
            </div>
          </div>
          <div>
            <h1 className="font-inter mb-10 mb-3 mt-5 text-left text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-none text-black">
              CÁC BÀI VIẾT LIÊN QUAN
            </h1>
            <ul className="ml-4 sm:ml-10 list-disc">
              <li className="hover:underline hover:text-slate-900">
                <Link to="/news?mode=news1">Cakewai Thông Báo Lịch Nghỉ Tết Nguyên Đán 2024.</Link>
              </li>
              <li className="hover:underline hover:text-slate-900">
                <Link to="/news?mode=news2">Mẫu bánh kem mừng 20/11 ngày Nhà Giáo Việt Nam.</Link>
              </li>
              <li className="hover:underline hover:text-slate-900">
                <Link to="/news?mode=news4">Tưng bừng đắm chìm vào không gian huyền ảo cùng Passion Mousse Cheesecake.</Link>
              </li>
              <li className="hover:underline hover:text-slate-900">
                <Link to="/news?mode=news5">Bầu trời châu âu được ra mắt hoành tráng với sự kết hợp đa văn hòa từ nhà Cakewai.</Link>
              </li>
              <li className="hover:underline hover:text-slate-900">
                <Link to="/news?mode=news6"> Cakewai - Đặt bánh teabreak cho sự kiện, hội thảo, hội nghị... Tại TP.Hồ Chí Minh.</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsfeed3;
