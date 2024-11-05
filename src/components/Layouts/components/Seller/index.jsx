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
      <div className="mx-28 my-20 flex items-center text-primary">
        <h1 className="basis-1/2 text-center text-5xl font-bold">Our Best Sellers...</h1>
        <div className="h-28 border-l-2 border-primary pr-8"></div>
        <p className="basis-1/2 text-xl font-medium">
          We proudly present our most beloved creations, universally adored by all. The delectable lightness and
          sweetness of our cakes will leave you craving for more. Explore our diverse range of cakes, breads, and other
          delectable offerings.
        </p>
      </div>
      <div className="Our-product relative grid w-full grid-custom-seller justify-evenly">
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
      <div className="Introduce mx-24 my-10 flex">
        <img src={tessaCake} alt="" width="500px" className="rounded-br-[5rem] rounded-tl-[5rem] shadow-2xl" />
        <div className="ml-20 flex flex-col justify-center gap-4 text-primary">
          <h2 className="text-4xl font-bold">Oven-fresh baked goods, baked just for you</h2>
          <p className="ml-4 text-2xl font-normal">
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
