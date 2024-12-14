import { useEffect, useState } from "react";
import ProfileSectionContent from "./SectionContent";
import ProfileSectionTab from "./SectionTab";
import BreadCrumb from "~/components/Layouts/components/Breadcrumb";


const ProfileSection = () => {
    const [currentKey, setCurrentKey] = useState("profile");

    const [breadCrumbItems, setBreadcrumbItems] = useState([
        { title: "Trang chủ", link: "/" },
        { title: "Tài khoản" },
    ])

    const [pageTitle, setPageTitle] = useState("Tài khoản");

    const menuMapping = {
        "profile": {
            link: "/account_profile",
            title: "Tài khoản"
        },
        "address": {
            link: "/account_address",
            title: "Địa chỉ giao hàng"
        },
        "change-password": {
            link: "/account_change_password",
            title: "Đổi mật khẩu"
        },
        "orders": {
            link: "/account_orders",
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

    const handleMenuClick = (key) => {
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
            <div className="mt-16 mb-16 gap-[20px] flex flex-col md:flex-row md:items-start">
                <div className="[flex-basis:25%]">
                    <ProfileSectionTab handleMenuClick={handleMenuClick} />
                </div>
                <div className="[flex-basis:75%]">
                    <ProfileSectionContent currentKey={currentKey} />
                </div>
            </div>
        </>
    )
}

export default ProfileSection;