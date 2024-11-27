import { Star } from "~/assets/icons";
function Card({image_link, product_name, description, price, index}) {
    return ( 
        <div key={index} className="img-scale h-[460px] w-[280px] m-5">
              <a href="#">
                <img src={image_link} alt="" className="h-[280px] w-[280px] object-cover" />
              </a>
              <div className="rounded-b-xl bg-secondary pb-4 pt-2 h-[180px]">
                <div className="mx-3">
                  <h3 className="text-xl font-semibold h-[56px]">{product_name}</h3>
                  <p className="line-clamp-2 text-sm font-light h-10">{description}</p>
                  <div className="flex justify-between">
                    <div className="mt-2 flex gap-1">
                        {Array(5).fill(null).map((_, index) => (
                           <Star key ={index}/>
                        ))}
                    </div>
                    <div className="absolute right-3 top-3 rounded bg-slate-400 px-2 py-1">
                      <span className="text-xl font-bold">230$</span>
                    </div>
                  </div>
                  <div className="mt-2 flex justify-between gap-2 text-xs font-semibold">
                    <a href="#" className="basis-2/5 rounded bg-primary px-4 py-[6px] text-center text-slate-100">
                      Xem chi tiết
                    </a>
                    <a href="#" className="basis-3/5 rounded bg-white px-4 py-[6px] text-center text-slate-500">
                      Thêm vào giỏ hàng
                    </a>
                  </div>
                </div>
              </div>
            </div>
     );
}

export default Card;