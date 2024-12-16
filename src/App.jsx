import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoute, privateRoute } from "./routes/route";
import DefaultLayout from "./components/Layouts/DefaultLayout";
import PrivateRoute from "./Middleware";
import { Fragment } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public Routes */}
          {publicRoute.map((route, index) => {
            const Layout = route.layout === null ? Fragment : DefaultLayout;
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}

          {/* Private Routes */}
          {privateRoute.map((route, index) => {
            const Layout = route.layout === null ? Fragment : route.layout
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                <PrivateRoute>
                  <Layout>
                    <Page />
                  </Layout>
                </PrivateRoute>
                }
              />
            );
          })}
        </Routes>
        <ToastContainer/>
      </div>
    </Router>
  );
}

export default App;
