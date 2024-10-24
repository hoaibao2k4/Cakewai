import Home from "../pages/Home";
import GenImage from "../pages/Image Generator";
import About from "../pages/About/about";
import Discount from "../pages/Discount";
import Category from "../pages/Categories/category";
import Auth from "~/pages/authentication/auth";
import Policy from "~/pages/Policy";
const publicRoute = [
  { path: "/", component: Home },
  { path: "/generator", component: GenImage },
  { path: "/about", component: About},
  { path: "/discount", component: Discount},
  { path: "/category", component: Category},
  { path: "/auth", component: Auth},
  { path: "/policy", component: Policy},
];

const privateRoute = [];

export { publicRoute, privateRoute };
