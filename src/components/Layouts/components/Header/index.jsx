import { useLocation, useNavigate } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MobMenu from '../MobMenu';
import { useDispatch, useSelector } from 'react-redux';
import { UserTooltip } from '~/components/clients/client';
import { Drawer } from 'antd';
import { ChevronDown } from 'lucide-react';
import { Cakewai, Cart, UserProfile } from '~/assets/icons';
import ListItems from '../ListItems';
import { logOutUser } from '~/redux/apiRequest';
function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const viewCart = async () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const handleLogin = () => {
    navigate('/auth?mode=signin');
  };
  const handleLogOut = () => {
    logOutUser(dispatch, user?.refresh_token, navigate)
  }
  const user = useSelector((state) => state.auth.google.user || state.auth.login.currentUser);
  const { list } = useSelector((state) => state.cart);
  const { pathname, search } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);

  const urls = ['/category', '/birthday', '/tradition', '/cookie', '/bread'];
  return (
    <header className="fixed top-0 z-[100] h-16 w-full bg-fifth">
      <div className="mx-10 flex h-full items-center justify-between gap-4 text-primary lg:mx-20">
        <Link to="/">
          <Cakewai className="mt-2" />
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
              <NavLink to="/category?mode=birthday">
                <li className="px-2 py-2 text-[#444444] hover:rounded-t-lg hover:bg-primary hover:text-slate-100">
                  Bánh Sinh Nhật
                </li>
              </NavLink>
              <NavLink to="/category?mode=tradition">
                <li className="px-2 py-2 text-[#444444] hover:bg-primary hover:text-slate-100">Bánh Truyền Thống</li>
              </NavLink>
              <NavLink to="/category?mode=cookie">
                <li className="px-2 py-2 text-[#444444] hover:bg-primary hover:text-slate-100">Cookie & Mini cake</li>
              </NavLink>
              <NavLink to="/category?mode=bread">
                <li className="px-2 py-2 text-[#444444] hover:rounded-b-lg hover:bg-primary hover:text-slate-100">
                  Bánh Mì và Bánh mặn
                </li>
              </NavLink>
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

          <div className="relative">
            <Cart className="navbar-icon" onClick={viewCart} />
            <span className="absolute bottom-3 left-4 rounded-full bg-fourth px-2.5 text-sm text-slate-100">
              {list?.length}
            </span>
          </div>

          <Drawer
            title={<span style={{ fontSize: '20px', color: '#664545' }}>Giỏ hàng</span>}
            onClose={onClose}
            open={open}
          >
            {list.length > 0 ? (
              <ListItems list={list} />
            ) : (
              <>
                <h1 className="m-6">Thông tin giỏ hàng sẽ xuất hiện ở đây</h1>
              </>
            )}
          </Drawer>
          {/* User Logo */}
          {user ? <UserTooltip onClick={handleLogOut} /> : <UserProfile className="navbar-icon" onClick={() => handleLogin()} />}
          <div className="lg:hidden">
            <MobMenu />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
