import { Star } from '~/assets/icons';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '~/redux/cartSlice';
import { AddToCartContext } from '~/components/Layouts/DefaultLayout';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCartItem } from '~/api/apiCart';
import { createInstance } from '~/redux/interceptors';
import { loginSuccess } from '~/redux/authSlice';
function Card({ image_link, product_name, description, price, index, id, categoryName, cake }) {
  const { handleAddToCartPopup, triggerSuccessPopup } = useContext(AddToCartContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.login.currentUser);
  let instance = createInstance(user, dispatch, loginSuccess)
  
  const handleAddToCart = async (cake) => {
    if (user) {
      if (cake?.product_variant.length > 1) handleAddToCartPopup(cake);
      else {
        const selectedVariant = cake.product_variant[0];
        const newItem = {
          product_id: cake._id,
          type_id: cake.product_type_id,
          name: cake.product_name,
          variant: selectedVariant.variant_features || 'one-variant',
          discount: selectedVariant.discount,
          price: selectedVariant.price,
          image_link: cake.image_link,
          buy_quantity: 1,
        };
        dispatch(addToCart(newItem));
        await addCartItem(user.access_token, instance, newItem);
        triggerSuccessPopup();
      }
      
    } else {
      navigate('/auth?mode=signin');
    }
  };
  
  return (
    <div key={index} className="img-scale m-5 h-[480px] w-[280px]">
      <Link to={`/detailed/${id}`} state={{ categoryName }}>
        <img src={image_link} alt="" className="h-[280px] w-[280px] object-cover" />
      </Link>
      <div className="h-[200px] rounded-b-xl bg-secondary pb-4 pt-2">
        <div className="mx-3">
          <Link to={`/detailed/${id}`} state={{ categoryName }}>
            <h3 className="h-[56px] text-xl font-semibold hover:text-slate-200">{product_name}</h3>
          </Link>
          <div className="w-full">
            <div className="flex justify-between">
              <div className="mt-2 flex gap-1">
                {Array(5)
                  .fill(null)
                  .map((_, index) => (
                    <Star key={index} />
                  ))}
              </div>
            </div>
            <p className="line-clamp-2 h-10 text-sm font-light">{description}</p>
          </div>
          <span className="text-base font-bold text-[#486645]">Giá: {Number(price).toLocaleString('vi-VN')} VND</span>
          <div className="mt-2 flex justify-between gap-2 text-xs font-semibold">
            <Link
              to={`/detailed/${id}`}
              state={{ categoryName }}
              className="basis-2/5 rounded bg-primary px-4 py-[6px] text-center text-slate-100"
            >
              Xem chi tiết
            </Link>
            <button
              onClick={() => handleAddToCart(cake)}
              className="basis-3/5 rounded bg-white px-4 py-[6px] text-center text-slate-500"
            >
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
