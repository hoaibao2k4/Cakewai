import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListUsers,  deleteUsers } from '~/api/apiUser'; 
import { loginSuccess } from '~/redux/authSlice';
import { createInstance } from '~/redux/interceptors';
function AdminCustomer() {
  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.login.currentUser); 
  let instance = createInstance(user,dispatch,loginSuccess); 

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // const token = localStorage.getItem('token');
        const data = await getListUsers(user.access_token,instance);
        console.log(data);
        setUsers(data); 
        setLoading(false); 
      } catch (err) {
        setError(err.message || 'Không thể tải danh sách khách hàng');
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

    const handleDelete = async (id) => {
        
        try { 
                 
            await deleteUsers(user.access_token,id,instance);
            setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
            alert('Xóa thành công');
        } catch(err) {
            alert(err.message || 'Xóa khách hàng không thành công');
        }
      };
  
  

  if (loading) {
    return <p>Đang tải danh sách khách hàng...</p>;
  }

  if (error) {
    return <p>Lỗi: {error}</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-[x-large] font-bold text-[#664545] mb-4">Khách hàng thành viên</h1>

      <div className="overflow-x-auto text-sm">
        {/* Bảng chính */}
        <table className="table-auto border-collapse border border-gray-200 w-full rounded-lg overflow-hidden shadow-sm">
          <thead className="bg-gray-50 text-gray-700 text-sm font-semibold">
            <tr>
              <th className="border-y border-gray-200 px-4 py-3 text-center">STT</th>
              <th className="border-y border-gray-200 px-4 py-3 text-center">Tên khách hàng</th>
              <th className="border-y border-gray-200 px-4 py-3 text-center">Email</th>
              <th className="border-y border-gray-200 px-4 py-3 text-center">Số điện thoại</th>
              <th className="border-y border-gray-200 px-4 py-3 text-center">Địa chỉ</th>
              <th className="border-y border-gray-200 px-4 py-3 text-center">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={user.id} className="hover:bg-gray-100 transition-all text-gray-800">
                <td className="border-y border-gray-200 text-center py-3">{index + 1}</td>
                <td className="border-y border-gray-200 py-3 px-4 text-center">{user.name}</td>
                <td className="border-y border-gray-200 py-3 px-4 text-center">{user.email}</td>
                <td className="border-y border-gray-200 py-3 px-4 text-center">{user.phone}</td>
                <td className="border-y border-gray-200 py-3 px-4 text-center">
                  {user.address.full_address}
                </td>
                <td className="  border-y border-gray-200 py-3 px-4 text-center">
                  <button className="bg-[rgb(102,69,69)] text-white border border-[rgb(102,69,69)] rounded px-3 py-1 hover:opacity-90 transition"
                  onClick={() => handleDelete(user.id)}
                  >Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminCustomer;
