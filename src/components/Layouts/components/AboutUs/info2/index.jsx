import about_1 from '~/assets/images/about_1.jpg';
import about_2 from '~/assets/images/about_2.jpg';
import about_3 from '~/assets/images/about_3.jpg';
import { Link } from 'react-router-dom';
function Info2() {
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
        style={{ backgroundImage: `url(${about_2})` }}
      ></div>
      <div className="my-10 flex flex-row space-x-20">
        <div className="my-5 ml-20 max-w-4xl text-left">
          <h1 className="text-5xl font-bold text-black">DỊCH VỤ</h1>
          <div className="text-bg mb-2 mt-5 text-black">
            Cakewai là không gian của chúng mình nên mọi thứ ở đây đều vì sự thoải mái của chúng mình. Đừng giữ trong
            lòng, hãy chia sẻ với chúng mình điều bạn mong muốn để cùng nhau giúp Cakewai trở nên tuyệt vời hơn.
          </div>
          <div className="text-bg mb-2 text-black">
            Tại Cakewai, mỗi dịch vụ và sản phẩm đều được tạo nên với sự chân thành và tâm huyết. Chúng mình không ngừng
            lắng nghe và đổi mới để mang lại trải nghiệm tốt nhất cho khách hàng. Mỗi phản hồi của bạn là động lực để
            chúng mình hoàn thiện hơn từng ngày, từ chất lượng bánh đến cách phục vụ. Đến với Cakewai, bạn sẽ cảm nhận
            được không gian gần gũi, nơi mà mọi người có thể tận hưởng những khoảnh khắc ý nghĩa bên nhau. Cakewai không
            chỉ là nơi để thưởng thức bánh ngọt, mà còn là nơi lan tỏa sự sẻ chia và niềm vui.
          </div>
          <div className="text-bg mb-2 font-bold text-black">Đừng ngần ngại chia sẽ ý kiến của bạn tại:</div>
          <div className="text-bg text-black">
            Email: <span className="text-red-300">cakewai@gmail.com</span>
          </div>
          <div className="text-bg text-black">
            Phone: <span className="text-red-300">0912476521</span>
          </div>
        </div>

        <div className="flex flex-col space-y-5">
        
            <div
              style={{ backgroundImage: `url(${about_1})` }}
              className="img-scale flex h-64 w-80 items-start justify-center rounded-lg bg-cover bg-center"
            >
              <Link to="/about?mode=info1" className="mt-3 text-5xl font-bold text-white hover:text-yellow-500">CÂU CHUYỆN</Link>
            </div>
          
        
            <div
              style={{ backgroundImage: `url(${about_3})` }}
              className="img-scale flex h-64 w-80 items-start justify-center rounded-lg bg-cover bg-center"
            >
              <Link to="/about?mode=info3" className="mt-3 text-5xl font-bold text-white hover:text-yellow-500">LỜI CAM KẾT</Link>
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default Info2;
