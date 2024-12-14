import { Avatar, Dropdown } from 'antd';
import { Link } from 'react-router-dom';
import { CakewaiAdmin } from '~/assets/icons';
import AdminAvatar from '~/assets/react.svg';

function AdminHeader() {
    const items = [
        {
            key: 'edit-profile',
            label: (
                <Link to="/admin/edit_profile">
                    Chỉnh sửa thông tin
                </Link>
            ),
        },
        {
            key: 'sign-out',
            danger: true,
            label:
                <Link to="/admin/auth?mode=signin">
                    Đăng xuất
                </Link>,
        },
    ];
    return (
        <div className="h-16 bg-[#f3d1dc] w-full flex items-center justify-between relative ">
            {/* e3dcdc */}
            <div className="w-60 h-full flex items-center justify-center">
                <Link to="/admin/dashboard">
                    <CakewaiAdmin className="mt-2" />
                </Link>
            </div>
            <div className='w-40 h-full p-3 flex items-center justify-between'>
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