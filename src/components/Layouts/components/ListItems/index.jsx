import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateCartItem } from '~/api/apiCart';
import { loginSuccess } from '~/redux/authSlice';
import { createInstance } from '~/redux/interceptors';
import SubItem from './SubItem';
import { useState } from 'react';

function ListItems({ list }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state => state.auth.login.currentUser)
    let instance = createInstance(user, dispatch, loginSuccess)
    const [originalList, setOriginalList] = useState(list);
    const handleViewCart = async () => {
      try {
        const itemsToUpdate = list.filter((item, index) => item.buy_quantity !== originalList[index].buy_quantity);
        if (itemsToUpdate.length > 0) {
          await Promise.all(
            itemsToUpdate.map((item) => updateCartItem(user.access_token, instance, item))
          );
        }
        navigate('/cart');
      } catch (err) {
        console.error("Failed to update cart items", err);
      }
    }; 
  return (
    <div>
      {list?.map((item, index) => (
        <SubItem item={item} key={index}/>
      ))}
      <div className='pb-10'>
          <button onClick={handleViewCart} className="float-right mx-2 h-10 w-28 rounded-xl bg-third hover:text-slate-50">Xem giỏ hàng</button>
      </div>
    </div>
  );
}

export default ListItems;
