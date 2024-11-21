import Slider from '~/components/Layouts/components/Slider';
import Seller from '~/components/Layouts/components/Seller';
import Blog from '~/components/Layouts/components/Blog';
import { GoogleCallBack } from '~/components/Layouts/components/GoogleCallBack/GoogleCallBack';

function Home() {
  GoogleCallBack()
  return (
    <>
      <Slider />
      <Seller />
      <Blog />
    </>
  );
}

export default Home;
