import { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom';
import { getCake, getCakeById } from '~/api/apiCakes';
import Card from '../Card';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '~/redux/cartSlice';
import { AddToCartContext } from '../../DefaultLayout';
import { loginSuccess } from '~/redux/authSlice';
import { createInstance } from '~/redux/interceptors';
import { addCartItem } from '~/api/apiCart';
function DetailedCake() {
  const [cake, setCake] = useState({});
  const [alikeCake, setAlikeCake] = useState([]);
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(null);
  const { triggerSuccessPopup } = useContext(AddToCartContext);
  const user = useSelector((state) => state.auth.login.currentUser);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let instance = createInstance(user, dispatch, loginSuccess);

  const { categoryName } = location.state || {};

  useEffect(() => {
    if (id) fetchData();
  }, [id]);
  const fetchData = async () => {
    try {
      // Fetch cake by ID
      const result = await getCakeById(id);
      const cakeData = result.data;
      setCake(cakeData);
      console.log('Fetching OK');

      // Fetch similar cakes
      if (cakeData?.product_type_id) {
        const alikeResult = await getCake(cakeData.product_type_id);
        setAlikeCake(alikeResult.data);
      }
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };

  const handleAddToCart = async (cake) => {
    if (user) {
      const variant = selected ? selected : cake.product_variant[0];
      const newItem = {
        product_id: cake._id,
        type_id: cake.product_type_id,
        name: cake.product_name,
        variant: variant.variant_features,
        discount: variant.discount,
        price: variant.price,
        image_link: cake.image_link,
        buy_quantity: quantity,
      };
      dispatch(addToCart(newItem));
      await addCartItem(user.access_token, instance, newItem);
      triggerSuccessPopup();
    } else navigate('/auth?mode=signin');
  };

  const handleBuyNow = (cake) => {
    if (user) {
      const variant = selected ? selected : cake.product_variant[0];
      const newItem = {
        product_id: cake._id,
        type_id: cake.product_type_id,
        name: cake.product_name,
        variant: variant.variant_features,
        discount: variant.discount,
        price: variant.price,
        image_link: cake.image_link,
        buy_quantity: quantity,
      };
      navigate('/payment', { state: { newItem } });
    }
    else navigate('/auth?mode=signin');
  }
  const selectVariant = (value) => {
    setSelected(value);
  };
  const message =
    cake.product_variant && cake?.product_variant.length > 1
      ? 'Vui lòng chọn kích thước'
      : `${cake?.product_variant && cake?.product_variant[0].price.toLocaleString('vi-VN')} VND`;
  const size = cake.product_variant && cake?.product_variant.length > 1 ? 'Kích thước' : '';
  return (
    <div className="mt-16 w-full bg-white">
      <div className="mx-[5rem]">
        <div className="flex h-11 items-center text-primary">
          <div className="capitalize">
            <NavLink to="/">Trang chủ </NavLink>
            <span>&gt;&gt;</span>
            <NavLink to="/category"> Menu Bánh </NavLink>
            <span>&gt;&gt;</span>
            <NavLink to="/birthday-cake"> {categoryName} </NavLink>
            <span>&gt;&gt;</span>
            <NavLink to="/detailed"> {cake.product_name} </NavLink>
          </div>
        </div>
        <div className="my-10 flex gap-5">
          <img src={cake.image_link} alt={cake.product_name} className="h-[450px] w-[450px] rounded-xl" />
          <div className="flex flex-col justify-center">
            <h2 className="pb-4 text-4xl font-bold capitalize">{cake.product_name}</h2>
            <span className={`text-3xl font-semibold text-primary`}>
              {selected ? `${selected.price.toLocaleString('vi-VN')} VND` : message}
            </span>
            <h4 className={`my-4 text-2xl font-semibold text-black`}>{size} </h4>
            <div className={`flex items-center gap-4`}>
              {cake?.product_variant?.length > 1 &&
                cake.product_variant?.map(
                  (variant, index) =>
                    variant.variant_features && (
                      <button
                        key={index}
                        onClick={() => selectVariant(variant)}
                        className={`h-10 w-[72px] rounded-lg border text-center leading-10 ${selected === variant ? 'bg-secondary' : 'bg-slate-100'}`}
                      >
                        {variant.variant_features}
                      </button>
                    ),
                )}
            </div>
            <h4 className="my-4 text-2xl font-semibold">Số lượng</h4>
            <div className="flex">
              <button
                className="h-10 w-10 rounded-bl-lg rounded-tl-lg border border-primary"
                onClick={() => {
                  quantity === 1 ? setQuantity(quantity) : setQuantity(quantity - 1);
                }}
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                onChange={(e) => e.target.quantity}
                className="h-10 w-10 border-b border-t border-primary text-center"
              />
              <button
                className="h-10 w-10 rounded-br-lg rounded-tr-lg border border-primary"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            <div className="mt-10 flex gap-4">
              <button
                onClick={() => handleAddToCart(cake)}
                className="h-[65px] w-[260px] rounded-lg border border-primary text-2xl font-semibold text-primary"
              >
                Thêm vào giỏ hàng
              </button>
              
                <button onClick={() => handleBuyNow(cake)} className="h-[65px] w-[260px] rounded-lg border bg-primary text-2xl font-semibold text-slate-100">
                  Mua ngay
                </button>
            
            </div>
          </div>
        </div>
        <h4 className="text-2xl font-semibold text-primary">Mô tả</h4>
        <p className="my-5 text-xl font-normal">{cake.description}</p>
        <h2 className="my-5 text-center text-[40px] font-bold leading-[48px] text-primary">Sản phẩm tương tự</h2>
        <div className="grid-custom-3 grid w-full justify-between">
          {alikeCake.slice(1, 4).map((cake, index) => (
            <Card
              key={index}
              product_name={cake.product_name}
              description={cake.description}
              image_link={cake.image_link}
              id={cake._id}
              price={cake.product_variant[0].price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DetailedCake;
