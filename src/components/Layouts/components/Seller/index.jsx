import tessaCake from '~/assets/images/CakeBestSeller/tessacake.png';
import birthdayCake from '~/assets/images/CakeBestSeller/birthdaycake.jpg';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { fetchBestSeller } from '~/api/bestSeller';
function Seller() {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    fetchSeller();
  }, []);
  const fetchSeller = async () => {
    try {
      let res = await fetchBestSeller()
      setSellers(res.data)
    }
    catch(error) {
      console.log('Error...', error)
    }
  };
  return (
    <div className="best-seller">
      <div className="lg:mx-28 mx-10 lg:my-20 my-10 flex flex-col lg:flex-row items-center text-primary">
        <h1 className="lg:basis-1/2 text-center lg:text-5xl md:text-4xl text-3xl font-bold">Our Best Sellers...</h1>
        <div className="h-1 w-28 border-b-2 border-primary lg:pr-8 lg:rotate-90 lg:my-0 my-1"></div>
        <p className="lg:basis-1/2 lg:text-xl text-base font-medium">
          We proudly present our most beloved creations, universally adored by all. The delectable lightness and
          sweetness of our cakes will leave you craving for more. Explore our diverse range of cakes, breads, and other
          delectable offerings.
        </p>
      </div>
      <div className="Our-product relative grid w-full lg:grid-custom-3 md:grid-custom-2 grid-custom-1 justify-evenly lg:gap-0 gap-6">
        {sellers.map((seller, index) => (
          index < 3 && (
          <div key = {index} className="img-scale w-[300px]">
          <a href="#">
            <img src={seller.image_link} alt="" width="300px" />
          </a>
          <div className="rounded-b-xl bg-secondary pb-4 pt-2">
            <div className="mx-3">
              <h3 className="text-xl font-semibold">{seller.product_name}</h3>
              <p className="text-sm font-light">{seller.description}</p>
              <div className="flex justify-between">
                <div className="mt-2 flex gap-1">
                  <svg
                    className="h-4 w-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="h-4 w-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="h-4 w-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="h-4 w-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="h-4 w-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </div>
                <div className="absolute right-3 top-3 rounded bg-slate-400 px-2 py-1">
                  <span className="text-xl font-bold">230$</span>
                </div>
              </div>
              <div className="mt-2 flex justify-between gap-2 text-xs font-semibold">
                <a href="#" className="basis-1/2 rounded bg-primary px-4 py-[6px] text-center text-slate-100">
                  Buy Now
                </a>
                <a href="#" className="basis-1/2 rounded bg-white px-4 py-[6px] text-center text-slate-500">
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </div>
        )))}
        
        <div className="absolute left-5 top-[50%] -translate-x-0 translate-y-[50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white">
          <BsChevronCompactLeft size={30} onClick={() => prevSlide()} />
        </div>
        <div className="absolute right-5 top-[50%] -translate-x-0 translate-y-[50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white">
          <BsChevronCompactRight size={30} onClick={() => nextSlide()} />
        </div>
      </div>
      <div className="Introduce lg:mx-24 mx-10 my-10 lg:flex">
        <img src={tessaCake} alt="" width="100%" height='100%' className="rounded-br-[5rem] rounded-tl-[5rem] shadow-2xl lg:max-w-[500px] max-w-[300px] h-auto mx-auto" />
        <div className="lg:ml-20 lg:flex lg:my-0 my-8 lg:flex-col justify-center gap-4 text-primary">
          <h2 className="lg:text-4xl text-2xl font-bold">Oven-fresh baked goods, baked just for you</h2>
          <p className="ml-4 lg:text-2xl text-lg font-normal">
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
