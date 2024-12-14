
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCartTotal } from '~/redux/selectors';
import CartItem from './CartItem';

const Cart = () => {
  const { list } = useSelector((state) => state.cart);
  const [show, setShow] = useState(false);
  const totalAmount = useSelector(selectCartTotal)
  const navigate = useNavigate()

  useEffect(() => {
    if (list.length > 0) {
        setShow(true);
    }
    else setShow(false);
  }, [list.length]);
  
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
                  <CartItem item={item} key={index}/>
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
                        <button onClick={() => navigate('/payment')} className="h-[56px] w-[270px] rounded-[8px] bg-primary text-white">Thanh toán</button>
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
