import ClaAndCond from "~/components/Layouts/components/ClaAndCond";
import { useLocation } from "react-router-dom";


function Condition(){
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const condition = searchParams.get("mode") || "default";

    const renderTypeOfPolicy = () => {
        switch (condition) {
          case "condition":
            return <ClaAndCond />;
          default:
            return <h1>Page not found 404</h1>;
        }
      };
    
      return <div>{renderTypeOfPolicy()}</div>;
}

export default Condition