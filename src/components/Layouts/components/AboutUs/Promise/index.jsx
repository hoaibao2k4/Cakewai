import about_1 from '~/assets/images/about_1.jpg';
import about_2 from '~/assets/images/about_2.jpg';
import about_3 from '~/assets/images/about_3.jpg';
import { Link } from 'react-router-dom';
function Info3() {
  return (
    <div className="mx-full font-inter mt-28 w-full items-center overflow-hidden text-primary">
      <div className="mx-28">
        <a href="/">Trang chủ </a>
        <span>&gt;&gt;</span>
        <a href="/about"> Về chúng tôi </a>
        <span>&gt;&gt;</span>
        <span>Lời cam kết</span>
      </div>
      <div
        className="mt-5 flex h-auto w-auto items-center bg-cover bg-center pt-[50%] duration-500"
        style={{ backgroundImage: `url(${about_3})` }}
      ></div>
      <div className="my-10 flex lg:flex-row flex-col space-x-20">
        <div className="my-5 lg:ml-20 mx-10 max-w-4xl text-left">
          <h1 className="text-5xl font-bold text-black">LỜI CAM KẾT</h1>
          <div className="text-bg my-5 text-black">
            Cakewai cam kết mang đến cho khách hàng những chiếc bánh ngọt tinh tế, tươi ngon và chất lượng nhất. Chúng
            tôi hiểu rằng mỗi chiếc bánh không chỉ là món ăn mà còn là tâm tư, tình cảm gửi gắm đến người nhận.
          </div>
          <div className="text-bg text-black">
            Tại Cakewai, chúng tôi không ngừng tìm kiếm nguyên liệu tươi mới và an toàn nhất, đảm bảo mỗi sản phẩm đều
            đạt tiêu chuẩn cao nhất về chất lượng và hương vị. Đội ngũ của chúng tôi luôn đặt cả tâm huyết vào từng công
            đoạn, từ lựa chọn nguyên liệu đến trang trí, với mong muốn mang đến cho bạn và những người thân yêu những
            trải nghiệm ngọt ngào nhất.
          </div>
        </div>

        <div className="flex flex-col space-y-5">
          <div
            style={{ backgroundImage: `url(${about_2})` }}
            className="img-scale flex h-64 w-80 items-start justify-center rounded-lg bg-cover bg-center"
          >
            <Link to="/about?mode=info2" className="mt-3 text-5xl font-bold text-white hover:text-yellow-500">
              DỊCH VỤ
            </Link>
          </div>

          <div
            style={{ backgroundImage: `url(${about_1})` }}
            className="img-scale flex h-64 w-80 items-start justify-center rounded-lg bg-cover bg-center"
          >
            <Link to="/about?mode=info1" className="mt-3 text-5xl font-bold text-white hover:text-yellow-500">
              CÂU CHUYỆN
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info3;
