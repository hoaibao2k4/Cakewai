import Slider from '~/components/Layouts/components/Slider';
import Seller from '~/components/Layouts/components/Seller';
import Blog from '~/components/Layouts/components/Blog';
import { GoogleCallBack } from '~/components/Layouts/components/GoogleCallBack/GoogleCallBack';
import { useLocation } from 'react-router-dom';

function Home() {
  GoogleCallBack()
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const category = searchParams.get('mode') || 'default'
  return (
    <>
      <Slider />
      <Seller params={category} />
      <Blog />
    </>
  );
}

export default Home;
