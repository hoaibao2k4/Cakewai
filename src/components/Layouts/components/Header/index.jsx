import { useLocation, useNavigate } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
function Header() {
  const navigator = useNavigate();
  const handleLogin = () => {
    navigator('/auth?mode=signin');
  };
  const location = useLocation();
  const urls = ['/category', '/birthday-cake', '/tradition-cake', '/cookie', '/bread'];
  return (
    <header className="fixed top-0 z-10 h-16 w-full bg-slate-100">
      <div className="mx-20 flex h-full items-center justify-between text-primary">
        <Link to="/">
          <img src="./src/assets/images/logo.svg" alt="Cake with AI" className="mt-2" />
        </Link>
        <ul className="flex gap-16 text-base uppercase">
          <li className={location.pathname === '/' ? 'menu-active' : 'menu-navbar'}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={urls.includes(location.pathname) ? 'menu-active group' : 'menu-navbar group'}>
            <NavLink to="/category" className="relative">
              <span>Categories</span>
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="icon mx-0.5 inline-block size-5"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </i>
            </NavLink>

            <div class="absolute left-0 top-full h-4 w-full cursor-default bg-transparent"></div>
            <ul className="absolute left-0 top-10 z-10 hidden w-max rounded-lg bg-[#CAB6B6] text-sm normal-case group-hover:block">
              <li className="px-2 py-2 text-[#444444] hover:rounded-t-lg hover:bg-primary hover:text-slate-100">
                <NavLink to="/birthday-cake">Birthday Cake</NavLink>
              </li>
              <li className="px-2 py-2 text-[#444444] hover:bg-primary hover:text-slate-100">
                <NavLink to="/tradition">Traditional Cake</NavLink>
              </li>
              <li className="px-2 py-2 text-[#444444] hover:bg-primary hover:text-slate-100">
                <NavLink to="/cookie">Cookie & Mini cake</NavLink>
              </li>
              <li className="px-2 py-2 text-[#444444] hover:rounded-b-lg hover:bg-primary hover:text-slate-100">
                <NavLink to="/bread">Bread & others</NavLink>
              </li>
            </ul>
          </li>
          <li className={location.pathname === '/discount' ? 'menu-active' : 'menu-navbar'}>
            <NavLink to="/discount">Discount</NavLink>
          </li>
          <li className={location.pathname === '/generator' ? 'menu-active' : 'menu-navbar'}>
            <NavLink to="/generator">AI</NavLink>
          </li>
          <li className={location.pathname === '/about' ? 'menu-active' : 'menu-navbar'}>
            <NavLink to="/about">About us</NavLink>
          </li>
        </ul>
        <div className="flex gap-6">
          {/* Cart Logo */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6 cursor-pointer"
            onClick={() => viewCart()}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
          {/* User Logo */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6 cursor-pointer hover:shadow-lg"
            onClick={() => handleLogin()}
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
