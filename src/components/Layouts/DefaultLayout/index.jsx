import Header from "../components/Header";
import Footer from "../components/Footer";
function DefaultLayout({ children }) {
  return (
    <div className="wrapper">
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
