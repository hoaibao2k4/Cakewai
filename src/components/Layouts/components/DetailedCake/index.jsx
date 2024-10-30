import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import tessa from '~/assets/images/CakeBestSeller/tessacake.png';
function DetailedCake() {
const [cake, setCakes] = useState(1)

  return (
    <div className="mt-16 w-full bg-white">
      <div className="mx-[5rem]">
        <div className="flex h-11 items-center text-primary">
          <div>
            <NavLink to="/">Home </NavLink>
            <span>&gt;&gt;</span>
            <NavLink to="/category"> Categories </NavLink>
            <span>&gt;&gt;</span>
            <NavLink to="/birthday-cake"> Birthday cakes </NavLink>
            <span>&gt;&gt;</span>
            <NavLink to="/detailed"> Bánh kem cam sữa chua mật ong </NavLink>
          </div>
        </div>
        <div className="flex gap-5 my-10 ">
          <img src={tessa} width="450px" height="450px" alt="" className="rounded-xl" />
          <div>
            <h2 className='text-4xl font-bold pb-4'>Bánh kem cam sữa chua mật ong</h2>
            <span className='text-3xl font-semibold text-primary'>290.000 VND</span>
            <h4 className='text-2xl font-semibold text-black my-4'>Kích thước</h4>
            <div className='flex items-center gap-4'>
              <button className="h-10 w-[72px] rounded-lg border bg-slate-100 leading-10 text-center">16cm</button>
              <button className="h-10 w-[72px] rounded-lg border bg-slate-100 leading-10 text-center">18cm</button>
              <button className="h-10 w-[72px] rounded-lg border bg-slate-100 leading-10 text-center">20cm</button>
            </div>
            <h4 className='text-2xl font-semibold my-4'>Số lượng</h4>
            <div className='flex'>
              <button className="h-10 w-10 rounded-tl-lg rounded-bl-lg border border-primary" onClick={() => {cake === 1 ? setCakes(cake) : setCakes(cake-1)}}>-</button>
              <input type="text" value={cake} className='h-10 w-10 border-t border-b border-primary text-center' />
              <button className="h-10 w-10 rounded-tr-lg rounded-br-lg border border-primary" onClick={() => setCakes(cake+1)}>+</button>
            </div>
            <div className='flex gap-4 mt-10'>
              <button className='w-[260px] h-[65px] border rounded-lg text-2xl font-semibold text-primary border-primary'>Thêm vào giỏ hàng</button>
              <button className='w-[260px] h-[65px] border rounded-lg text-2xl font-semibold text-slate-100 bg-primary '>Mua ngay</button>
            </div>
          </div>
        </div>
        <h4 className='text-2xl font-semibold text-primary'>Mô tả</h4>
        <p className='text-xl font-normal my-5'>
          Bánh kem cam sữa chua mật ong là sự kết hợp hoàn hảo giữa vị chua thanh của sữa chua, ngọt dịu của mật ong và
          hương thơm tươi mát từ cam. Lớp bánh mềm mại được phủ kem mịn màng, mang đến cảm giác vừa béo ngậy, vừa tươi
          mới.
        </p>
        <h2 className='text-[40px] leading-[48px] font-bold my-5 text-primary text-center'>Sản phẩm tương tự</h2>
        <div className="relative grid w-full grid-cols-4">
            <div className="img-scale h-[426px] w-[260px]">
              <a href="#">
                <img src={tessa} alt="" width="300px" />
              </a>
              <div className="rounded-b-xl bg-secondary pb-4 pt-2">
                <div className="mx-3">
                  <h3 className="text-xl font-semibold">Bakery</h3>
                  <p className="text-sm font-light">Chắt lọc tinh hoa, nâng niu giá trị thực</p>
                  <div className=" flex justify-between">
                    <div className="mt-2 flex gap-1">
                      <svg
                        class="h-4 w-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        class="h-4 w-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        class="h-4 w-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        class="h-4 w-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        class="h-4 w-4 text-yellow-300"
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
                  <div className="flex justify-between mt-2 gap-2 text-xs font-semibold">
                    <a href="#" className="text-center rounded basis-1/2 bg-primary px-4 py-[6px] text-slate-100">
                      Buy Now
                    </a>
                    <a href="#" className="text-center rounded basis-1/2 bg-white px-4 py-[6px] text-slate-500">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default DetailedCake;
