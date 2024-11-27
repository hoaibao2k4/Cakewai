import tessaCake from '~/assets/images/CakeBestSeller/tessacake.png';
import { useEffect, useState } from 'react';
import { fetchBestSeller } from '~/api/bestSeller';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from '../Card';
function Seller() {
  const [sellers, setSellers] = useState([]);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  useEffect(() => {
    fetchSeller();
  }, []);
  const fetchSeller = async () => {
    try {
      let res = await fetchBestSeller();
      setSellers(res.data);
    } catch (error) {
      console.log('Error...', error);
    }
  };
  return (
    <div className="best-seller w-full">
      <div className="mx-10 my-10 flex flex-col items-center text-primary lg:mx-28 lg:my-20 lg:flex-row">
        <h1 className="text-center text-3xl font-bold md:text-4xl lg:basis-1/2 lg:text-5xl">Our Best Sellers...</h1>
        <div className="my-1 h-1 w-28 border-b-2 border-primary lg:my-0 lg:rotate-90 lg:pr-8"></div>
        <p className="text-base font-medium lg:basis-1/2 lg:text-xl">
          We proudly present our most beloved creations, universally adored by all. The delectable lightness and
          sweetness of our cakes will leave you craving for more. Explore our diverse range of cakes, breads, and other
          delectable offerings.
        </p>
      </div>
      <div className="Our-product mx-auto w-full overflow-hidden">
        <Carousel
          responsive={responsive}
          additionalTransfrom={0}
          arrows
          centerMode={false}
          className="py-5"
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
          {sellers.map((seller, index) => (
            <Card
              key={index}
              image_link={seller.image_link}
              product_name={seller.product_name}
              description={seller.description}
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
          <h2 className="text-2xl font-bold lg:text-4xl">Oven-fresh baked goods, baked just for you</h2>
          <p className="ml-4 text-lg font-normal lg:text-2xl">
            We bake delicious treats with the finest ingredients. From warm chocolate chip cookies to flaky croissants,
            every bite is filled with warmth and flavor. Come experience the magic of our bakery.
          </p>
          <a href="#" className="ml-4">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}

export default Seller;
