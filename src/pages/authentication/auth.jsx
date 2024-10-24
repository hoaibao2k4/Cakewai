import { useLocation } from "react-router-dom";
import SignInForm from "~/components/Layouts/components/SignIn";
import SignUpForm from "~/components/Layouts/components/SignUp";
import authImage from '~/assets/images/AuthImg/authImage.png'

function Auth() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const mode = searchParams.get("mode") || "signup";

  return (
    <div style={{backgroundImage: `url(${authImage})`}} className="bg-center bg-cover w-full relative mt-16 pt-[50%]">
      {mode === "signin" ? <SignInForm /> : <SignUpForm />}
    </div>
  );
}

export default Auth;
