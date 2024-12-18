import { Avatar, Dropdown } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { CakewaiAdmin } from '~/assets/icons';
import AdminAvatar from '~/assets/react.svg';
import { logOutUser } from '~/redux/apiRequest';
import { setCart } from '~/redux/cartSlice';
import { persistor } from '~/redux/store';

function AdminHeader() {
  const user = useSelector(state => state.auth.login.currentUser)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = () => {
    if (user?.refresh_token) logOutUser(dispatch, user?.refresh_token, navigate, '/admin/login');
    else {
      const refresh_token = localStorage.getItem('refreshToken');
      logOutUser(dispatch, refresh_token, navigate);
      localStorage.removeItem('authToken');
      localStorage.removeItem('refreshToken');
    }
    localStorage.removeItem('currentKey');
    dispatch(setCart([]));
    persistor.purge()
  };
  const items = [
    {
      key: 'sign-out',
      danger: true,
      label: <button onClick={handleLogout}>Đăng xuất</button>,
    },
  ];
  return (
    <div className="relative flex h-16 w-full items-center justify-between bg-[#f3d1dc]">
      {/* e3dcdc */}
      <div className="flex h-full w-60 items-center justify-center">
        <CakewaiAdmin
          className="mt-2" />
      </div>
      <div className="flex h-full w-40 items-center justify-between p-3">
        Administrator
        <Dropdown
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Avatar src={<img src={AdminAvatar} alt="avatar" />} />
          </a>
        </Dropdown>
      </div>
    </div>
  );
}

export default AdminHeader;
