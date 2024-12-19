import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import BreadCrumb from "~/components/Layouts/components/Breadcrumb";


const AccountLayout = () => {
    const [currentKey, setCurrentKey] = useState("profile");

    const [breadCrumbItems, setBreadcrumbItems] = useState([
        { title: "Trang chủ", link: "/" },
        { title: "Tài khoản" },
    ])

    const [pageTitle, setPageTitle] = useState("Tài khoản");

    const menuMapping = {
        "profile": {
            link: "/account/profile",
            title: "Tài khoản"
        },
        "address": {
            link: "/account/address",
            title: "Địa chỉ giao hàng"
        },
        "change-password": {
            link: "/account/change-password",
            title: "Đổi mật khẩu"
        },
        "orders": {
            link: "/account/orders",
            title: "Đơn hàng"
        },
    };

    useEffect(() => {
        const savedKey = localStorage.getItem("currentKey");
        if (savedKey && menuMapping[savedKey]) {
            setCurrentKey(savedKey);
            const menu = menuMapping[savedKey];
            setBreadcrumbItems([
                { title: "Trang chủ", link: "/" },
                { title: menu.title, link: menu.link },
            ]);
            setPageTitle(menu.title);
        }
    }, []);

    const handleUpdateContent = (key) => {
        const menu = menuMapping[key];

        if (menu) {
            setCurrentKey(key);
            setBreadcrumbItems([
                { title: "Trang chủ", link: "/" },
                { title: menu.title, link: menu.link },
            ]);
            setPageTitle(menu.title);
        }
    }

    return (
        <>
            <BreadCrumb items={breadCrumbItems} />
            <div className="text-center text-3xl md:text-5xl font-bold leading-tight md:leading-[72px] pt-4 md:pt-8">{pageTitle}</div>
            <Sidebar currentKey={currentKey} handleUpdateContent={handleUpdateContent} />
        </>
    )
}

export default AccountLayout;