import about_1 from '~/assets/images/about_1.jpg';
import about_2 from '~/assets/images/about_2.jpg';
import about_3 from '~/assets/images/about_3.jpg';
import { Link } from 'react-router-dom';
function Info1() {
  return (
    <div className="mx-full font-inter mt-28 w-full items-center overflow-hidden text-black text-primary">
      <div className="mx-28">
        <a href="/">Trang chủ </a>
        <span>&gt;&gt;</span>
        <a href="/about"> Về chúng tôi </a>
        <span>&gt;&gt;</span>
        <span>Nội dung</span>
      </div>
      <div
        className="mt-5 flex h-auto w-auto items-center bg-cover bg-center pt-[50%] duration-500"
        style={{ backgroundImage: `url(${about_1})` }}
      ></div>
      <div className="my-10 flex flex-row space-x-20">
        <div className="my-5 ml-20 max-w-4xl text-left">
          <h1 className="text-5xl font-bold text-black">CÂU CHUYỆN</h1>
          <div className="text-bg my-5 text-black">
            Cakewai được thành lập vào năm 2024, bắt nguồn từ tình yêu dành cho đất Việt cùng với bánh ngọt và cộng đồng
            nơi đây. Ngay từ những ngày đầu tiên, mục tiêu của chúng mình là có thể phục vụ và góp phần phát triển cộng
            đồng bằng cách siết chặt thêm sự kết nối và sự gắn bó giữa người với người.
          </div>
          <div className="text-bg text-black">
            Bên cạnh việc mang đến những chiếc bánh ngọt ngào và hương vị truyền thống, Cakewai luôn đặt chất lượng và
            tình cảm vào từng sản phẩm. Chúng mình tin rằng mỗi chiếc bánh không chỉ là món ăn mà còn là một thông điệp
            gửi gắm tình yêu và sự quan tâm. Với mỗi sản phẩm ra đời, Cakewai mong muốn sẽ mang lại niềm vui, sự ấm áp,
            và tạo thêm nhiều khoảnh khắc gắn kết cho mọi người.
          </div>
        </div>

        <div className="flex flex-col space-y-5">
         
            <div
              style={{ backgroundImage: `url(${about_2})` }}
              className="img-scale flex h-64 w-80 items-start justify-center rounded-lg bg-cover bg-center"
            >
              <Link to="/about?mode=info2" className="mt-3 text-5xl font-bold text-white hover:text-yellow-500">DỊCH VỤ</Link>
            </div>
          
          
            <div
              style={{ backgroundImage: `url(${about_3})` }}
              className="img-scale flex h-64 w-80 items-start justify-center rounded-lg bg-cover bg-center"
            >
              <Link to="/about?mode=info3" className="mt-3 text-5xl font-bold text-white hover:text-yel">LỜI CAM KẾT</Link>
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default Info1;
