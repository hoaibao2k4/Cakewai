import { useLocation, useNavigate } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import MobMenu from '../MobMenu';
import { useSelector } from 'react-redux';
import { UserTooltip } from '~/components/clients/client';
function Header() {
  const navigator = useNavigate();
  const handleLogin = () => {
    navigator('/auth?mode=signin');
  };
  const user = useSelector(state => state.auth.google.user || state.auth.login.currentUser);
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);

  console.log(search);

  const urls = ['/category', '/birthday-cake', '/tradition-cake', '/cookie', '/bread'];
  return (
    <header className="fixed top-0 z-10 h-16 w-full bg-slate-100">
      <div className="mx-10 flex h-full items-center justify-between gap-4 text-primary lg:mx-20">
        <Link to="/">
          <img src={`./src/assets/images/logo.svg?v${Date.now()}`} alt="Cake with AI" className="mt-2" />
        </Link>
        <ul className="hidden lg:flex gap-12 px-4 text-base uppercase">
          <li className={pathname === '/' ? 'menu-active' : 'menu-navbar'}>
            <NavLink to="/">TRANG CHỦ</NavLink>
          </li>
          <li className={urls.includes(pathname) ? 'menu-active group' : 'menu-navbar group'}>
            <NavLink to="/category" className="relative">
              <span>MENU BÁNH</span>
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="icon mx-0.5 inline-block size-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </i>
            </NavLink>

            <div className="absolute left-0 top-full h-4 w-full cursor-default bg-transparent"></div>
            <ul className="absolute left-0 top-10 z-10 hidden w-max rounded-lg bg-[#CAB6B6] text-sm uppercase group-hover:block">
              <li className="px-2 py-2 text-[#444444] hover:rounded-t-lg hover:bg-primary hover:text-slate-100">
                <NavLink to="/birthday-cake">Bánh Sinh Nhật</NavLink>
              </li>
              <li className="px-2 py-2 text-[#444444] hover:bg-primary hover:text-slate-100">
                <NavLink to="/tradition">Bánh Truyền Thống</NavLink>
              </li>
              <li className="px-2 py-2 text-[#444444] hover:bg-primary hover:text-slate-100">
                <NavLink to="/cookie">Cookie & Mini cake</NavLink>
              </li>
              <li className="px-2 py-2 text-[#444444] hover:rounded-b-lg hover:bg-primary hover:text-slate-100">
                <NavLink to="/bread">Bánh Mì và Bánh mặn</NavLink>
              </li>
            </ul>
          </li>
          <li className={pathname === '/news' ? 'menu-active' : 'menu-navbar'}>
            <NavLink to="/news">TIN TỨC</NavLink>
          </li>
          <li className={pathname === '/generator' ? 'menu-active' : 'menu-navbar'}>
            <NavLink to="/generator">AI</NavLink>
          </li>
          <li className={pathname === '/about' ? 'menu-active' : 'menu-navbar'}>
            <NavLink to="/about">VỀ CHÚNG TÔI</NavLink>
          </li>
        </ul>
      
      <div className="flex gap-6">
        {/* Cart Logo */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="navbar-icon"
          onClick={() => viewCart()}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
        {/* User Logo */}
        {
          user ? 
            <UserTooltip/>

            : 
          
           ( <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="navbar-icon"
            onClick={handleLogin}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>)
          
        }
        
        <div className='lg:hidden'>
          <MobMenu/>
        </div>
      </div>
      </div>
    </header>
  );
}

export default Header;
