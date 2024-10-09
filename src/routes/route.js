import Home from "../pages/Home";
import GenImage from "../pages/Image Generator";

const publicRoute = [
  { path: "/", component: Home },
  { path: "/generator", component: GenImage },
];

const privateRoute = [];

export { publicRoute, privateRoute };
