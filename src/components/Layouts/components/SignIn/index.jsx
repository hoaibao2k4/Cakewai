import { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { GoogleIcon } from '~/assets/icons';
import { loginUser } from '~/redux/apiRequest';
import { BE_BASE_URL } from '~/services/axios';
function SignInForm() {
  const [hidden, setHidden] = useState(true);
  // const [email, setEmail] = useState('');
  // const [emailError, setEmailError] = useState('');
  // const [isSubmitted, setIsSubmitted] = useState(false);
 

  const hiddenPassword = () => {
    setHidden((prev) => !prev);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      email: email,
      password: password,
    };
    loginUser(dispatch, newUser, navigate);
  };

  const handleGoogleLogin = () => {
    window.location.href = `${BE_BASE_URL}/api/public/google/login`;
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      return 'Email không được để trống';
    } else if (!emailRegex.test(value)) {
      return 'Hãy nhập Email';
    }
    return ''; 
  };
  const handleLogin = (e) => {
    setIsSubmitted(true);

    let isValid = true;

    const emailValidationError = validateEmail(email);
    setEmailError(emailValidationError); 
    if(emailValidationError){
      isValid = false;
    }

    if(isValid){
      handleSubmit(e)
    }
  };
  const location = useLocation()
  useEffect(() => {
    if (window.innerWidth >= 1024)
    window.scrollTo({
      top: 93,
      behavior: 'smooth'
    })
  },[location])
  return (
    
    <div className=" flex flex-col justify-center items-center   min-h-[calc(100vh-20rem)] md:min-h-[calc(100vh-30rem)] lg:min-h-[calc(100vh-35rem)] py-2 md:py-4 lg:py-8  lg:justify-start lg:absolute top-0 left-0 right-0 bottom-0 "> 
    <div className="absolute top-1/2 transform -translate-y-1/2  md:absolute md:top-1/2  lg:absolute lg:right-20 lg:top-1/2  flex flex-col items-center justify-center  sm:w-6.5/12  md:w-6/12 lg:w-4/12  rounded-3xl bg-gray-100 p-6 shadow-md transition-all duration-500   ml-auto  "  >
        <h2 className="my-4 text-center text-3xl font-semibold">Đăng nhập</h2>
        <p className="my-2 mb-4 text-center text-sm font-normal">Đăng nhập bên dưới để truy cập tài khoản của bạn </p>
        <form action="" onSubmit={handleLogin} className="flex flex-col items-center w-full px-4">
        <div className="relative my-3">
            <input
              type="text"
              name="email"
              id="email"
              className={`peer block w-[20rem] appearance-none rounded-lg border ${
                emailError ? 'border-red-500' : 'border-gray-300'
              } bg-transparent px-4 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0`}              
              placeholder=" "
              tabIndex={2}
              value={email}
              onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError) setEmailError(''); 
                }
              }
            />
            <label
              htmlFor="email"
              className={`absolute start-1 top-2 z-0 origin-[0] -translate-y-4 scale-75 transform bg-gray-100 px-2 text-sm ${
                emailError ? 'text-red-500' : 'text-gray-500'
              } duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4`}
             >
              Email
            </label>
            {emailError && (
              <p className="absolute -top-5 left-0 text-xs text-red-500 mb-1">
                * {emailError}
              </p>
            )}
          </div>
          <div className="relative my-3">
            <input
              type={hidden ? 'password' : 'text'}
              name="password"
              id="password"
              className="peer block w-[20rem] appearance-none rounded-lg border border-gray-300 bg-transparent px-4 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-blue-500"
              placeholder=" "
              onChange={(e) => setPassword(e.target.value)}
              tabIndex={2}
              
            />

            <label
              htmlFor="password"
              className="absolute start-1 top-2 z-0 flex origin-[0] -translate-y-4 scale-75 transform items-center justify-between bg-gray-100 px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
            >
              Mật khẩu
            </label>
            <i
              className="absolute right-2 top-1/2 mx-1 -translate-y-1/2 cursor-pointer hover:text-slate-900"
              onClick={() => hiddenPassword()}
            >
              {hidden === true ? <FaEyeSlash className="text-slate-500" /> : <FaEye />}
            </i>
            
          </div>
          <div className="relative flex w-full max-w-[20rem] justify-between text-sm font-light">
            <div className="flex items-center gap-1">
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">Nhớ mật khẩu</label>
            </div>
            <a href="/email/recovery" className="text-slate-600 hover:text-black hover:underline">
              Quên mật khẩu?
            </a>
          </div>
          <div className="my-4 w-[20rem] rounded-xl bg-primary text-center">
            <button type="submit" className="font-n h-10 text-lg text-slate-100 w-full">
              Đăng nhập
            </button>
          </div>
        </form>
        <div className="grid w-full grid-cols-3 items-center text-gray-500">
          <hr className="border-gray-800" />
          <p className="text-center">Hoặc</p>
          <hr className="border-gray-800" />
        </div>
        <button
          onClick={handleGoogleLogin}
          className="my-2 flex w-full items-center justify-center rounded-xl border bg-white py-2"
        >
         <GoogleIcon className='mr-2'/>
          Đăng nhập với Google
        </button>
        <div className="flex w-full justify-center gap-1 pt-2 text-base font-light">
          <p>Chưa có tài khoản?</p>
          <a href="/auth?mode=signup" className="hover:text-blue-700">
            Đăng kí
          </a>
        </div>
    </div>
    </div>
    
  );
}

export default SignInForm;