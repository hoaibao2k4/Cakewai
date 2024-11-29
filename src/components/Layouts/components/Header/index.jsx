import { useLocation, useNavigate } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MobMenu from '../MobMenu';
import { useSelector } from 'react-redux';
import { UserTooltip } from '~/components/clients/client';
import { Drawer } from 'antd';
import { ChevronDown } from 'lucide-react';
import { Cakewai, Cart, UserProfile } from '~/assets/icons';
function Header() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const viewCart = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const handleLogin = () => {
    navigate('/auth?mode=signin');
  };
  const user = useSelector((state) => state.auth.google.user || state.auth.login.currentUser);
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);

  const urls = ['/category', '/birthday-cake', '/tradition-cake', '/cookie', '/bread'];
  return (
    <header className="fixed top-0 z-10 h-16 w-full bg-slate-100">
      <div className="mx-10 flex h-full items-center justify-between gap-4 text-primary lg:mx-20">
        <Link to="/">
          <Cakewai className='mt-2'/>
        </Link>
        <ul className="hidden gap-12 px-4 text-base uppercase lg:flex">
          <li className={pathname === '/' ? 'menu-active' : 'menu-navbar'}>
            <NavLink to="/">TRANG CHỦ</NavLink>
          </li>
          <li className={urls.includes(pathname) ? 'menu-active group' : 'menu-navbar group'}>
            <NavLink to="/category" className="relative">
              <span>MENU BÁNH</span>
              <i>
                <ChevronDown className="icon mx-0.5 inline-block size-5" />
              </i>
            </NavLink>

            <div className="absolute left-0 top-full h-4 w-full cursor-default bg-transparent"></div>
            <ul className="absolute left-0 top-10 z-10 hidden w-max rounded-lg bg-[#CAB6B6] text-sm uppercase group-hover:block">
              <li className="px-2 py-2 text-[#444444] hover:rounded-t-lg hover:bg-primary hover:text-slate-100">
                <NavLink to="/category?mode=birthday">Bánh Sinh Nhật</NavLink>
              </li>
              <li className="px-2 py-2 text-[#444444] hover:bg-primary hover:text-slate-100">
                <NavLink to="/category?mode=tradition">Bánh Truyền Thống</NavLink>
              </li>
              <li className="px-2 py-2 text-[#444444] hover:bg-primary hover:text-slate-100">
                <NavLink to="/category?mode=cookie">Cookie & Mini cake</NavLink>
              </li>
              <li className="px-2 py-2 text-[#444444] hover:rounded-b-lg hover:bg-primary hover:text-slate-100">
                <NavLink to="/category?mode=bread">Bánh Mì và Bánh mặn</NavLink>
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
          <Cart className="navbar-icon" onClick={viewCart} />
          <Drawer
            title={<span style={{ fontSize: '20px', color: '#664545' }}>Giỏ hàng</span>}
            onClose={onClose}
            open={open}
          >
            <h1>Thông tin giỏ hàng sẽ xuất hiện ở đây</h1>
          </Drawer>
          {/* User Logo */}
          {user ? <UserTooltip /> : <UserProfile className="navbar-icon" onClick={() => handleLogin()} />}
          <div className="lg:hidden">
            <MobMenu />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
