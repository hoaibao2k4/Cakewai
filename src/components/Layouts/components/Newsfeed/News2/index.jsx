import { Link } from 'react-router-dom';

function Newsfeed2() {
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
            Mẫu bánh kem mừng 20/11 ngày Nhà Giáo Việt Nam.
          </h1>
          <div className="inline-flex space-x-4 sm:space-x-8">
            <div className="flex items-center">
              <img src="./src/assets/images/Circle Avatar.svg" alt="" className="mr-1 inline-flex h-6 sm:h-8 w-6 sm:w-8" />
              <span>Gia Mẫn</span>
            </div>
            <div className="flex items-center">
              <img src="./src/assets/images/calendar.svg" alt="" className="mr-1 inline-flex h-6 sm:h-8 w-6 sm:w-8" />
              <p>{handleDate('2024-11-20')}</p>
            </div>
          </div>
          <hr className="mx-auto my-5 h-[2px] w-full sm:w-[850px] border border-t-2 border-gray-400 bg-gray-400" />
          <div className="text-black">
            <h2 className="my-5">"Không thầy đố mày làm nên"</h2>
            <h2 className="my-5">
              Ngày 20/11 được xem là ngày lễ lớn trọng đại của con người Việt Nam nhằm tôn vinh vẻ đẹp trong sáng và
              trân quý nhất đối với những người lái đò đã dìu dắt bao thế hệ tiến bước đến cánh cổng rực rỡ của tương
              lai.
            </h2>
            <h2>
              Ngày 20/11 là ngày Nhà Giáo Việt Nam, cũng được gọi là ngày Hiến chương Nhà Giáo Việt Nam. Đây là một dịp
              lễ quan trọng và ý nghĩa được tổ chức hàng năm để bao thế hệ học sinh, sinh viên có cơ hội để bày tỏ lòng
              biết ơn và tri ân đến với các quý thầy cô giáo - những người đã hết mình tận tụy vì một sự nghiệp trồng
              người của đất nước.
            </h2>
            <h2>
              Trong dịp lễ này, đại đa số các trường học, học sinh và sinh viên sẽ tổ chức những hoạt động ý nghĩa, kỉ
              niệm để thể hiện tấm lòng tôn kính của mình dành cho các bậc thầy cô. Các hoạt động có thể kể đến như viết
              thư tay, làm báo tường, thiết kế, trang trí bảng hiệu, tặng hoa, quà để thể hiện sự biết ơn đấy một cách
              sâu sắc nhất. Ngoài ra, các trường còn tổ chức các buổi tọa đàm, gặp mặt và kết nối thầy - trò để cùng gắn
              kết chia sẻ nhiều kỉ niệm đã trải qua trong đoạn thời gian vô giá ấy.
            </h2>
            <h1 className="font-inter my-5 text-lg sm:text-xl lg:text-2xl font-bold leading-none text-black">
              Mẫu bánh kem 20/11 mừng ngày Nhà giáo Việt Nam{' '}
            </h1>
            <h2 className="mb-3 mt-5">
              Sau đây là những mẫu bánh kem được chọn lọc đẹp nhất có tại Cakewai. Mời các bạn cùng tham khảo!{' '}
            </h2>
            <img src="./src/assets/images/20-11_1.png" alt="" width="600px" className="mx-auto my-5 block w-full max-w-[600px]" />
            <img src="./src/assets/images/20-11_2.png" alt="" width="600px" className="mx-auto my-5 block w-full max-w-[600px]" />
            <img src="./src/assets/images/20-11_3.png" alt="" width="600px" className="mx-auto my-5 block w-full max-w-[600px]" />
            <h2 className="italic">"More than cake"</h2>
            <h2>
              Chỉ một câu nói nhỏ cũng có thể miêu tả chiếc bánh kem mang chủ đề 20/11 năm nay đến từ nhà Cakewai.
            </h2>
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
                <Link to="/news?mode=news3">Happy women day - 20/10 Dành tặng cho những đóa hoa hồng rực rỡ - rạng ngời - quý phái.</Link>
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

export default Newsfeed2;
