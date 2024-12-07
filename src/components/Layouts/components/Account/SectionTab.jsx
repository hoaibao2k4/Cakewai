import { Menu } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './SectionTab.css';

const ProfileSectionTab = ({ handleMenuClick }) => {
    const [current, setCurrent] = useState(() => {
        return localStorage.getItem("currentKey") || "profile";
    });

    useEffect(() => {
        localStorage.setItem("currentKey", current);
    }, [current]);

    const onClick = (e) => {
        setCurrent(e.key);
        const selectedItem = items.find(item => item.key === e.key)
        handleMenuClick(e.key, selectedItem.label.props.children);
    };
    const items = [
        {
            label: <Link to={"/account_profile"}>Hồ sơ</Link>,
            key: 'profile',
        },
        {
            label: <Link to={"/account_address"}>Địa chỉ giao hàng</Link>,
            key: 'address',
        },
        {
            label: <Link to={"/account_change_password"}>Đổi mật khẩu</Link>,
            key: 'change-password'

        },
        {
            label: <Link to={"/account_orders"}>Đơn hàng</Link>,
            key: 'orders',
        },
    ];
    return (
        <>
            <Menu style={{
                width: "100%",
            }}
                onClick={onClick}
                selectedKeys={[current]}
                mode="vertical"
                items={items}
            />

        </>

    );
}

export default ProfileSectionTab;