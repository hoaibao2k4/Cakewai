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
import LogoutModal from '../components/Modal/LogoutModal';
import OrderModal from '../components/Modal/OrderModal';

export const AddToCartContext = createContext();

function DefaultLayout({ children }) {
  const [showCart, setShowCart] = useState(false);
  const [cartContent, setCartContent] = useState(null);
  const [successPopup, setSuccessPopup] = useState(false);
  const [isExpiry, setIsExpiry] = useState(false)
  const [isLogout, setIsLogout] = useState(false)
  const [isOrder, setIsOrder] = useState(false)
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
    setTimeout(() => setSuccessPopup(false), 2000);
  };

  useEffect(() => {
    if (user && user.refresh_token) {
      const decoded = jwtDecode(user.refresh_token);
      if (decoded.exp) {
        const expirationTime = decoded.exp * 1000;
        const currentTime = Date.now();
        const timeRemaining = expirationTime - currentTime;

        if (timeRemaining > 0) {
          setTimeout(() => {
            setIsExpiry(true); 
          }, timeRemaining);
        } else {
          dispatch(logOutUser(dispatch, user?.refresh_token, navigate));
        }
      }
    }
  }, [user, dispatch]);

  return (
    <div className="wrapper w-screen-xl">
      <AddToCartContext.Provider value={{ handleAddToCartPopup, triggerSuccessPopup, setIsLogout, setIsOrder }}>
        <Header />
        <div>{children}</div>
        <Footer />

        {/* Popup thêm vào giỏ hàng */}
        {showCart && <AddToCart content={cartContent} close={closeCart} />}

        {/* Popup thành công */}
        {successPopup && <SuccessPopup />}

        {isExpiry && <ExpiryModal isExpiry={setIsExpiry}/>}

        {isLogout && <LogoutModal isLogout={setIsLogout}/>}

        {isOrder && <OrderModal isOrder={setIsOrder}/>}
      </AddToCartContext.Provider>
    </div>
  );
}

export default DefaultLayout;
