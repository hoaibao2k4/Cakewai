

function Newsfeed4(){
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
                <h1 className="text-black text-center font-inter text-4xl font-extrabold leading-none mb-10">Tưng bừng đắm chìm vào không gian huyền ảo cùng Passion Mousse Cheesecake.</h1> 
                <div className="inline-flex space-x-8">
                    <div className="flex items-center">
                        <img src="./src/assets/images/Circle Avatar.svg" alt="" className="inline-flex mr-1 w-8 h-8"/> 
                        <span >Cakewai</span>
                    </div>
                    <div className="flex items-center"> 
                        <img src="./src/assets/images/calendar.svg" alt="" className="inline-flex mr-1 w-8 h-8" />
                        <p >{handleDate('2024-07-29')}</p>
                    </div>
                </div>
                <hr className="border-gray-400 bg-gray-400  w-[850px] h-[15px] border mx-auto my-5 border-t-2" />
                <div className="text-black">
                    <img src="./src/assets/images/newsfeed4.png" alt="" width="600px" className="mx-auto block my-5"/>
                    <div className="my-5">Bánh Passion Mousse Cheesecake là sự kết hợp tuyệt vời giữa vị chua ngọt của chanh dây và vị béo ngậy của phô mai hòa cùng lớp mouse mịn màng tan chảy bên trong lớp cheesecake mềm mại và đế bánh giòn rụm.</div>
                    <h2 className="text-black text-left font-inter text-3xl font-bold leading-none my-5">Cấu trúc bánh</h2>
                        <ol className="list-decimal ml-6">
                            <li>
                                Lớp cốt bánh
                                <ul className="list-disc space-y-2 ml-5">
                                    <li>Cốt bánh quy nghiền: Loại cốt này thường làm từ bánh quy nghiền nhỏ (như bánh quy graham hoặc bánh quy digestive), sau đó trộn với bơ tan chảy để tạo độ kết dính. Lớp này thường hơi giòn và có vị bơ thơm, tạo sự tương phản thú vị với lớp mousse mịn phía trên.</li>
                                    <li>Cốt bông lan: Một số phiên bản dùng lớp bông lan mềm làm đế, giúp bánh có kết cấu nhẹ và xốp hơn. Cốt bông lan cũng dễ dàng thấm hương chanh dây, làm tăng thêm mùi vị cho bánh.</li>
                                    <li>Cốt genoise hoặc sponge cake: Một số tiệm bánh cao cấp có thể sử dụng lớp cốt bánh genoise hoặc sponge cake nhẹ và xốp, tạo độ thanh thoát cho phần nền mà vẫn không làm mất đi hương vị của lớp mousse.</li> 
                                </ul>
                            </li>
                            <li>
                                Lớp Mousse Chanh Dây
                                <ul className="list-disc space-y-2 ml-5">
                                    <li>Lớp mousse chanh dây là phần chính của bánh, được làm từ nước cốt chanh dây, kem tươi, gelatin và phô mai (cream cheese). Đặc điểm của lớp mousse này là kết cấu mềm mịn, nhẹ và tan ngay trong miệng, mang lại vị chua thanh đặc trưng của chanh dây kết hợp với chút ngọt.</li>
                                    <li>Lớp mousse thường được phủ lên trên lớp cốt bánh đã chuẩn bị, sau đó được làm lạnh để mousse đạt độ đặc vừa phải nhưng vẫn mềm mại. </li>
                                </ul>
                            </li>
                            <li>
                                Lớp trang trí 
                                <ul className="list-disc space-y-2 ml-5">
                                    <li>Lớp trang trí thường là lớp thạch chanh dây mỏng, làm từ nước cốt chanh dây, đường, và gelatin. Lớp thạch này vừa tạo độ bóng bẩy cho bề mặt bánh, vừa giữ nguyên vẹn hương vị chanh dây tự nhiên. Để tăng thêm phần hấp dẫn, có thể thêm hạt chanh dây tươi lên bề mặt lớp thạch, tạo cảm giác tươi mát và độc đáo.</li>
                                </ul>
                            </li>
                        </ol>
                    <h2 className="text-black text-left font-inter text-3xl font-bold leading-none my-5">Hương Vị</h2>
                        <ul className="list-disc space-y-2 ml-6">
                            <li><span className="font-bold">Vị ngọt tự nhiên:</span> Độ ngọt nhẹ, kết hợp từ chanh dây và phần mousse phô mai, vừa đủ để không át đi vị chua đặc trưng của chanh dây.</li>
                            <li><span className="font-bold">Vị béo nhẹ:</span> Phô mai và kem tươi mang đến vị béo mềm mại, nhưng không quá ngấy, nhờ sự cân bằng từ chanh dây.</li>
                            <li> <span className="font-bold">Hương thơm dễ chịu:</span> Mùi thơm của chanh dây rất tự nhiên, quyện với hương kem và phô mai, làm bánh thơm mát và thanh nhã.</li>
                        </ul>
                    <h2 className="text-black text-left font-inter text-3xl font-bold leading-none my-5">Dịp thưởng thức</h2>
                        <span>Passion Mousse Cheesecake rất thích hợp cho các dịp sinh nhật, tiệc trà hoặc gặp gỡ gia đình, bạn bè; các buổi tiệc hoặc họp mặt nhẹ nhàng, nơi mọi người có thể thưởng thức món tráng miệng thanh mát. Bánh cũng là lựa chọn lý tưởng cho mùa hè, vì vị chua mát của chanh dây giúp giải nhiệt và làm mới khẩu vị.</span>
                    <h2 className="text-black text-left font-inter text-3xl font-bold leading-none my-5">Lợi ích sức khỏe</h2>
                        <ul className="list-disc space-y-2 ml-6">
                            <li><span className="font-bold">Cung cấp vitamin:</span> Chanh dây giàu vitamin C, A và các chất chống oxy hóa, giúp tăng cường hệ miễn dịch, làm sáng da và bảo vệ cơ thể.</li>
                            <li><span className="font-bold">Lợi khuẩn cho hệ tiêu hóa:</span> Thành phần phô mai và kem tươi có thể cung cấp một lượng lợi khuẩn nhất định cho hệ tiêu hóa, hỗ trợ tiêu hóa tốt hơn khi ăn uống điều độ.</li>
                            <li><span className="font-bold">Giảm căng thẳng:</span> Hương thơm dễ chịu và vị chua nhẹ của chanh dây có thể giúp kích thích vị giác, mang lại cảm giác thư giãn, dễ chịu khi thưởng thức.</li>
                        </ul>
                    <div>
                        <h1 className="text-black text-left font-inter text-4xl font-extrabold leading-none mb-10 mt-5 mb-3">CÁC BÀI VIẾT LIÊN QUAN</h1>
                        <ul className="list-disc ml-10 ">
                            <li className="hover:underline">
                                <a href="#">Cakewai Thông Báo Lịch Nghỉ Tết Nguyên Đán 2024.</a>
                            </li>
                            <li className="hover:underline">
                                <a href="#">Mẫu bánh kem mừng 20/11 ngày Nhà Giáo Việt Nam.</a>
                            </li>
                            <li className="hover:underline">
                                <a href="#">Happy women day - 20/10 Dành tặng cho những đóa hoa hồng rực rỡ - rạng ngời - quý phái.</a>
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
   </div>
    );
}

export default Newsfeed4