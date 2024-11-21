import { useLocation, useNavigate } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MobMenu from '../MobMenu';
import { useSelector } from 'react-redux';
import { UserTooltip } from '~/components/clients/client';
import { Drawer } from 'antd';
function Header() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const viewCart = () => {
    setOpen(true);
  }
  const onClose = () => {
    setOpen(false);
  }
  const handleLogin = () => {
    navigate('/auth?mode=signin');
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
            width="24" height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className='navbar-icon'
            onClick={() => viewCart()}>
            <path
              d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
              stroke="#664545" stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round" />
            <path
              d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
              stroke="#664545"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round" />
            <path
              d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
              stroke="#664545"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
          <Drawer
            title={<span style={{ fontSize: '20px', color: '#664545' }}>Giỏ hàng</span>}
            onClose={onClose}
            open={open}
          >
            <h1>Thông tin giỏ hàng sẽ xuất hiện ở đây</h1>
          </Drawer>
        {/* User Logo */}
        {user ? <UserTooltip/> : (
          <svg
          width="24" height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="navbar-icon"
          onClick={() => handleLogin()}>
          <path
            d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
            stroke="#664545"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round" />
          <path
            d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
            stroke="#664545"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
        )
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
