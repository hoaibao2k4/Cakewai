import about_1 from "~/assets/images/about_1.jpg";
import about_2 from "~/assets/images/about_2.jpg";
import about_3 from "~/assets/images/about_3.jpg";

function AboutUs() {
  return (
    <div className="mx-full w-full mt-28 items-center text-primary text-black overflow-hidden font-inter">
      <div className="mx-28">
        <a href="/">Trang chủ </a>
        <span>&gt;&gt;</span>
        <a href="/about"> Về chúng tôi </a>
      </div>
      <div
      className="w-full h-[300px] bg-cover bg-center mt-5 img-scale overflow-hidden"
      style={{ backgroundImage: `url(${about_1})` }}
    >
        <div className=" h-full flex justify-start items-center " 
        style={{
    background: 'linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0.2) 100%)'
  }}>
            <div className="text-left max-w-lg ml-20">
                 <a href="#" className="text-white text-5xl font-bold hover:text-yellow-500">Câu chuyện</a>
                <div className="text-white text-sm my-5">Cakewai được thành lập vào năm 2024, bắt nguồn từ tình yêu dành cho đất Việt cùng với bánh ngọt và cộng đồng nơi đây. Ngay từ những ngày đầu tiên, mục tiêu của chúng mình là có thể phục vụ và góp phần phát triển cộng đồng bằng cách siết chặt thêm sự kết nối và sự gắn bó giữa người với người.</div>
            </div>
        </div>
    </div>

    <div
      className="w-full h-[300px] bg-cover bg-center img-scale overflow-hidden"
      style={{ backgroundImage: `url(${about_2})` }}
    >
        <div className="h-full flex justify-end items-center" style={{
    background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, #000000 100%)'
  }}>
            <div className="text-right max-w-lg mr-20">
                <a href="#" className="text-white text-5xl font-bold hover:text-yellow-500 ">Dịch vụ</a> 
                <div className="text-white text-sm my-5">Cakewai là không gian của chúng mình nên mọi thứ ở đây đều vì sự thoải mái của chúng mình. Đừng giữ trong lòng, hãy chia sẻ với chúng mình điều bạn mong muốn để cùng nhau giúp Cakewai trở nên tuyệt vời hơn.</div>
            </div>
        </div>
    </div>

    <div
      className="w-full h-[300px] bg-cover bg-center img-scale overflow-hidden"
      style={{ backgroundImage: `url(${about_3})` }}
    >
        <div className="h-full flex justify-start items-center" style={{
    background: 'linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0.2) 100%)'
  }}>
            <div className="text-left max-w-lg ml-20">
                <a href="#" className="text-white text-5xl font-bold hover:text-yellow-500">Lời cam kết</a>
                <div className="text-white text-sm my-5">Cakewai cam kết mang đến cho khách hàng những chiếc bánh ngọt tinh tế, tươi ngon và chất lượng nhất. Chúng tôi hiểu rằng mỗi chiếc bánh không chỉ là món ăn mà còn là tâm tư, tình cảm gửi gắm đến người nhận.</div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default AboutUs;
