import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function SignInForm() {
  const [hidden, setHidden] = useState(true);

  const hiddenPassword = () => {
    setHidden((prev) => !prev);
  };

  return (
    <div className="absolute right-20 top-[10%] h-3/4 w-4/12 rounded-3xl bg-gray-100">
      <div className="">
        <h2 className="my-4 text-center text-3xl font-bold">Login</h2>
        <p className="my-2 mb-4 text-center text-base font-normal">Login below to access your account </p>
        <form action="" className="mx-6 flex flex-col items-center">
          <div class="relative my-4">
            <input
              type="Email"
              name="email"
              id="email"
              class="peer block w-[20rem] appearance-none rounded-lg border border-gray-300 bg-transparent px-4 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-blue-500"
              placeholder=" "
              tabIndex={1}
            />
            <label
              for="email"
              class="absolute start-1 top-2 z-0 origin-[0] -translate-y-4 scale-75 transform bg-gray-100 px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
            >
              Email
            </label>
          </div>
          <div class="relative my-4">
            <input
              type="Password"
              name="password"
              id="password"
              class="peer block w-[20rem] appearance-none rounded-lg border border-gray-300 bg-transparent px-4 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-blue-500"
              placeholder=" "
              tabIndex={2}
            />

            <label
              for="password"
              class="absolute start-1 top-2 z-0 flex origin-[0] -translate-y-4 scale-75 transform items-center justify-between bg-gray-100 px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
            >
              Password
            </label>
            <i
              className="absolute right-2 top-1/2 mx-1 -translate-y-1/2 cursor-pointer hover:text-slate-900"
              onClick={() => hiddenPassword()}
            >
              {hidden === true ? <FaEyeSlash className='text-slate-500'/> : <FaEye />}
            </i>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignInForm;
