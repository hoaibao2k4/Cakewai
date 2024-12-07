import AccountAddress from "./SectionContentList/Addresss";
import AccountChangePassword from "./SectionContentList/ChangePassword";
import AccountOrders from "./SectionContentList/Orders";
import AccountProfile from "./SectionContentList/Profile";


const ProfileSectionContent = ({ currentKey }) => {
    let content;
    switch (currentKey) {
        case 'profile':
            content = <AccountProfile />;
            break;
        case 'address':
            content = <AccountAddress />;
            break;
        case 'change-password':
            content = <AccountChangePassword />;
            break;
        case 'orders':
            content = <AccountOrders />;
            break;
        default:
            content = <AccountProfile />;
    }


    return (
        <>
            <div className="bg-[#fff] rounded-[8px] h-fit border-[1px] border-[solid] border-[#ccc]">
                <div className="mx-[16px] my-[16px]">
                    {content}
                </div>
            </div>
        </>
    );
}

export default ProfileSectionContent;