import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { decreaseItem, increaseItem } from '~/redux/cartSlice';

function ListItems({ list }) {
    const dispatch = useDispatch()
  return (
    <div>
      {list?.map((item, index) => (
        <div key={index}>
          <div className="flex gap-6">
            <img src={item.image_link} alt="" className="h-16 w-16" />
            <div className="flex flex-col justify-center">
              <h3 className="text-xl">{item.product_name}</h3>
              <span className="text-lg">{item.product_variant.variant_features}</span>
            </div>
          </div>
          <div className="mt-5 flex items-center justify-between">
            <div className="flex">
              <button onClick={() => dispatch(decreaseItem(item))} 
              className="h-8 w-8 rounded-bl-lg rounded-tl-lg border border-primary">-</button>
              <input
                className="h-8 w-8 border-b border-t border-primary text-center text-sm"
                type="text"
                value={item.quantity}
                onChange={e => e.target.quantity}
                
              />
              <button onClick={() => dispatch(increaseItem(item))}
              className="h-8 w-8 rounded-br-lg rounded-tr-lg border border-primary">+</button>
            </div>
            <span className="text-base font-normal">
              {'Đơn giá: '+item.product_variant.price.toLocaleString('vi-VN') + ' VND'}
            </span>
          </div>
          <hr className="my-6" />
        </div>
      ))}
      <div className='pb-10'>
        <Link to="/cart">
          <button className="float-right mx-2 h-10 w-28 rounded-xl bg-third hover:text-slate-50">Xem giỏ hàng</button>
        </Link>
      </div>
    </div>
  );
}

export default ListItems;
