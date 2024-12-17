import {
    BarChartOutlined,
    FormOutlined,
    ProductOutlined,
    UserAddOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NavbarVertical = () => {
    const [current, setCurrent] = useState(() => {
        return localStorage.getItem("currentKey") || "dashboard";
    });

    useEffect(() => {
        localStorage.setItem("currentKey", current);
    }, [current]);

    const onClick = (e) => {
        setCurrent(e.key);
    };

    const items = [
        {
            key: 'dashboard',
            icon: <BarChartOutlined />,
            label: (<Link to="/admin/dashboard">Thống kê</Link>),
        },
        {
            key: 'product-management',
            icon: <ProductOutlined />,
            label: (<Link to="/admin/product_management">Quản lý sản phẩm</Link>),
        },
        {
            key: 'order-management',
            icon: <FormOutlined />,
            label: (<Link to="/admin/order_management">Quản lý đơn hàng</Link>),
        },
        {
            key: 'register-customer',
            icon: <UserAddOutlined />,
            label: (<Link to="/admin/register_customer">Khách hàng thành viên</Link>),
        },
    ];
    return (
        <div className="w-60 h-screen">
            <Menu
                onClick={onClick}
                selectedKeys={[current]}
                style={{ height: '100%', backgroundColor: '#fcf0cf' }}
                mode="vertical"
                items={items}
            />
        </div>
    );
}

export default NavbarVertical;