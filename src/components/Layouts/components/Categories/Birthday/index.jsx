import { CakeDropdown } from '~/components/clients/client';
import tessaCake from '~/assets/images/CakeBestSeller/tessacake.png';
import fetchCake from '~/api/cake';
import { useEffect, useState } from 'react';
import { truncateDescription } from '~/helper';
function Birthday() {
  const [cakes, setCakes] = useState([]);
  useEffect(() => {
    getCakes();
  }, []);
  const getCakes = async () => {
    try {
      let result = await fetchCake();
      setCakes(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-16 w-full bg-slate-100">
      <div className="mx-[5rem]">
        <div className="flex h-11 items-center text-primary">
          <div>
            <a href="/">Home </a>
            <span>&gt;&gt;</span>
            <a href="/"> Categories </a>
            <span>&gt;&gt;</span>
            <a href="/"> Birthday cakes </a>
          </div>
        </div>
        <h1 className="text-center text-5xl font-bold leading-[72px]">Birthday Cake</h1>
        <p className="py-5 text-center text-sm font-bold leading-4">
          Bánh truyền thống là một trong những loại bánh đã đưa tên tuổi chúng tôi có được ngày hôm nay, đây là một
          trong <br />
          số nhiều loại bán chạy nhất hiện nay
        </p>
        <div className="">
          <div className="float-right mx-4">
            <CakeDropdown></CakeDropdown>
          </div>
          <div className="product grid-custom-4 relative grid w-full justify-center">
            {cakes.map((cake, index) => (
              <div key={index} className="img-scale m-8 h-[426px] w-[260px]">
                <a href="#">
                  <img src={cake.image_link} alt="" className="h-[260px] w-[260px] object-cover" />
                </a>
                <div className="h-[210px] rounded-b-xl bg-secondary pb-4 pt-2">
                  <div className="mx-3">
                    <div className="mb-5 h-10">
                      <h3 className="text-xl font-semibold">{cake.product_name}</h3>
                    </div>
                    <div className="">
                      <p className="text-sm font-light">{truncateDescription(cake.description, 80)}</p>
                    </div>
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Birthday;
