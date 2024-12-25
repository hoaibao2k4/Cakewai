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
import { toast } from 'react-toastify';
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
    if (!user) {
      navigate('/auth?mode=signin');
      return;
    }
  
    let variant;
    
    if (cake.product_variant?.length > 1) {
      if (!selected) {
        toast.info('Vui lòng chọn kích thước!', {
          position: 'bottom-right',
          autoClose: 3000,
        });
        return;
      }
      variant = selected;
    } else {
      variant = cake.product_variant[0];
    }
  
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
    try {
      await addCartItem(user.access_token, instance, newItem);
      triggerSuccessPopup();
    } catch (error) {
      console.error('Lỗi khi thêm vào giỏ hàng:', error);
    }
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
    } else navigate('/auth?mode=signin');
  };
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
        <div className="flex items-center py-4 text-primary">
          <div className="text-sm capitalize lg:text-base">
            <NavLink to="/">Trang chủ </NavLink>
            <span>&gt;&gt;</span>
            <NavLink to="/category"> Menu Bánh </NavLink>
            <span>&gt;&gt;</span>
            <NavLink to="/birthday-cake"> {categoryName} </NavLink>
            <span>&gt;&gt;</span>
            <NavLink to="/detailed"> {cake.product_name} </NavLink>
          </div>
        </div>
        <div className="my-10 flex flex-col gap-5 md:flex-row">
          <img
            src={cake.image_link}
            alt={cake.product_name}
            className="rounded-xl md:h-[350px] md:w-[350px] lg:h-[450px] lg:w-[450px]"
          />
          <div className="flex flex-col justify-center">
            <h2 className="pb-4 text-4xl font-bold capitalize">{cake.product_name}</h2>
            <span className={`text-xl font-semibold text-primary md:text-2xl lg:text-3xl`}>
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
                className="h-[40px] w-[220px] rounded-lg border border-primary font-semibold text-primary md:h-[40px] md:w-[180px] md:text-lg lg:h-[65px] lg:w-[260px] lg:text-2xl"
              >
                Thêm vào giỏ hàng
              </button>

              <button
                onClick={() => handleBuyNow(cake)}
                className="h-[40px] w-[220px] rounded-lg border bg-primary font-semibold text-slate-100 md:h-[40px] md:w-[180px] md:text-lg lg:h-[65px] lg:w-[260px] lg:text-2xl"
              >
                Mua ngay
              </button>
            </div>
          </div>
        </div>
        <h4 className="text-2xl font-semibold text-primary">Mô tả</h4>
        <p className="text-md my-5 font-normal lg:text-xl">{cake.description}</p>
        <h2 className="my-5 text-center text-2xl font-bold leading-[48px] text-primary lg:text-[40px]">
          Sản phẩm tương tự
        </h2>
        <div className="lg:grid-custom-3 md:grid-custom-2 grid-custom-1 grid w-full justify-between">
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
