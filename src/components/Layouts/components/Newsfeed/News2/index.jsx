
function Newsfeed2(){
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
                <h1 className="text-black text-center font-inter text-4xl font-extrabold leading-none mb-10">Mẫu bánh kem mừng 20/11 ngày Nhà Giáo Việt Nam.</h1> 
                <div className="inline-flex space-x-8">
                        <div className="flex items-center">
                            <img src="./src/assets/images/Circle Avatar.svg" alt="" className="inline-flex mr-1 w-8 h-8"/> 
                            <span >Gia Mẫn</span>
                        </div>
                        <div className="flex items-center"> 
                            <img src="./src/assets/images/calendar.svg" alt="" className="inline-flex mr-1 w-8 h-8" />
                            <p >{handleDate('2024-11-20')}</p>
                        </div>
                </div>
                <hr className="border-gray-400 bg-gray-400  w-[850px] h-[15px] border mx-auto my-5 border-t-2" />
                <div className="text-black">
                    <h2 className="my-5">"Không thầy đố mày làm nên"</h2>
                    <h2 className="my-5">Ngày 20/11 được xem là ngày lễ lớn trọng đại của con người Việt Nam nhằm tôn vinh vẻ đẹp trong sáng và trân quý nhất đối với những người lái đò đã dìu dắt bao thế hệ tiến bước đến cánh cổng rực rỡ của tương lai.</h2>
                    <h2>Ngày 20/11 là ngày Nhà Giáo Việt Nam, cũng được gọi là ngày Hiến chương Nhà Giáo Việt Nam. Đây là một dịp lễ quan trọng và ý nghĩa được tổ chức hàng năm để bao thế hệ học sinh, sinh viên có cơ hội để bày tỏ lòng biết ơn và tri ân đến với các quý thầy cô giáo - những người đã hết mình tận tụy vì một sự nghiệp trồng người của đất nước.</h2>
                    <h2>Trong dịp lễ này, đại đa số các trường học, học sinh và sinh viên sẽ tổ chức những hoạt động ý nghĩa, kỉ niệm để thể hiện tấm lòng tôn kính của mình dành cho các bậc thầy cô. Các hoạt động có thể kể đến như viết thư tay, làm báo tường, thiết kế, trang trí bảng hiệu, tặng hoa, quà để thể hiện sự biết ơn đấy một cách sâu sắc nhất. Ngoài ra, các trường còn tổ chức các buổi tọa đàm, gặp mặt và kết nối thầy - trò để cùng gắn kết chia sẻ nhiều kỉ niệm đã trải qua trong đoạn thời gian vô giá ấy.</h2>
                    <h1 className="text-black  font-inter text-2xl font-bold leading-none my-5">Mẫu bánh kem 20/11 mừng ngày Nhà giáo Việt Nam </h1>
                    <h2 className="mt-5 mb-3">Sau đây là những mẫu bánh kem được chọn lọc đẹp nhất có tại Cakewai. Mời các bạn cùng tham khảo! </h2>
                    <img src="./src/assets/images/20-11_1.png" alt="" width="600px" className="mx-auto block my-5"/>
                    <img src="./src/assets/images/20-11_2.png" alt="" width="600px" className="mx-auto block my-5"/>
                    <img src="./src/assets/images/20-11_3.png" alt="" width="600px" className="mx-auto block my-5"/>
                    <h2 className="italic">"More than cake"</h2>
                    <h2>Chỉ một câu nói nhỏ cũng có thể miêu tả chiếc bánh kem mang chủ đề 20/11 năm nay đến từ nhà Cakewai.</h2>
                </div>
                <div>
                        <h1 className="text-black text-left font-inter text-4xl font-extrabold leading-none mb-10 mt-5 mb-3">CÁC BÀI VIẾT LIÊN QUAN</h1>
                        <ul className="list-disc ml-10 ">
                            <li className="hover:underline">
                                <a href="#">Cakewai Thông Báo Lịch Nghỉ Tết Nguyên Đán 2024.</a>
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

export default Newsfeed2