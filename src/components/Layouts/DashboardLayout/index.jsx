import AdminHeader from "~/components/dashboard/AdminHeader";
import NavbarVertical from "~/components/dashboard/NavbarVertical";
function DashBoardLayout({children}) {
  return (
    <div className="dashboard">
      {/* Header */}
      <AdminHeader />
      
      {/* Nội dung chính */}
      <div className="flex">
        {/* Thanh điều hướng dọc */}
        <NavbarVertical />
        
        {/* Nội dung children */}
        <div className="flex-1 bg-white p-4">
          {children}
        </div>
      </div>
    </div>
  );
}

export default DashBoardLayout;