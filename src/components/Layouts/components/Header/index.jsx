function Header() {
  return (
    <header className="fixed left-1/2 top-0 z-10 h-16 w-full max-w-screen-xl -translate-x-1/2 transform bg-primary">
      <div className="mx-20 flex h-full items-center justify-between text-white">
        <h2 className="font-semi text-2xl tracking-widest">Cakewai</h2>
        <ul className="flex gap-16 text-base uppercase">
          <li className="menu-navbar">
            <a href="/">Home</a>
          </li>
          <li className="menu-navbar group">
            <a href="/category" className="relative">
              Categories
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="icon mx-0.5 inline-block size-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </i>
            </a>
            <div class="absolute left-0 top-full h-4 w-full cursor-default bg-transparent"></div>
            <ul className="absolute left-0 top-11 z-10 hidden w-max rounded-lg bg-[#fefefdd1] text-sm normal-case group-hover:block">
              <li className="px-2 py-2 text-[#444444] hover:bg-primary hover:text-slate-100">
                <a href="/" className="">
                  Birthday Cake
                </a>
              </li>
              <li className="px-2 py-2 text-[#444444] hover:bg-primary hover:text-slate-100">
                <a href="/" className="">
                  Traditional Cake
                </a>
              </li>
              <li className="px-2 py-2 text-[#444444] hover:bg-primary hover:text-slate-100">
                <a href="/" className="">
                  Cookie & Mini cake
                </a>
              </li>
              <li className="px-2 py-2 text-[#444444] hover:bg-primary hover:text-slate-100">
                <a href="/" className="">
                  Bread & others
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-navbar">
            <a href="/discount">Discount</a>
          </li>
          <li className="menu-navbar">
            <a href="/generator">AI</a>
          </li>
          <li className="menu-navbar">
            <a href="/about">About us</a>
          </li>
        </ul>
        <div className="flex gap-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}

export default Header;
