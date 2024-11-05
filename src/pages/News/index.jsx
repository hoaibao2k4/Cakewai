import Newsfeed from '~/components/Layouts/components/Newsfeed';
import Newsfeed1 from '~/components/Layouts/components/Newsfeed/News1';
import Newsfeed2 from '~/components/Layouts/components/Newsfeed/News2';
import Newsfeed3 from '~/components/Layouts/components/Newsfeed/News3';
import Newsfeed4 from '~/components/Layouts/components/Newsfeed/News4';
import Newsfeed5 from '~/components/Layouts/components/Newsfeed/News5';
import Newsfeed6 from '~/components/Layouts/components/Newsfeed/News6';
import { useLocation } from 'react-router-dom';
function News() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const news = searchParams.get('mode') || 'default';
  console.log(news)
  const renderNews = () => {
    switch (news) {
      case 'news1':
        return <Newsfeed1 />;
      case 'news2':
        return <Newsfeed2 />;
      case 'news3':
        return <Newsfeed3 />;
      case 'news4':
        return <Newsfeed4 />;
      case 'news5':
        return <Newsfeed5 />;
      case 'news6':
        return <Newsfeed6 />;
      default:
        return <Newsfeed />;
    }
  };
  return <div>{renderNews()}</div>;
}

export default News;
