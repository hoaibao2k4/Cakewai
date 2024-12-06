import { CloseIcon } from '~/assets/icons';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseItem, increaseItem, removeFromCart } from '~/redux/cartSlice';
import { selectCartTotal } from '~/redux/selectors';

const Cart = () => {
  const { list, total } = useSelector((state) => state.cart);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch()
  console.log(list)
  useEffect(() => {
    if (list.length > 0) {
        setShow(true);
    }
    else setShow(false);
  }, [list.length]);
  const totalAmount = useSelector(selectCartTotal)
  return (
    <>
      <div className="mt-16 w-full bg-white">
        <div className="mx-[5rem]">
          <div className="flex h-11 items-center text-primary">
            <div>
              <NavLink to="/">Trang chủ </NavLink>
              <span> &gt;&gt;</span>
              <span> Giỏ hàng </span>
            </div>
          </div>
          <h1 className="text-center text-5xl font-bold leading-[72px]">Giỏ hàng</h1>
          <p className="py-5 text-center text-sm font-normal leading-4">Nơi cập nhật những trạng thái tốt nhất</p>
          {show ? (
            <table className="mx-auto h-auto w-full">
              <thead className="px-[var(--Number,] pb-[0px)] items-center pt-[20px]">
                <tr className="items-center">
                  <th colSpan={2}>Thông tin chi tiết sản phẩm</th>
                  <th>Đơn giá</th>
                  <th>Số lượng</th>
                  <th>Tổng giá</th>
                </tr>
              </thead>
              <tbody className="px-[var(--Number,] pb-[0px)] w-[1106px] items-center pt-[20px]">
                {list?.map((item, index) => (
                  <tr key={index} className="items-center">
                    <td className="text-center align-middle">
                      <CloseIcon className="hover:cursor-pointer" onClick={() => dispatch(removeFromCart(item))}/>
                    </td>
                    <td className="m-[20px] flex items-center gap-[20px] space-x-4 text-center align-middle">
                      <div className="flex-shrink-0">
                        <img src={item.image_link} alt="" width={180} height={180} />
                      </div>
                      <div className='flex flex-col'>
                        <label htmlFor="name-of-cake" className="text-center">
                          {item?.product_name}
                        </label>
                        <label htmlFor="name-of-cake" className="text-left">
                          {item?.product_variant.variant_features}
                        </label>
                      </div>
                    </td>
                    <td className="text-center align-middle text-[20px] text-primary">
                      {item?.product_variant && item?.product_variant.price.toLocaleString('vi-VN') + ' VND'}
                    </td>
                    <td>
                      <div className="flex items-center justify-center">
                        <button
                          className="h-11 w-11 rounded-bl-lg rounded-tl-lg border border-primary"
                          onClick={() => 
                            dispatch(decreaseItem(item))
                          }
                        >
                          -
                        </button>
                        <input
                          type="text"
                          value={item.quantity}
                          onChange={e => e.target.quantity}
                          className="h-11 w-11 border-b border-t border-primary text-center"
                          disabled
                        />
                        <button
                          className="h-11 w-11 rounded-br-lg rounded-tr-lg border border-primary"
                          onClick={() => dispatch(increaseItem(item))}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="text-center align-middle text-[20px] text-primary">{((item.quantity * item?.product_variant.price).toLocaleString('vi-VN')+' VND')}</td>
                  </tr>
                ))}
              </tbody>
              {show && (
                <tfoot>
                  <tr>
                    <th colSpan={4} className="pr-[20px] text-right italic">
                      Tổng tiền
                    </th>
                    <th className="text-center align-middle text-[20px] text-primary">{totalAmount.toLocaleString('vi-VN')+' VND'}</th>
                  </tr>
                  <tr className="h-[120px]">
                    <th colSpan={3}></th>
                    <th colSpan={2}>
                      <div className="float-right pr-[60px]">
                        <button className="h-[56px] w-[270px] rounded-[8px] bg-primary text-white">Thanh toán</button>
                      </div>
                    </th>
                  </tr>
                </tfoot>
              )}
            </table>
          ) : (
            <h1 className="m-6 w-full text-center text-4xl font-semibold">Không có sản phẩm nào</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
