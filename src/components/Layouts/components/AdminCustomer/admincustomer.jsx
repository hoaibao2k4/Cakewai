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
        const token = localStorage.getItem('token');
        const data = await getListUsers(token);
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
      <h1 className="text-3xl font-semibold mb-4">Khách hàng thành viên</h1>

      <div className="overflow-x-auto text-sm">
        {/* Bảng chính */}
        <table className="table-auto border border-gray-400 w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-400 px-4 py-2">STT</th>
              <th className="border border-gray-400 px-4 py-2">Tên khách hàng</th>
              <th className="border border-gray-400 px-4 py-2">Email</th>
              <th className="border border-gray-400 px-4 py-2">Số điện thoại</th>
              <th className="border border-gray-400 px-4 py-2">Địa chỉ</th>
              <th className="border border-gray-400 px-4 py-2">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className="text-center">
                <td className="border border-gray-400 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-400 px-4 py-2">{user.name}</td>
                <td className="border border-gray-400 px-4 py-2">{user.email}</td>
                <td className="border border-gray-400 px-4 py-2">{user.phone}</td>
                <td className="border border-gray-400 px-4 py-2">
                  {user.address.full_address}
                </td>
                <td className="  border border-gray-400 px-4 py-2">
                  <button className="text-red-600 hover:underline ml-2"
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
