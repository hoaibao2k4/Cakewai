import { NavLink, useLocation } from 'react-router-dom';
import { Label, TextInput, Textarea } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartTotal } from '~/redux/selectors';
import { useContext, useState } from 'react';
import { createInstance } from '~/redux/interceptors';
import { loginSuccess } from '~/redux/authSlice';
import { createOrder } from '~/api/apiCart';
import { AddToCartContext } from '~/components/Layouts/DefaultLayout';
function Payment() {
  const location = useLocation();
  const { newItem } = location.state || {};
  const { list } = useSelector((state) => state.cart);
  const totalAmount = useSelector(selectCartTotal);
  const { currentUser } = useSelector((state) => state.auth.login);
  const [profile, setProfile] = useState(currentUser?.user)
  const [note, setNote] = useState('');
  const dispatch = useDispatch()
  const {setIsOrder} = useContext(AddToCartContext)

  let instance = createInstance(currentUser, dispatch, loginSuccess)
  

  const handleProfileChange = (e) => {
    const {name, value} = e.target
    setProfile((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
      e.preventDefault()
      const invoice = {
        name: profile.name,
        email: profile.email,
        address: profile.address.full_address,
        phone: profile.phone,
        notes: note,
        order_items: newItem ? [newItem] : list,
        service_type: 1,
      }
      console.log(invoice)
      try {
        const res = await createOrder(currentUser?.access_token, instance, invoice)
        console.log(res)
      }
      catch(err) {
        console.log(err)
      }
      setIsOrder(true);   
    }

  return (
    <div className="mb-10 mt-16 h-fit w-full">
      <div className="mx-[5rem]">
        <div className="flex h-11 items-center text-primary">
          <div className="capitalize">
            <NavLink to="/">Trang chủ </NavLink>
            <span>&gt;&gt;</span>
            <NavLink to="/category"> Menu Bánh </NavLink>
            {/* <span>&gt;&gt;</span>
            <NavLink to="/birthday-cake"> {categoryName} </NavLink>
            <span>&gt;&gt;</span>
            <NavLink to="/detailed"> {cake.product_name} </NavLink> */}
          </div>
        </div>
        <h1 className="text-center text-5xl font-bold leading-[72px]">Thanh toán</h1>
        <p className="text-center text-lg font-normal leading-[64px]">Cakewai - Mái ấm gia đình Việt</p>
        <div className="gap-4 lg:flex">
          <div className="basis-1/2">
            {/* Your name */}
            <div className="mb-2 block">
              <Label htmlFor="base" value="Họ và tên" />
            </div>
            <TextInput id="base" type="text" sizing="md" value={profile.name} name='name' onChange={handleProfileChange} />
            {/* Address */}
            <div className="my-2 block">
              <Label htmlFor="base" value="Địa chỉ" />
            </div>
            <TextInput id="base" type="text" sizing="md" value={profile.address.full_address} name='address' onChange={handleProfileChange}/>
            {/* Phone */}
            <div className="my-2 block">
              <Label htmlFor="base" value="Số điện thoại" />
            </div>
            <TextInput id="base" type="text" sizing="md" value={profile.phone} name='phone' onChange={handleProfileChange} />
            {/* Email */}
            <div className="my-2 block">
              <Label htmlFor="base" value="Email" />
            </div>
            <TextInput id="base" type="text" sizing="md" value={profile.email} name='email' onChange={handleProfileChange} />
            {/* Note */}
            <div className="my-2 block">
              <Label htmlFor="base" value="Ghi chú" />
            </div>
            <Textarea id="comment" placeholder="Để lại ghi chú..." required rows={4} value={note} name='note' onChange={e => setNote(e.target.value)} />
          </div>
          <div className="mt-8 basis-1/2 border border-black/50">
            <div className="mx-10 my-12">
              <div className="flex justify-between text-lg font-medium lg:text-xl">
                <h3>Sản phẩm</h3>
                <h3>Tạm tính</h3>
              </div>
              <hr className="mx-6 my-8 border-t-2 border-black" />
              {newItem ? (
                <div className="flex justify-between text-base font-light lg:text-lg">
                  <h3>
                    {newItem?.name} x <span>{newItem?.buy_quantity}</span>
                  </h3>
                  <span>{newItem?.price.toLocaleString('vi-VN') + ' VND'}</span>
                </div>
              ) : list.length > 0 ? (
                list?.map((item, index) => (
                  <div key={index} className="flex justify-between text-base font-light lg:text-lg">
                    <h3>
                      {item.name} x <span>{item.buy_quantity}</span>
                    </h3>
                    <span>{item.price.toLocaleString('vi-VN') + ' VND'}</span>
                  </div>
                ))
              ) : (
                <h3 className="text-center text-lg font-medium">Chưa có sản phầm</h3>
              )}

              <hr className="mx-6 my-8 border-t-2 border-black" />
              <div className="flex justify-between text-lg font-medium lg:text-xl">
                <h3>Tổng</h3>
                <span className="text-primary">{(newItem?.price * newItem?.buy_quantity || totalAmount).toLocaleString('vi-VN') + ' VND'}</span>
              </div>
              <p className="my-8 text-base font-light italic">
                Quý khách vui lòng thanh toán bằng tiền mặt khi nhận hàng!
              </p>
              <button
                onClick={handleSubmit}
                className="w-full rounded-lg bg-primary py-3 text-xl font-normal text-slate-100 hover:text-fourth"
              >
                Đặt hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
