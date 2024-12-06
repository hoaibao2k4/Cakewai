import Header from '../components/Header';
import Footer from '../components/Footer';
import AddToCart from '../components/Modal/AddToCart';
import { useState, useCallback, createContext } from 'react';
import { SuccessPopup } from '../components/Modal/SuccessPopup';

export const AddToCartContext = createContext();

function DefaultLayout({ children }) {
  const [showCart, setShowCart] = useState(false);
  const [cartContent, setCartContent] = useState(null);
  const [successPopup, setSuccessPopup] = useState(false);

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
      </AddToCartContext.Provider>
    </div>
  );
}

export default DefaultLayout;
