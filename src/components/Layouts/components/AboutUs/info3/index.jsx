import about_1 from "~/assets/images/about_1.jpg";
import about_2 from "~/assets/images/about_2.jpg";
import about_3 from "~/assets/images/about_3.jpg";
import { Link } from 'react-router-dom';
function Info3(){

    return(
<div className="mx-full w-full mt-28 items-center text-primary text-black overflow-hidden font-inter">
            <div className="mx-28">
                <a href="/">Trang chủ </a>
                <span>&gt;&gt;</span>
                <a href="/about"> Về chúng tôi </a>
                <span>&gt;&gt;</span>
                <span>Nội dung</span>
            </div>
            <div className="mt-5 flex h-auto w-auto items-center bg-cover bg-center pt-[50%] duration-500"
      style={{ backgroundImage: `url(${about_3})` }}>
            </div>
            <div className="flex flex-row space-x-20 my-10">
                <div className="my-5 text-left max-w-4xl ml-20">
                    <h1 className="text-black text-5xl font-bold ">LỜI CAM KẾT</h1>
                    <div className="text-bg text-black my-5">Cakewai cam kết mang đến cho khách hàng những chiếc bánh ngọt tinh tế, tươi ngon và chất lượng nhất. Chúng tôi hiểu rằng mỗi chiếc bánh không chỉ là món ăn mà còn là tâm tư, tình cảm gửi gắm đến người nhận.</div>
                    <div className="text-bg text-black">Tại Cakewai, chúng tôi không ngừng tìm kiếm nguyên liệu tươi mới và an toàn nhất, đảm bảo mỗi sản phẩm đều đạt tiêu chuẩn cao nhất về chất lượng và hương vị. Đội ngũ của chúng tôi luôn đặt cả tâm huyết vào từng công đoạn, từ lựa chọn nguyên liệu đến trang trí, với mong muốn mang đến cho bạn và những người thân yêu những trải nghiệm ngọt ngào nhất.</div>
                </div>

                <div className="flex flex-col space-y-5 ">
                    
                        <div style={{ backgroundImage: `url(${about_2})` }}
                        className="h-64 w-80 bg-cover bg-center rounded-lg flex items-start justify-center img-scale ">
                        <Link  to="/about?mode=info2" className="text-white text-5xl font-bold mt-3 hover:text-yellow-500">DỊCH VỤ</Link>
                        </div>
                    
                    
                        <div style={{ backgroundImage: `url(${about_1})` }}
                        className="h-64 w-80 bg-cover bg-center rounded-lg flex items-start justify-center img-scale">
                            <Link to="/about?mode=info1" className="text-white text-5xl font-bold mt-3 hover:text-yellow-500">CÂU CHUYỆN</Link>    
                        </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Info3