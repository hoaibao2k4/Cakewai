function Header() {
  return (
    <header className="mx-auto max-w-screen-lg px-9 py-6 text-base">
      <nav className="flex flex-row items-center justify-between">
        <div className="basis-1/6 cursor-pointer text-xl font-semibold">
          Coffee Style.
        </div>
        <ul className="flex basis-4/6 items-center justify-end gap-8 text-sm font-medium uppercase text-gray-500">
          <li className="menu-navbar">
            <a href="/">Home</a>
          </li>
          <li className="menu-navbar">
            <a href="/products">Our Products</a>
          </li>
          <li className="menu-navbar">
            <a href="/blog">Blog</a>
          </li>
          <li className="menu-navbar">
            <a href="/about">About</a>
          </li>
          <li className="menu-navbar">
            <a href="/contact">Contact</a>
          </li>
          <li className="menu-navbar">
            <a href="/guide">StyleGuild</a>
          </li>
        </ul>
        <div className="basis-1/6 text-center text-sm font-medium uppercase text-gray-500">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6 inline-block"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <span className=" mx-2">Cart</span>
            <span className="bg-orange-700 rounded-full text-black">10</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
