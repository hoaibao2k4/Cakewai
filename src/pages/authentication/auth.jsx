import { useLocation, useNavigate } from "react-router-dom";
import SignInForm from "~/components/Layouts/components/SignIn";
import SignUpForm from "~/components/Layouts/components/SignUp";
import authImage from '~/assets/images/AuthImg/authImage.png';
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Auth() {
  const user = useSelector((state) => state.auth.login.currentUser);
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const mode = searchParams.get("mode") || "signup";

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  // Chỉ render nếu user chưa đăng nhập
  if (user) {
    return null; // Ngăn render form đăng nhập/đăng ký
  }

  return (
    <div
      style={{ backgroundImage: `url(${authImage})` }}
      className="bg-center bg-cover w-full relative mt-16 lg:pt-[55%] md:pt-[55%] pt-[65%]"
    >
      {mode === "signin" ? <SignInForm /> : <SignUpForm />}
    </div>
  );
}

export default Auth;
