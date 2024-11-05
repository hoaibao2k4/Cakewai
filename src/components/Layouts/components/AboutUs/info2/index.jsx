import about_1 from "~/assets/images/about_1.jpg";
import about_2 from "~/assets/images/about_2.jpg";
import about_3 from "~/assets/images/about_3.jpg";
function Info2(){

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
      style={{ backgroundImage: `url(${about_2})` }}>
            </div>
            <div className="flex flex-row space-x-20 my-10">
                <div className="my-5 text-left max-w-4xl ml-20">
                    <h1 className="text-black text-5xl font-bold ">DỊCH VỤ</h1>
                    <div className="text-bg text-black mt-5 mb-2">Cakewai là không gian của chúng mình nên mọi thứ ở đây đều vì sự thoải mái của chúng mình. Đừng giữ trong lòng, hãy chia sẻ với chúng mình điều bạn mong muốn để cùng nhau giúp Cakewai trở nên tuyệt vời hơn.</div>
                    <div className="text-bg text-black mb-2">Tại Cakewai, mỗi dịch vụ và sản phẩm đều được tạo nên với sự chân thành và tâm huyết. Chúng mình không ngừng lắng nghe và đổi mới để mang lại trải nghiệm tốt nhất cho khách hàng. Mỗi phản hồi của bạn là động lực để chúng mình hoàn thiện hơn từng ngày, từ chất lượng bánh đến cách phục vụ. Đến với Cakewai, bạn sẽ cảm nhận được không gian gần gũi, nơi mà mọi người có thể tận hưởng những khoảnh khắc ý nghĩa bên nhau. Cakewai không chỉ là nơi để thưởng thức bánh ngọt, mà còn là nơi lan tỏa sự sẻ chia và niềm vui.</div>
                    <div className="text-bg text-black font-bold mb-2">Đừng ngần ngại chia sẽ ý kiến của bạn tại:</div>
                    <div className="text-bg text-black">Email: <span className="text-red-300">cakewai@gmail.com</span></div>
                    <div className="text-bg text-black">Phone: <span className="text-red-300">0912476521</span></div>

                </div>

                <div className="flex flex-col space-y-5 ">
                    <a href="#">
                        <div style={{ backgroundImage: `url(${about_1})` }}
                        className="h-64 w-80 bg-cover bg-center rounded-lg flex items-start justify-center img-scale ">
                        <span className="text-white text-5xl font-bold mt-3">CÂU CHUYỆN</span>
                        </div>
                    </a>
                    <a href="#">
                        <div style={{ backgroundImage: `url(${about_3})` }}
                        className="h-64 w-80 bg-cover bg-center rounded-lg flex items-start justify-center img-scale">
                            <span className="text-white text-5xl font-bold mt-3">LỜI CAM KẾT</span>    
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Info2