import PaymentPolicy from "~/components/Layouts/components/ComPolicy/PaymentPolicy";
import GeneralPolicy from "~/components/Layouts/components/ComPolicy/GeneralPolicy";
import DeliveryPolicy from "~/components/Layouts/components/ComPolicy/DeliveryPolicy";
import ReturnPolicy from "~/components/Layouts/components/ComPolicy/ReturnPolicy";
import SecurityPolicy from "~/components/Layouts/components/ComPolicy/SecurityPolicy";
import { useLocation } from "react-router-dom";
function Policy() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const policy = searchParams.get("mode") || "default";

  const renderTypeOfPolicy = () => {
    switch (policy) {
      case "payment":
        return <PaymentPolicy />;
      case "general":
        return <GeneralPolicy />;
      case "delivery":
        return <DeliveryPolicy />;
      case "security":
        return <SecurityPolicy />;
      case "return":
        return <ReturnPolicy />;
      default:
        return <h1>Page not found 404</h1>;
    }
  };

  return <div>{renderTypeOfPolicy()}</div>;
}

export default Policy;
