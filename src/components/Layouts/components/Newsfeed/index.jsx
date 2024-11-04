import newsfeed1 from "~/assets/images/newsfeed1.png";
import newsfeed2 from "~/assets/images/newsfeed2.png";
import newsfeed3 from "~/assets/images/newsfeed3.png";
import newsfeed4 from "~/assets/images/newsfeed4.png";
import newsfeed5 from "~/assets/images/newsfeed5.png";
import newsfeed6 from "~/assets/images/newsfeed6_1.png";

function Newsfeed(){
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
        <div className="mx-28 my-28 items-center text-primary text-black">
            <div>
                <a href="/">Trang chủ </a>
                <span>&gt;&gt;</span>
                <a href="/news"> Tin tức </a>
            </div>
            <h1 className="text-black text-center font-inter text-4xl font-extrabold leading-none mb-10">Tin tức</h1>
            <div className="relative flex w-full justify-evenly flex-wrap gap-8 ">
                <div className="w-[354px] border-2 rounded-xl overflow-hidden img-scale">
                    <a href="News1/index.jsx" >
                        <img src={newsfeed5} alt=""  width="354px" />
                    </a>
                    <div className="bg-white pb-4 pt-2 ">
                        <div className="mx-3 ">
                            <div className="text-sm font-inter text-[#6D758F] mt-3 items-center flex">
                                <img src="./src/assets/images/Circle Avatar.svg" alt="" className="inline-flex mr-1"/> 
                                <span>Cakewai</span> 
                                <hr className="border-gray-400 w-[24px] border mx-4 mt-1" />
                                <img src="./src/assets/images/calendar.svg" alt="" className="inline-flex mr-1" />
                                <p>{handleDate('2025-01-05')}</p>
                            </div>
                            <h2 className="text-xl text-[#6D758F] mt-3 mb-3 font-bold">
                                Cakewai Thông Báo Lịch Nghỉ Tết Nguyên Đán...
                            </h2>
                            <h3 className="text-base text-[#6D758F] mb-3 mt-3">
                                Cakewai: Thông Báo Lịch Nghỉ Tết Nguyên Đán 2025. Kính Chúc Quý Khách Hàng Năm Mới An Khang Và Thịnh Vượng. Cảm Ơn Quý Khách Hàng Đã Luôn Ủng Hộ Cakewai Tron...
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="w-[354px] border-2 rounded-xl overflow-hidden img-scale">
                    <a href="#" >
                        <img src={newsfeed6} alt=""  width="354px" />
                    </a>
                    <div className="bg-white pb-4 pt-2 ">
                        <div className="mx-3 ">
                        <div className="text-sm font-inter text-[#6D758F] mt-3 items-center flex">
                                <img src="./src/assets/images/Circle Avatar.svg" alt="" className="inline-flex mr-1"/> 
                                <span>Gia Mẫn</span> 
                                <hr className="border-gray-400 w-[24px] border mx-4 mt-1" />
                                <img src="./src/assets/images/calendar.svg" alt="" className="inline-flex mr-1" />
                                <p>{handleDate('2024-11-02')}</p>
                            </div>
                            <h2 className="text-xl text-[#6D758F] mt-3 mb-3 font-bold">
                                Mẫu bánh kem mừng 20/11 ngày Nhà Giáo...
                            </h2>
                            <h3 className="text-base text-[#6D758F] mb-3 mt-3">
                                "Không thầy đố mày làm nên" <br />
                                Ngày 20/11 được xem là ngày lễ lớn trọng đại của con người Việt Nam nhằm tôn vinh vẻ đẹp trong sáng và trân quý nhất đối với những người lái đò dìu dắt bao...
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="w-[354px] border-2 rounded-xl overflow-hidden img-scale">
                    <a href="#" >
                        <img src={newsfeed2} alt=""  width="354px" />
                    </a>
                    <div className="bg-white pb-4 pt-2 ">
                        <div className="mx-3 ">
                        <div className="text-sm font-inter text-[#6D758F] mt-3 items-center flex">
                                <img src="./src/assets/images/Circle Avatar.svg" alt="" className="inline-flex mr-1"/> 
                                <span>Gia Mẫn</span> 
                                <hr className="border-gray-400 w-[24px] border mx-4 mt-1" />
                                <img src="./src/assets/images/calendar.svg" alt="" className="inline-flex mr-1" />
                                <p>{handleDate('2024-10-01')}</p>
                            </div>
                            <h2 className="text-xl text-[#6D758F] mt-3 mb-3 font-bold">
                                Happy women day - 20/10 Dành tặng cho những đóa hoa hồn...
                            </h2>
                            <h3 className="text-base text-[#6D758F] mb-3 mt-3">
                               Happy women day - 20/10. Dành tặng cho những người phụ nữ tôi yêu----- Vẻ đẹp hút hồn của những quý cô được so sánh như bông hoa hồng nở rộ...
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="w-[354px] border-2 rounded-xl overflow-hidden img-scale">
                    <a href="#" >
                        <img src={newsfeed4} alt=""  width="354px" />
                    </a>
                    <div className="bg-white pb-4 pt-2 ">
                        <div className="mx-3 ">
                        <div className="text-sm font-inter text-[#6D758F] mt-3 items-center flex">
                                <img src="./src/assets/images/Circle Avatar.svg" alt="" className="inline-flex mr-1"/> 
                                <span>Cakewai</span> 
                                <hr className="border-gray-400 w-[24px] border mx-4 mt-1" />
                                <img src="./src/assets/images/calendar.svg" alt="" className="inline-flex mr-1" />
                                <p>{handleDate('2024-07-29')}</p>
                            </div>
                            <h2 className="text-xl text-[#6D758F] mt-3 mb-3 font-bold">
                                Tưng bừng đắm chìm vào không gian huyền ảo cùng...
                            </h2>
                            <h3 className="text-base text-[#6D758F] mb-3 mt-3">
                            Bánh Passion Mousse Cheesecake là sự kết hợp tuyệt vời giữa vị chua ngọt của chanh dây và vị béo ngậy của...
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="w-[354px] border-2 rounded-xl overflow-hidden img-scale">
                    <a href="#" >
                        <img src={newsfeed3} alt=""  width="354px" />
                    </a>
                    <div className="bg-white pb-4 pt-2 ">
                        <div className="mx-3 ">
                        <div className="text-sm font-inter text-[#6D758F] mt-3 items-center flex">
                                <img src="./src/assets/images/Circle Avatar.svg" alt="" className="inline-flex mr-1"/> 
                                <span>Gia Mẫn</span> 
                                <hr className="border-gray-400 w-[24px] border mx-4 mt-1" />
                                <img src="./src/assets/images/calendar.svg" alt="" className="inline-flex mr-1" />
                                <p>{handleDate('2024-04-12')}</p>
                            </div>
                            <h2 className="text-xl text-[#6D758F] mt-3 mb-3 font-bold">
                                Bầu trời châu âu được ra mắt hoành tráng với...
                            </h2>
                            <h3 className="text-base text-[#6D758F] mb-3 mt-3">
                                Nhà Cakewai đã vô cùng tâm đắc và trau chuốt khi đã chính thức cho ra mắt bộ sưu tập mới đầy màu sắc và mang tính biểu tượng đến...
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="w-[354px] border-2 rounded-xl overflow-hidden img-scale">
                    <a href="#" >
                        <img src={newsfeed1} alt=""  width="354px" />
                    </a>
                    <div className="bg-white pb-4 pt-2 ">
                        <div className="mx-3 ">
                        <div className="text-sm font-inter text-[#6D758F] mt-3 items-center flex">
                                <img src="./src/assets/images/Circle Avatar.svg" alt="" className="inline-flex mr-1"/> 
                                <span>Gia Mẫn</span> 
                                <hr className="border-gray-400 w-[24px] border mx-4 mt-1" />
                                <img src="./src/assets/images/calendar.svg" alt="" className="inline-flex mr-1" />
                                <p>{handleDate('2024-01-03')}</p>
                            </div>
                            <h2 className="text-xl text-[#6D758F] mt-3 mb-3 font-bold">
                                Cakewai - Đặt bánh teabreak cho sự kiện, hội thảo,...
                            </h2>
                            <h3 className="text-base text-[#6D758F] mb-3 mt-3">
                                Cakewai cung cấp: Bánh sinh nhật, bánh minicake, bánh sự kiện, tiệc buffet bánh ngọt, tiệc bánh ngọt khai trương, bánh coockies,... liên hệ hotline để được tư...
                            </h3>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    );
}

export default Newsfeed