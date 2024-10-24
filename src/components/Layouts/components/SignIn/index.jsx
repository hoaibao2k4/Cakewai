function SignInForm() {
  return (
    <div className="absolute right-20 top-[10%] h-3/4 w-4/12 rounded-3xl bg-gray-100">
      <div>
        <h2 className="text-3xl font-bold text-center my-4">Login</h2>
        <p className="text-center my-2 font-normal text-base mb-10">Login below to access your account </p>
        <form action="" className="">
          <div class="relative ">
            <input
              type="email"
              name="email"
              class="border peer block w-full my-4 appearance-none rounded-lg border-gray-600 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:focus:border-blue-500"
              placeholder="Enter your email"
            />
            <label
              for="floating_outlined"
              class="absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform  px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-slate-100 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 peer-focus:dark:text-blue-500"
            >
              Email
            </label>
          </div>
          <div className="relative">
              <input
                type="password"
                class="border peer block w-full my-4 appearance-none rounded-lg border-primary bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                placeholder="Enter your password"
              />
              <label
                for="floating_outlined"
                class="absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
              >
                Password
              </label>
            </div>
            
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default SignInForm;
