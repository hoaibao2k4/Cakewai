import Home from "../pages/Home";
import Contact from "../pages/Contact";

const publicRoute = [
  { path: "/", component: Home },
  { path: "/contact", component: Contact },
];

const privateRoute = [];

export { publicRoute, privateRoute };
