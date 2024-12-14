import newsfeed1 from '~/assets/images/newsfeed1.png';
import newsfeed2 from '~/assets/images/newsfeed2.png';
import newsfeed3 from '~/assets/images/newsfeed3.png';
import newsfeed4 from '~/assets/images/newsfeed4.png';
import newsfeed5 from '~/assets/images/newsfeed5.png';
import newsfeed6 from '~/assets/images/newsfeed6_1.png';
import { Link } from 'react-router-dom';
function Newsfeed() {
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
    <div className="flex flex-col px-7 md:px-10 lg:px-28 my-24 items-center justify-center text-black text-primary">
      <div className='text-left w-full'>
        <a href="/">Trang chủ </a>
        <span>&gt;&gt;</span>
        <a href="/news"> Tin tức </a>
      </div>
      <h1 className="font-inter mb-10 text-center  text-4xl font-extrabold leading-none text-black">Tin tức</h1>
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center place-items-center items-stretch">
        <div className="img-scale flex flex-col h-full w-full max-w-[354px] overflow-hidden rounded-xl border-2">
          <Link to="/news?mode=news1">
            <img src={newsfeed5} alt="" width='full'/>
          </Link>
          <div className="bg-white flex flex-col justify-between h-full pb-4 pt-2">
            <div className="mx-3">
              <div className="font-inter mt-3 flex items-center text-sm text-[#6D758F]">
                <img src="./src/assets/images/Circle Avatar.svg" alt="" className="mr-1 inline-flex" />
                <span>Baskerville</span>
                <hr className="mx-4 mt-1 w-[24px] border border-gray-400" />
                <img src="./src/assets/images/calendar.svg" alt="" className="mr-1 inline-flex" />
                <p>{handleDate('2025-01-05')}</p>
              </div>
              <Link to='/news?mode=news1'>
                <h2 className="mb-3 mt-3 text-xl font-bold text-[#6D758F] hover:text-slate-900 min-h-[56px]">
                  Cakewai Thông Báo Lịch Nghỉ Tết Nguyên Đán...
                </h2>
              </Link>
              <h3 className="mb-3 mt-3 text-base text-[#6D758F] min-h-[80px]">
                Cakewai: Thông Báo Lịch Nghỉ Tết Nguyên Đán 2025. Kính Chúc Quý Khách Hàng Năm Mới An Khang Và Thịnh
                Vượng. Cảm Ơn Quý Khách Hàng Đã Luôn Ủng Hộ Cakewai Tron...
              </h3>
            </div>
          </div>
        </div>

        <div className="img-scale flex flex-col h-full w-full max-w-[354px] overflow-hidden rounded-xl border-2">
          <Link  to="/news?mode=news2">
            <img src={newsfeed6} alt="" width="auto" />
          </Link>
          <div className="bg-white flex flex-col justify-between h-full pb-4 pt-2">
            <div className="mx-3">
              <div className="font-inter mt-3 flex items-center text-sm text-[#6D758F]">
                <img src="./src/assets/images/Circle Avatar.svg" alt="" className="mr-1 inline-flex" />
                <span>Gia Mẫn</span>
                <hr className="mx-4 mt-1 w-[24px] border border-gray-400" />
                <img src="./src/assets/images/calendar.svg" alt="" className="mr-1 inline-flex" />
                <p>{handleDate('2024-11-02')}</p>
              </div>
              <Link to="/news?mode=news2">
                <h2 className="mb-3 mt-3 text-xl font-bold text-[#6D758F] hover:text-slate-900">Mẫu bánh kem mừng 20/11 ngày Nhà Giáo...</h2>
              </Link>
              <h3 className="mb-3 mt-3 text-base text-[#6D758F] min-h-[80px]">
                "Không thầy đố mày làm nên" <br />
                Ngày 20/11 được xem là ngày lễ lớn trọng đại của con người Việt Nam nhằm tôn vinh vẻ đẹp trong sáng và
                trân quý nhất đối với những người lái đò dìu dắt bao...
              </h3>
            </div>
          </div>
        </div>

        <div className="img-scale flex flex-col h-full w-full max-w-[354px] overflow-hidden rounded-xl border-2">
          <Link to="/news?mode=news3">
            <img src={newsfeed2} alt="" width="auto" />
          </Link>
          <div className="bg-white flex flex-col justify-between h-full pb-4 pt-2">
            <div className="mx-3">
              <div className="font-inter mt-3 flex items-center text-sm text-[#6D758F]">
                <img src="./src/assets/images/Circle Avatar.svg" alt="" className="mr-1 inline-flex" />
                <span>Gia Mẫn</span>
                <hr className="mx-4 mt-1 w-[24px] border border-gray-400" />
                <img src="./src/assets/images/calendar.svg" alt="" className="mr-1 inline-flex" />
                <p>{handleDate('2024-10-01')}</p>
              </div>
              <Link to="/news?mode=news3">
                <h2 className="mb-3 mt-3 text-xl font-bold text-[#6D758F] hover:text-slate-900">
                  Happy women day - 20/10 Dành tặng cho những đóa hoa hồn...
                </h2>
              </Link>
              <h3 className="mb-3 mt-3 text-base text-[#6D758F] min-h-[80px]">
                Happy women day - 20/10. Dành tặng cho những người phụ nữ tôi yêu----- Vẻ đẹp hút hồn của những quý cô
                được so sánh như bông hoa hồng nở rộ...
              </h3>
            </div>
          </div>
        </div>

        <div className="img-scale flex flex-col h-full w-full max-w-[354px] overflow-hidden rounded-xl border-2">
          <Link to="/news?mode=news4">
            <img src={newsfeed4} alt="" width="auto" />
          </Link>
          <div className="bg-white flex flex-col justify-between h-full pb-4 pt-2">
            <div className="mx-3">
              <div className="font-inter mt-3 flex items-center text-sm text-[#6D758F]">
                <img src="./src/assets/images/Circle Avatar.svg" alt="" className="mr-1 inline-flex" />
                <span>Cakewai</span>
                <hr className="mx-4 mt-1 w-[24px] border border-gray-400" />
                <img src="./src/assets/images/calendar.svg" alt="" className="mr-1 inline-flex" />
                <p>{handleDate('2024-07-29')}</p>
              </div>
              <Link to="/news?mode=news4">
                <h2 className="mb-3 mt-3 text-xl font-bold text-[#6D758F] hover:text-slate-900">
                  Tưng bừng đắm chìm vào không gian huyền ảo cùng...
                </h2>
              </Link>
              <h3 className="mb-3 mt-3 text-base text-[#6D758F] min-h-[80px]">
                Bánh Passion Mousse Cheesecake là sự kết hợp tuyệt vời giữa vị chua ngọt của chanh dây và vị béo ngậy
                của...
              </h3>
            </div>
          </div>
        </div>

        <div className="img-scale flex flex-col h-full w-full max-w-[354px] overflow-hidden rounded-xl border-2">
          <Link to="/news?mode=news5">
            <img src={newsfeed3} alt="" width="auto" />
          </Link>
          <div className="bg-white flex flex-col justify-between h-full pb-4 pt-2">
            <div className="mx-3">
              <div className="font-inter mt-3 flex items-center text-sm text-[#6D758F]">
                <img src="./src/assets/images/Circle Avatar.svg" alt="" className="mr-1 inline-flex" />
                <span>Gia Mẫn</span>
                <hr className="mx-4 mt-1 w-[24px] border border-gray-400" />
                <img src="./src/assets/images/calendar.svg" alt="" className="mr-1 inline-flex" />
                <p>{handleDate('2024-04-12')}</p>
              </div>
              <Link to="/news?mode=news5">
                <h2 className="mb-3 mt-3 text-xl font-bold text-[#6D758F] hover:text-slate-900">
                  Bầu trời châu âu được ra mắt hoành tráng với...
                </h2>
              </Link>
              <h3 className="mb-3 mt-3 text-base text-[#6D758F] min-h-[80px]">
                Nhà Cakewai đã vô cùng tâm đắc và trau chuốt khi đã chính thức cho ra mắt bộ sưu tập mới đầy màu sắc và
                mang tính biểu tượng đến...
              </h3>
            </div>
          </div>
        </div>

        <div className="img-scale flex flex-col h-full w-full max-w-[354px] overflow-hidden rounded-xl border-2">
          <Link to="/news?mode=news6">
            <img src={newsfeed1} alt="" width="auto" />
          </Link>
          <div className="bg-white flex flex-col justify-between h-full pb-4 pt-2">
            <div className="mx-3">
              <div className="font-inter mt-3 flex items-center text-sm text-[#6D758F]">
                <img src="./src/assets/images/Circle Avatar.svg" alt="" className="mr-1 inline-flex" />
                <span>Gia Mẫn</span>
                <hr className="mx-4 mt-1 w-[24px] border border-gray-400" />
                <img src="./src/assets/images/calendar.svg" alt="" className="mr-1 inline-flex" />
                <p>{handleDate('2024-01-03')}</p>
              </div>
              <Link to="/news?mode=news6">
                <h2 className="mb-3 mt-3 text-xl font-bold text-[#6D758F] hover:text-slate-900">
                  Cakewai - Đặt bánh teabreak cho sự kiện, hội thảo,...
                </h2>
              </Link>
              <h3 className="mb-3 mt-3 text-base text-[#6D758F] min-h-[80px]">
                Cakewai cung cấp: Bánh sinh nhật, bánh minicake, bánh sự kiện, tiệc buffet bánh ngọt, tiệc bánh ngọt
                khai trương, bánh coockies,... liên hệ hotline để được tư...
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsfeed;
