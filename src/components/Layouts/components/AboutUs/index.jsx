import about_1 from '~/assets/images/about_1.jpg';
import about_2 from '~/assets/images/about_2.jpg';
import about_3 from '~/assets/images/about_3.jpg';
import { Link } from 'react-router-dom';
function AboutUs() {
  return (
    <div className="mx-full font-inter mt-28 w-full items-center overflow-hidden text-black text-primary">
      <div className="mx-4 sm:mx-10 lg:mx-28">
        <Link to="/">Trang chủ </Link>
        <span>&gt;&gt;</span>
        <Link to="/about"> Về chúng tôi </Link>
      </div>
      <div
        className="img-scale mt-5 h-[200px] sm:h-[300px] w-full overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${about_1})` }}
      >
        <div
          className="flex h-full items-center justify-start"
          style={{
            background: 'linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0.2) 100%)',
          }}
        >
          <div className="ml-8 sm:lm-12 lg:ml-20 max-w-lg text-left">
            <Link to="/about?mode=info1" className="text-4xl sm:text-5xl font-bold text-white hover:text-yellow-500">
              Câu chuyện
            </Link>
            <div className=" my-5 text-xs sm:text-sm text-white">
              Cakewai được thành lập vào năm 2024, bắt nguồn từ tình yêu dành cho đất Việt cùng với bánh ngọt và cộng
              đồng nơi đây. Ngay từ những ngày đầu tiên, mục tiêu của chúng mình là có thể phục vụ và góp phần phát
              triển cộng đồng bằng cách siết chặt thêm sự kết nối và sự gắn bó giữa người với người.
            </div>
          </div>
        </div>
      </div>

      <div
        className="img-scale h-[200px] sm:h-[300px] w-full overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${about_2})` }}
      >
        <div
          className="flex h-full items-center justify-end"
          style={{
            background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, #000000 100%)',
          }}
        >
          <div className="mr-8 sm:mr-12 lg:mr-20 max-w-lg text-right">
            <Link to="/about?mode=info2" className="text-4xl sm:text-5xl font-bold text-white hover:text-yellow-500">
              Dịch vụ
            </Link>
            <div className="my-5 text-xs sm:text-sm text-white">
              Cakewai là không gian của chúng mình nên mọi thứ ở đây đều vì sự thoải mái của chúng mình. Đừng giữ trong
              lòng, hãy chia sẻ với chúng mình điều bạn mong muốn để cùng nhau giúp Cakewai trở nên tuyệt vời hơn.
            </div>
          </div>
        </div>
      </div>

      <div
        className="img-scale h-[200px] sm:h-[300px] w-full overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${about_3})` }}
      >
        <div
          className="flex h-full items-center justify-start"
          style={{
            background: 'linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0.2) 100%)',
          }}
        >
          <div className="ml-8 sm:lm-12 lg:ml-20 max-w-lg text-left">
            <Link to="/about?mode=info3" className="text-4xl sm:text-5xl font-bold text-white hover:text-yellow-500">
              Lời cam kết
            </Link>
            <div className="my-5 text-xs sm:text-sm text-white">
              Cakewai cam kết mang đến cho khách hàng những chiếc bánh ngọt tinh tế, tươi ngon và chất lượng nhất. Chúng
              tôi hiểu rằng mỗi chiếc bánh không chỉ là món ăn mà còn là tâm tư, tình cảm gửi gắm đến người nhận.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
