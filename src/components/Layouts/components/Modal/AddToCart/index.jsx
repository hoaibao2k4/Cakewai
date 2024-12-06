import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '~/redux/cartSlice';
import { CloseIcon } from '~/assets/icons';
function AddToCart({ content, close }) {
  const [selected, setSelected] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const selectVariant = (value) => {
    setSelected(value);
  };
  const handleAddToCart = () => {
    if (!selected) {
      alert('Vui lòng chọn kích thước')
      return;
    }
    dispatch(
      addToCart({
        ...content,
        product_variant: selected,
        quantity: quantity,
      }),
    );
    close(false);
  };
  return (
    <div className="fixed inset-0 z-[1002] flex items-center justify-center bg-black bg-opacity-40">
      <div className="relative flex h-[300px] w-[600px] rounded-xl bg-slate-50">
        <img src={content.image_link} alt="" className="m-4 h-[200px] w-[200px] rounded-xl" />
        <div className="flex flex-col justify-center">
          <h2 className="pb-1 text-2xl font-semibold capitalize">{content.product_name}</h2>
          <span className="text-xl font-medium text-primary my-1">
            {selected ? selected.price.toLocaleString('vi-VN') + ' VND' : 'Vui lòng chọn kích thước'}
          </span>
          <h4 className='my-1'>Kích thước</h4>
          <div className="flex items-center gap-4">
            {content?.product_variant &&
              content?.product_variant?.map((variant, index) => (
                <button
                  key={index}
                  onClick={() => selectVariant(variant)}
                  className={`h-10 w-[72px] rounded-lg border text-center leading-10 ${selected === variant ? 'bg-secondary' : 'bg-slate-100'}`}
                >
                  {variant.variant_features}
                </button>
              ))}
          </div>
          <h4 className="my-4 text-xl font-semibold mt-6">Số lượng</h4>
          <div className="flex items-center gap-5">
            <div>
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
                  onChange={e => e.target.quantity}
                  className="h-10 w-10 border-b border-t border-primary text-center bg-slate-50"
                />
                <button
                  className="h-10 w-10 rounded-br-lg rounded-tr-lg border border-primary"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <div>
              <button
                onClick={handleAddToCart}
                className="h-[40px] w-[180px] rounded-lg border border-primary bg-primary text-lg font-semibold text-slate-50 hover:bg-slate-50 hover:text-primary"
              >
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
        <CloseIcon className='absolute top-3 right-4 cursor-pointer' onClick={() =>close(true)}/>
      </div>
    </div>
  );
}

export default AddToCart;
