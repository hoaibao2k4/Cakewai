import {
    BarChartOutlined,
    FormOutlined,
    ProductOutlined,
    UserAddOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const NavbarVertical = () => {
    const [current, setCurrent] = useState(() => {
        return localStorage.getItem("adminCurrentKey") || "dashboard";
    });
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const storedKey = localStorage.getItem("adminCurrentKey") || "dashboard";
        setCurrent(storedKey);
    }, []);

    useEffect(() => {
        localStorage.setItem("adminCurrentKey", current);
    }, [current]);
    useEffect(() => {
        const path = location.pathname;
        if (path === "/admin") {
            setCurrent("dashboard");
        } else {
            const selectedItem = items.find(item => item.label.props.to === path);
            if (selectedItem && selectedItem.key !== current) {
                setCurrent(selectedItem.key);
            }
        }
    }, [location.pathname]);

    const onClick = (e) => {
        setCurrent(e.key);
        const selectedItem = items.find(item => item.key === e.key);
        handleUpdateContent(e.key);
        navigate(selectedItem.label.props.to);
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