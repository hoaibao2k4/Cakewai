import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoute, privateRoute } from "./routes/route";
import DefaultLayout from "./components/Layouts/DefaultLayout";
import DashBoardLayout from "./components/Layouts/DashBoardLayout";
import PrivateRoute from "./Middleware";
import { Fragment } from "react";

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
            const Layout = route.layout === null ? Fragment : DashBoardLayout;
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
      </div>
    </Router>
  );
}

export default App;
