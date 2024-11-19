import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function SignInForm() {
  const [hidden, setHidden] = useState(true);
  // const [email, setEmail] = useState('');
  // const [emailError, setEmailError] = useState('');
  // const [isSubmitted, setIsSubmitted] = useState(false);


  const hiddenPassword = () => {
    setHidden((prev) => !prev);
  };

  // const validateEmail = (value) => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!value) {
  //     return 'Email không được để trống';
  //   } else if (!emailRegex.test(value)) {
  //     return 'Hãy nhập Email';
  //   }
  //   return ''; 
  // };

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   setIsSubmitted(true);
    
  //   let isValid = true;

  //   const emailValidationError = validateEmail(email);
  //   setEmailError(emailValidationError);
  //   if (emailValidationError) {
  //     isValid = false;
  //   }

  //   if (isValid) {
  //     alert('Đăng nhập thành công');
  //   }
  // };
 
  return (
    <div className="absolute right-20 top-[10%] h-[80%] w-4/12 rounded-3xl bg-gray-100">
      <div className="mx-12">
        <h2 className="my-4 text-center text-3xl font-semibold">Login</h2>
        <p className="my-2 mb-4 text-center text-sm font-normal">Login below to access your account </p>
        <form action="" className="flex flex-col items-center">
          <div className="relative my-3">
            <input
              type="text"
              name="email"
              id="email"
              className='peer block w-[20rem] appearance-none rounded-lg border border-gray-300 bg-transparent px-4 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-blue-500'
              // className={`peer block w-[20rem] appearance-none rounded-lg border ${
              //   emailError ? 'border-red-500' : 'border-gray-300'
              // } bg-transparent px-4 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0`}              
              placeholder=" "
              tabIndex={1}
              // value={email}
              // onChange={(e) => {
              //     setEmail(e.target.value);
              //     if (emailError) setEmailError(''); 
              //   }
              // }            
            />
            <label
              htmlFor="email"
              className='absolute start-1 top-2 z-0 origin-[0] -translate-y-4 scale-75 transform bg-gray-100 px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500'
              // className={`absolute start-1 top-2 z-0 origin-[0] -translate-y-4 scale-75 transform bg-gray-100 px-2 text-sm ${
              //   emailError ? 'text-red-500' : 'text-gray-500'
              // } duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600`}
             >
              Email
            </label>
            {/* {emailError && (
              <p className="absolute -top-5 left-0 text-xs text-red-500 mb-1">
                * {emailError}
              </p>
            )} */}
          </div>
          <div className="relative my-3">
            <input
              type={hidden ? 'password' : 'text'}
              name="password"
              id="password"
              className="peer block w-[20rem] appearance-none rounded-lg border border-gray-300 bg-transparent px-4 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-blue-500"
              placeholder=" "
              tabIndex={2}
              
            />

            <label
              htmlFor="password"
              className="absolute start-1 top-2 z-0 flex origin-[0] -translate-y-4 scale-75 transform items-center justify-between bg-gray-100 px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
            >
              Password
            </label>
            <i
              className="absolute right-2 top-1/2 mx-1 -translate-y-1/2 cursor-pointer hover:text-slate-900"
              onClick={() => hiddenPassword()}
            >
              {hidden === true ? <FaEyeSlash className="text-slate-500" /> : <FaEye />}
            </i>
            
          </div>
          <div className="relative flex w-[20rem] justify-between text-sm font-light">
            <div className="flex items-center gap-1">
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">Remember me</label>
            </div>
            <a href="#" className="text-slate-600 hover:text-black hover:underline">
              Forgot Password?
            </a>
          </div>
          <div className="my-4 w-[20rem] rounded-xl bg-primary text-center">
            <button className="font-n h-10 text-lg text-slate-100">Login</button>
          </div>
        </form>
        <div className="grid w-full grid-cols-3 items-center text-gray-500">
          <hr className="border-gray-800" />
          <p className="text-center">Or</p>
          <hr className="border-gray-800" />
        </div>
        <button className=" flex justify-center items-center my-2 w-full rounded-xl border bg-white py-2">
          <svg xmlns="http://www.w3.org/2000/svg" className='mr-2' x="0px" y="0px" width="25px" height="25px" viewBox="0 0 48 48">
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            ></path>
            <path
              fill="#4CAF50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            ></path>
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
          </svg>
          Login with Google
        </button>
        <div className='text-base font-light flex w-full justify-center pt-2 gap-1'>
          <p>New user?</p>
          <a href="/auth?mode=signup" className=' hover:text-blue-700'>Register</a>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;
