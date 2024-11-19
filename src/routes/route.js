import Home from "../pages/Home";
import GenImage from "../pages/Image Generator";
import About from "../pages/About/about";
import News from "../pages/News";
import Category from "../pages/Categories/category";
import Auth from "~/pages/authentication/auth";
import Policy from "~/pages/Policy";
import DetailedCake from "~/components/Layouts/components/DetailedCake";
import Condition from "~/pages/Condition";
import Cart from "~/components/Layouts/components/Cart";
const publicRoute = [
  { path: "/", component: Home },
  { path: "/generator", component: GenImage },
  { path: "/about", component: About},
  { path: "/news", component: News},
  { path: "/category", component: Category},
  { path: "/auth", component: Auth},
  { path: "/policy", component: Policy},
  { path: "/detailed", component: DetailedCake},
  { path: "/condition", component: Condition},
  { path: "/cart", component: Cart },
];

const privateRoute = [];

export { publicRoute, privateRoute };
