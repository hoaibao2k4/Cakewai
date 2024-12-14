import Header from '../components/Header';
import Footer from '../components/Footer';
import AddToCart from '../components/Modal/AddToCart';
import { useState, useCallback, createContext, useEffect } from 'react';
import { SuccessPopup } from '../components/Modal/SuccessPopup';
import { useDispatch, useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import ExpiryModal from '../components/Modal/Expiry';
import { logOutUser } from '~/redux/apiRequest';
import { useNavigate } from 'react-router-dom';

export const AddToCartContext = createContext();

function DefaultLayout({ children }) {
  const [showCart, setShowCart] = useState(false);
  const [cartContent, setCartContent] = useState(null);
  const [successPopup, setSuccessPopup] = useState(false);
  const [isExpiry, setIsExpiry] = useState(false)
  const user = useSelector(state => state.auth.login.currentUser)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleAddToCartPopup = useCallback((cake) => {
    setCartContent(cake);
    setShowCart(true);
  }, []);

  const closeCart = (isClose) => {
    if (!isClose) {
      setCartContent(null);
      setShowCart(false);
      triggerSuccessPopup();
    }
    setCartContent(null);
    setShowCart(false);
  };

  const triggerSuccessPopup = () => {
    setSuccessPopup(true);
    setTimeout(() => setSuccessPopup(false), 2000); // Tự động tắt sau 2 giây
  };

  useEffect(() => {
    if (user && user.refresh_token) {
      const decoded = jwtDecode(user.refresh_token); // Giải mã refresh token
      if (decoded.exp) {
        // Tính toán thời gian còn lại
        const expirationTime = decoded.exp * 1000;
        const currentTime = Date.now();
        const timeRemaining = expirationTime - currentTime;

        if (timeRemaining > 0) {
          setTimeout(() => {
            setIsExpiry(true); // Hiển thị modal hết hạn khi token hết hạn
          }, timeRemaining); // Set timeout cho khi token hết hạn
        } else {
          // Nếu token đã hết hạn ngay khi tải trang, tự động logout
          dispatch(logOutUser(dispatch, user?.refresh_token, navigate));
        }
      }
    }
  }, [user, dispatch]);


  

  return (
    <div className="wrapper w-screen-xl">
      <AddToCartContext.Provider value={{ handleAddToCartPopup, triggerSuccessPopup }}>
        <Header />
        <div>{children}</div>
        <Footer />

        {/* Popup thêm vào giỏ hàng */}
        {showCart && <AddToCart content={cartContent} close={closeCart} />}

        {/* Popup thành công */}
        {successPopup && <SuccessPopup />}

        {isExpiry && <ExpiryModal isExpiry={setIsExpiry}/>}
      </AddToCartContext.Provider>
    </div>
  );
}

export default DefaultLayout;
