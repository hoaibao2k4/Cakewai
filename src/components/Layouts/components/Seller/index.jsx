import tessaCake from '~/assets/images/CakeBestSeller/tessacake.png';
import useCake from '~/hooks/useCake';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from '../Card';
import { FaLongArrowAltRight } from "react-icons/fa";
function Seller({ params }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const { cakes, categoryName } = useCake(params);
  return (
    <div className="best-seller w-full">
      <div className="mx-10 my-10 flex flex-col items-center text-primary lg:mx-28 lg:my-20 lg:flex-row">
        <h1 className="text-center text-3xl font-bold md:text-4xl lg:basis-1/2 lg:text-4xl">Sản phẩm bán chạy...</h1>
        <div className="my-1 h-1 w-28 border-b-2 border-primary lg:my-0 lg:rotate-90 lg:pr-8"></div>
        <p className="text-base font-medium lg:basis-1/2 lg:text-lg">
          Chúng tôi tự hào giới thiệu những tác phẩm được yêu thích nhất của mình, được mọi người trên toàn thế giới yêu
          mến. Sự nhẹ nhàng và ngọt ngào tuyệt hảo của những chiếc bánh của chúng tôi sẽ khiến bạn không thể cưỡng lại
          được. Hãy khám phá các loại bánh, bánh mì và những món ngon khác mà chúng tôi mang đến.
        </p>
      </div>
      <div className="Our-product mx-auto w-full overflow-hidden">
        <Carousel
          responsive={responsive}
          additionalTransfrom={0}
          arrows
          centerMode={false}
          className="py-4"
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          swipeable
          itemClass="react-multi-carousel-item"
        >
          {cakes.map((cake, index) => (
            <Card
              key={index}
              image_link={cake.image_link}
              product_name={cake.product_name}
              description={cake.description}
              id={cake._id}
              price={cake.product_variant[0].price}
              categoryName={categoryName}
              cake={cake}
            />
          ))}
        </Carousel>
      </div>
      <div className="Introduce mx-10 my-10 lg:mx-24 lg:flex">
        <img
          src={tessaCake}
          alt=""
          width="100%"
          height="100%"
          className="mx-auto h-auto max-w-[300px] rounded-br-[5rem] rounded-tl-[5rem] shadow-2xl lg:max-w-[500px]"
        />
        <div className="my-8 justify-center gap-4 text-primary lg:my-0 lg:ml-20 lg:flex lg:flex-col">
          <h2 className="text-2xl font-bold lg:text-4xl">
            Những món bánh nướng vừa ra lò, được làm riêng dành cho bạn.
          </h2>
          <p className="ml-4 text-lg font-normal lg:text-xl">
            Chúng tôi làm ra những món bánh thơm ngon từ những nguyên liệu hảo hạng nhất. Từ những chiếc bánh quy sô cô
            la ấm áp đến những chiếc bánh sừng bò giòn tan, mỗi miếng bánh đều tràn đầy sự ấm áp và hương vị. Hãy đến và
            trải nghiệm sự kỳ diệu tại tiệm bánh của chúng tôi.
          </p>
          <a href="/category" className="ml-4 flex items-center gap-2">
            <span>Xem thêm</span>
            <FaLongArrowAltRight className=' translate-y-1/6'/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Seller;
