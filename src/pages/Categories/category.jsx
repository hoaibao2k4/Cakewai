import { useLocation } from "react-router-dom";
import Categories from "~/components/Layouts/components/Categories";
import Birthday from "~/components/Layouts/components/Categories/Birthday";

function Category() {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const category = searchParams.get('mode') || 'default'

  return <Categories params={category}/>
}

export default Category;
