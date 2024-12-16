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
import AccountPage from "~/pages/Account";
import AdminDashboard from "~/pages/AdminDashboard";
import AdminLogin from "~/pages/AdminLogin";
import AdminProduct from "~/pages/AdminProduct/product";
import AdminOrder from "~/pages/AdminOrder/order";
import AdminCustomer from "~/pages/AdminCustomer/customer";


const publicRoute = [
  { path: "/", component: Home },
  { path: "/generator", component: GenImage },
  { path: "/about", component: About },
  { path: "/news", component: News },
  { path: "/category", component: Category },
  { path: "/auth", component: Auth },
  { path: "/policy", component: Policy },
  { path: "/detailed/:id", component: DetailedCake },
  { path: "/condition", component: Condition },
  { path: "/cart", component: Cart },
  { path: "/admin/login", component: AdminLogin, layout: null },
  ...[
    "/account",
    "/account_profile",
    "/account_address",
    "/account_change_password",
    "/account_orders",
  ].map(path => ({ path, component: AccountPage })),
]

const privateRoute = [
  { path: "/cart", component: Cart },
  { path: "/admin/dashboard", component: AdminDashboard },
  { path: "/admin/product_management", component: AdminProduct },
  { path: "/admin/order_management", component: AdminOrder },
  { path: "/admin/register_customer", component: AdminCustomer },
];

export { publicRoute, privateRoute };
