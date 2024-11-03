import newsfeed5 from "~/assets/images/newsfeed5.png";

function Newsfeed1(){
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
        
        <div className="mx-8 my-28 items-center text-primary text-black text-lg">
             <div >
                <a href="/">Trang chủ </a>
                <span>&gt;&gt;</span>
                <a href="/news"> Tin tức </a>
                <span>&gt;&gt;</span>
                <span> Nội dung</span>
            </div>
            <div className="flex justify-center">
                <div className=" flex flex-col h-auto w-[900px]  overflow-hidden border-2 bg-[#E8E1E1] rounded-xl px-5 py-5 space-y-2 my-5  font-inter break-words">
                    <h1 className="text-black text-center font-inter text-4xl font-extrabold leading-none mb-10">Cakewai Thông Báo Lịch Nghỉ Tết Nguyên Đán 2024.</h1> 
                    <div className="inline-flex space-x-8">
                        <div className="flex items-center">
                            <img src="./src/assets/images/Circle Avatar.svg" alt="" className="inline-flex mr-1 w-8 h-8"/> 
                            <span >Cakewai</span>
                        </div>
                        <div className="flex items-center"> 
                            <img src="./src/assets/images/calendar.svg" alt="" className="inline-flex mr-1 w-8 h-8" />
                            <p >{handleDate('2025-01-05')}</p>
                        </div>
                    </div>
                    <hr className="border-gray-400 bg-gray-400  w-[850px] h-[15px] border mx-auto my-5 border-t-2" />
                    <div className="text-center text-black">
                        <div className="my-5">Cakewai: Thông Báo Lịch Nghỉ Tết Nguyên Đán 2025.</div>
                        <div >Kính Chúc Quý Khách Hàng Năm Mới An Khang Và Thịnh Vượng.</div>
                        <div > Cảm Ơn Quý Khách Hàng Đã Luôn Ủng Hộ Cakewai và đồng hành trong suốt thời gian vừa qua.</div>
                        <img src={newsfeed5} alt="" width="600px" className="mx-auto block my-5"/>
                    </div>
                    <div>
                        <h1 className="text-black text-left font-inter text-4xl font-extrabold leading-none mb-10 mt-5 mb-3">CÁC BÀI VIẾT LIÊN QUAN</h1>
                        <ul className="list-disc ml-10 ">
                            <li className="hover:underline">
                                <a href="#">Mẫu bánh kem mừng 20/11 ngày Nhà Giáo Việt Nam.</a>
                            </li>
                            <li className="hover:underline">
                                <a href="#">Happy women day - 20/10 Dành tặng cho những đóa hoa hồng rực rỡ - rạng ngời - quý phái.</a>
                            </li>
                            <li className="hover:underline">
                                <a href="#">Tưng bừng đắm chìm vào không gian huyền ảo cùng Passion Mousse Cheesecake.</a>
                            </li>
                            <li className="hover:underline">
                                <a href="#" >Bầu trời châu âu được ra mắt hoành tráng với sự kết hợp đa văn hòa từ nhà Cakewai.</a>
                            </li>
                            <li className="hover:underline">
                                <a href="#"> Cakewai - Đặt bánh teabreak cho sự kiện, hội thảo, hội nghị... Tại TP.Hồ Chí Minh.</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Newsfeed1