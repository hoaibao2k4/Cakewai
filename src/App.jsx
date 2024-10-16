import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoute } from "./routes/route";
import DefaultLayout from "./components/Layouts/DefaultLayout";
import { Fragment } from "react";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoute.map((route, index) => {
            let Layout = DefaultLayout;
            let Page = route.component;
            if (route.layout === null) {
              Layout = Fragment;
            }
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
