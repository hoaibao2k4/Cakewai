import { CloseIcon } from '~/assets/icons';
import { removeCartItem, updateCartItem } from '~/api/apiCart';
import { removeFromCart } from '~/redux/cartSlice';
import { createInstance } from '~/redux/interceptors';
import { loginSuccess } from '~/redux/authSlice';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
function CartItem({ item, index }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.login.currentUser);
  const [quantity, setQuantity] = useState(item.buy_quantity);
  let instance = createInstance(user, dispatch, loginSuccess);

  const handleRemoveItem = async (item) => {
    dispatch(removeFromCart(item));
    toast.success('Xóa thành công!', {
      position: 'bottom-right',
      onClose: 3000
    })
    await removeCartItem(user?.access_token, instance, item.product_id, item.variant);
  };

  const handleUpdate = async (item) => {
    if (item.buy_quantity !== quantity) {
      const updatedQuantity = quantity;

      // Gọi API trước
      const updatedItem = {
        product_id: item.product_id,
        variant: item.variant,
        quantity: updatedQuantity,
      };

      item = {
        ...item,
        buy_quantity: updatedQuantity,
      };
      const result = await updateCartItem(user.access_token, instance, item);
      if (result) {
        dispatch({
          type: 'cart/updateItem',
          payload: updatedItem,
        });
      } else {
        console.error('Failed to update cart item');
      }
    }
  };

  useEffect(() => {
    if (quantity !== item.buy_quantity)
      setQuantity(item.buy_quantity)
  }, [item.buy_quantity])
  return (
    <tr key={index} className="items-center">
      <td className="text-center align-middle">
        <CloseIcon className="hover:cursor-pointer" onClick={() => handleRemoveItem(item)} />
      </td>
      <td className="m-[20px] flex items-center gap-[20px] space-x-4 text-center align-middle">
        <div className="flex-shrink-0">
          <img src={item.image_link} alt="" width={180} height={180} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name-of-cake" className="text-center">
            {item?.name}
          </label>
          <label htmlFor="name-of-cake" className="text-left">
            {item.variant !== 'one-variant' ? item.variant : ''}
          </label>
        </div>
      </td>
      <td className="text-center align-middle text-[20px] text-primary">
        {item?.price && item?.price.toLocaleString('vi-VN') + ' VND'}
      </td>
      <td>
        <div className="flex items-center justify-center">
          <button
            className="h-11 w-11 rounded-bl-lg rounded-tl-lg border border-primary"
            onClick={() => setQuantity(Math.max(quantity - 1, 1))}
            onMouseLeave={() => handleUpdate(item)}
          >
            -
          </button>
          <input
            type="text"
            value={quantity}
            onChange={(e) => e.target.value}
            className="h-11 w-11 border-b border-t border-primary text-center"
            disabled
          />
          <button
            className="h-11 w-11 rounded-br-lg rounded-tr-lg border border-primary"
            onClick={() => setQuantity(Math.max(1, quantity + 1))}
            onMouseLeave={() => handleUpdate(item)}
          >
            +
          </button>
        </div>
      </td>
      <td className="text-center align-middle text-[20px] text-primary">
        {(item.buy_quantity * item?.price).toLocaleString('vi-VN') + ' VND'}
      </td>
    </tr>
  );
}

export default CartItem;
