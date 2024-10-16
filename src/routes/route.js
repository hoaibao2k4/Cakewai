import Home from "../pages/Home";
import GenImage from "../pages/Image Generator";
import About from "../pages/About/about";
import Discount from "../pages/Discount";
import Category from "../pages/Categories/category";
const publicRoute = [
  { path: "/", component: Home },
  { path: "/generator", component: GenImage },
  { path: "/about", component: About},
  { path: "/discount", component: Discount},
  { path: "/category", component: Category},
];

const privateRoute = [];

export { publicRoute, privateRoute };
