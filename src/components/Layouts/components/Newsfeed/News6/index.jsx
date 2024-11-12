import { Link } from 'react-router-dom';

function Newsfeed6(){
    const handleDate = (field) => {
        const date = new Date(field);
        const formattedDate = date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        });
        return formattedDate;
      };
    return(
        <div className="mx-4 sm:mx-10 lg:mx-28 my-28 items-center text-primary text-black ">
        <div >
           <a href="/">Trang chủ </a>
           <span>&gt;&gt;</span>
           <a href="/news"> Tin tức </a>
           <span>&gt;&gt;</span>
           <span> Nội dung</span>
       </div>
       <div className="flex justify-center text-lg">
           <div className=" flex flex-col h-auto max-w-[900px]  overflow-hidden border-2 bg-[#E8E1E1] rounded-xl px-5 py-5 space-y-2 my-5  font-inter break-words">
           <h1 className="text-black text-center font-inter text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-none mb-10">Cakewai - Đặt bánh teabreak cho sự kiện, hội thảo, hội nghị... Tại TP.Hồ Chí Minh.</h1> 
           <div className="inline-flex space-x-4 sm:space-x-8">
                    <div className="flex items-center">
                        <img src="./src/assets/images/Circle Avatar.svg" alt="" className="inline-flex mr-1 h-6 sm:h-8 w-6 sm:w-8"/> 
                        <span >Gia Mẫn</span>
                    </div>
                    <div className="flex items-center"> 
                        <img src="./src/assets/images/calendar.svg" alt="" className="inline-flex mr-1 h-6 sm:h-8 w-6 sm:w-8" />
                        <p >{handleDate('2024-04-12')}</p>
                    </div>
                </div>
                <hr className="border-gray-400 bg-gray-400 w-full sm:w-[850px] h-[2px] border mx-auto my-5 border-t-2" />
                <div className="text-black">
                    <div className="font-bold my-5">Cakewai cung cấp: Bánh sinh nhật, bánh minicake, bánh sự kiện, tiệc buffet bánh ngọt, tiệc bánh ngọt khai trương, bánh coockies,... liên hệ hotline để được tư vấn: 0912476521</div>
                    <div>Tiệc teabreak là loại tiệc nhẹ thường được phục vụ trong các buổi họp, hội thảo, hội nghị hoặc sự kiện ngắn. Tiệc này tạo ra không gian thoải mái để khách mời thư giãn, giao lưu trong thời gian nghỉ giải lao. Tiệc teabreak được tổ chức với rất nhiều những loại bánh ngọt, trà, nước trái cây và hoa quả tươi. </div>
                    <img src="./src/assets/images/newsfeed1.png" alt="" width="600px" className="mx-auto block my-5 w-full max-w-[600px]"/>
                    <div className="my-5">Nếu bạn cần tìm những loại bánh ngọt phù hợp cho tiệc teabreak tại công ty hay sự kiện khai trương cửa hàng,... Bạn là đơn vị tổ chức sự kiện. Bạn cần tham khảo những dòng bánh ngọt trong bữa tiệc sắp tới.</div>
                    <div className="my-5">Cakewai xin gửi đến quý khách hàng thực đơn tiệc teabreak vô cùng đa dạng và phong phú. Mong quý khách hàng có thể lựa chọn những loại bánh phù hợp nhất cho mình.</div>
                    <img src="./src/assets/images/mini_1.png" alt="" width="600px" className="mx-auto block my-5 w-full max-w-[600px]"/>
                    <img src="./src/assets/images/mini_2.png" alt="" width="600px" className="mx-auto block my-5 w-full max-w-[600px]"/>
                    <img src="./src/assets/images/mini_3.png" alt="" width="600px" className="mx-auto block my-5 w-full max-w-[600px]"/>
                    <img src="./src/assets/images/mini_4.png" alt="" width="600px" className="mx-auto block my-5 w-full max-w-[600px]"/>
                    <img src="./src/assets/images/mini_5.png" alt="" width="600px" className="mx-auto block my-5 w-full max-w-[600px]"/>
                    <img src="./src/assets/images/mini_6.png" alt="" width="600px" className="mx-auto block my-5 w-full max-w-[600px]"/>
                    <div className="my-5">Nhà Cakewai cung cấp đầy đủ các loại bánh như su kem, coockie, macaron, socola, tiramisu,...</div>
                </div>
                <div>
                        <h1 className="text-black text-left font-inter text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-none mb-10 mt-5 mb-3">CÁC BÀI VIẾT LIÊN QUAN</h1>
                        <ul className="list-disc ml-4 sm:ml-10 ">
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
                                <Link to="/news?mode=news4" >Tưng bừng đắm chìm vào không gian huyền ảo cùng Passion Mousse Cheesecake.</Link>
                            </li>
                            <li className="hover:underline hover:text-slate-900">
                                <Link to="/news?mode=news5"> Bầu trời châu âu được ra mắt hoành tráng với sự kết hợp đa văn hòa từ nhà Cakewai.</Link>
                            </li>
                        </ul>
                </div>
           </div>
       </div>
   </div>
    );
}

export default Newsfeed6