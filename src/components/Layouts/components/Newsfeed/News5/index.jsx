import { Link } from 'react-router-dom';

function Newsfeed5() {
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
            Bầu trời châu âu được ra mắt hoành tráng với sự kết hợp đa văn hòa từ nhà Cakewai.
          </h1>
          <div className="inline-flex space-x-4 sm:space-x-8">
            <div className="flex items-center">
              <img src="./src/assets/images/Circle Avatar.svg" alt="" className="mr-1 inline-flex h-6 sm:h-8 w-6 sm:w-8" />
              <span>Gia Mẫn</span>
            </div>
            <div className="flex items-center">
              <img src="./src/assets/images/calendar.svg" alt="" className="mr-1 inline-flex h-6 sm:h-8 w-6 sm:w-8" />
              <p>{handleDate('2024-04-12')}</p>
            </div>
          </div>
          <hr className="mx-auto my-5 h-[2px] w-full sm:w-[850px] border border-t-2 border-gray-400 bg-gray-400" />
          <div className="text-black">
            <div className="my-5">
              Nhà Cakewai đã vô cùng tâm đắc và trau chuốt khi đã chính thức cho ra mắt bộ sưu tập mới đầy màu sắc và
              mang tính biểu tượng đến từ Châu Âu và La Tinh.{' '}
            </div>
            <div className="my-2">
              {' '}
              Bộ sưu tập được ra mắt cực độc đáo và đa dạng nhưng không thiếu chất lượng về mặt dinh dưỡng lẫn tinh thần
              xuất phát từ các nền văn hóa khác nhau có thể kể đến như Anh, Mỹ, Pháp,...{' '}
            </div>
            <div className="my-2">
              Traditional cakes được xem như tính biểu tượng và được người dân bản địa tiêu thụ như các món ăn chính
              hằng ngày. Đồng thời trong các dịp lễ lớn hoặc các buổi tiệc thì những chiếc bánh sẽ được bày biện để phục
              vụ thực khách thay lời yêu thương.
            </div>
            <div>Cakewai xin giới thiệu một số sản phẩm gửi đến quý khách hàng tham khảo!!!</div>
            <img src="./src/assets/images/eur_1.png" alt="" width="600px" className="mx-auto my-5 block w-full max-w-[600px]" />
            <img src="./src/assets/images/eur_2.png" alt="" width="600px" className="mx-auto my-5 block w-full max-w-[600px]" />
            <img src="./src/assets/images/eur_3.png" alt="" width="600px" className="mx-auto my-5 block w-full max-w-[600px]" />
            <div className="my-5">
              Với sự cập nhật mới này, Cakewai hứa hẹn sẽ mang đến một luồng gió mới về mặt trải nghiệm đến quý khách
              hàng.
            </div>
            <img src="./src/assets/images/eur_4.png" alt="" width="600px" className="mx-auto my-5 block w-full max-w-[600px]" />
            <div className="my-5">
              Bằng cả sự nhiệt huyết với nghề, nhà Cakewai rất mong nhận được sự ủng hộ và hưởng ứng vô cùng quý giá của
              Cakewai-ers.
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
                <Link to="/news?mode=news3">Happy women day - 20/10 Dành tặng cho những đóa hoa hồng rực rỡ - rạng ngời - quý phái.</Link>
              </li>
              <li className="hover:underline hover:text-slate-900">
                <Link to="/news?mode=news4">Tưng bừng đắm chìm vào không gian huyền ảo cùng Passion Mousse Cheesecake.</Link>
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

export default Newsfeed5;
