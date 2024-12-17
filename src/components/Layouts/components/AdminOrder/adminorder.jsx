import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListOrders,deleteOrders, OrderStatus, DeliveryStatus, PaymentStatus } from '~/api/apiOrder';
import { loginSuccess } from '~/redux/authSlice';
import { createInstance } from '~/redux/interceptors';

function AdminOrder() {
    const [orders, setOrders] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 
    // const [isPaid, setIsPaid] = useState(null);
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.login.currentUser); 
    let instance = createInstance(user,dispatch,loginSuccess); 

    useEffect(() => {
        const fetchOrders = async () => {
          try {
            // const token = localStorage.getItem('token');
            const data = await getListOrders(user.access_token,instance);
            setOrders(data); 
            setLoading(false); 
          } catch (err) {
            setError(err.message || 'Không thể tải danh sách đơn hàng');
            setLoading(false);
          }
        };
    
        fetchOrders();
      }, []);

      console.log(user);
      const handleDelete = async (id) => {
        
        try { 
                 
            await deleteOrders(user.access_token,id,instance);
            setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
            alert('Xóa thành công');
        } catch(err) {
            alert(err.message || 'Xóa đơn hàng không thành công');
        }
      };

      const handleOrderStatus = async (id, currentStatus) => {
        
        try {
            const newStatus = currentStatus === "Đã thanh toán" ? "Đang xử lý" : "Đã thanh toán";
           const updatedOrder = await OrderStatus(user.access_token,id,newStatus,instance);
           setOrders((prevOrders) =>
            prevOrders.map((order) =>
                order.id === id ? { ...order, order_status: newStatus } : order
            )
        );
        alert('Cập nhật trạng thái thành công');       
         } catch (err) {
            alert (err.message || 'Cập nhật thanh toán không thành công')
        }
      };
      const handleDeliveryStatus = async (id, currentStatus) => {
        
        try {
           const newStatus = currentStatus === "Đã giao hàng" ? "Đang xử lý" : "Đã giao hàng";
           const updatedDelivery = await DeliveryStatus(user.access_token,id,newStatus,instance);
           setOrders((prevOrders) =>
            prevOrders.map((order) =>
                order.id === id ? { ...order, shipping_status: newStatus } : order
            )
        );
        alert('Cập nhật trạng thái thành công');       
         } catch (err) {
            alert (err.message || 'Cập nhật giao hàng không thành công')
        }
      };

      const handlePaymentStatus = async (id, currentStatus) => {
        try {
           const newStatus = currentStatus === 0  ? 1 : 0;
           const updatedPayment = await PaymentStatus(user.access_token,id,newStatus,instance);
           setOrders((prevOrders) =>
            prevOrders.map((order) =>
                order.id === id ? { ...order, payment_info: { ...order.payment_info,  is_paid: newStatus }, } : order
            ) 
        );
        alert('Cập nhật trạng thái thành công');       
         } catch (err) {
            alert (err.message || 'Cập nhật thanh toán không thành công')
        }
      };



      if (loading) {
        return <p>Đang tải danh sách đơn hàng...</p>;
      }
    
      if (error) {
        return <p>Lỗi: {error}</p>;
      }
      console.log(orders)
    return (
        <div className="p-4">
            <h1 className="text-3xl font-semibold mb-4">Đơn hàng</h1>

            <div className="overflow-x-auto text-sm">
                {/* Bảng chính */}
                <table className="table-auto border border-gray-400 w-full">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="border border-gray-400 px-4 py-2">STT</th>
                            <th className="border border-gray-400 px-4 py-2">Thông tin khách hàng</th>
                            <th className="border border-gray-400 px-4 py-2">Số điện thoại</th>
                            <th className="border border-gray-400 px-4 py-2">Chi tiết sản phẩm</th>
                            <th className="border border-gray-400 px-4 py-2">Thông tin thanh toán</th>
                            <th className="border border-gray-400 px-4 py-2">Số tiền cần trả</th>
                            <th className="border border-gray-400 px-4 py-2">Trạng thái đơn hàng</th>
                            <th className="border border-gray-400 px-4 py-2">Trạng thái giao hàng</th>
                            <th className="border border-gray-400 px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                        <tr key={order.id} className="text-center">
                            <td className="border border-gray-400 px-4 py-2">{index + 1}</td>
                            <td className="border border-gray-400 px-4 py-2">{order.name}</td>
                            <td className="border border-gray-400 px-4 py-2">{order.phone}</td>
                            <td className="border border-gray-400 px-4 py-2">
                            {order.order_items.map((item, i) => (
                                <div key={i}>
                                <p>{item.name} - {item.variant} (x{item.buy_quantity})</p>
                                </div>
                            ))}
                            </td>
                            <td className="border border-gray-400 px-4 py-2">
                            {order.payment_info.payment_method} - {order.payment_info.is_paid === 1 ? 'Đã thanh toán' : 'Chưa thanh toán'}
                                <button className='text-green-600 hover:underline ml-2'
                                    onClick={() => handlePaymentStatus(order.id, order.payment_info.is_paid)}
                                >
                                Cập nhật
                                </button>
                            </td>
                            <td className="border border-gray-400 px-4 py-2">{order.total_price}</td>
                            <td className="border border-gray-400 px-4 py-2">{order.order_status === 'Đã thanh toán' ? 'Đã thanh toán' : 'Đang xử lý'} 
                                <button className="text-green-600 hover:underline ml-2"
                                onClick={() => handleOrderStatus(order.id, order.order_status)}
                                >
                                    Cập nhật 
                                </button>
                            </td>
                            <td className="border border-gray-400 px-4 py-2">{order.shipping_status === 'Đã giao hàng' ? 'Đã giao hàng':'Đang xử lý' }
                                <button className='text-green-600 hover:underline ml-2'
                                onClick={() => handleDeliveryStatus(order.id, order.shipping_status)}
                                >
                                    Cập nhật
                                </button>
                            </td>
                            <td className="  border border-gray-400 px-4 py-2">
                            <button className="text-red-600 hover:underline ml-2"
                            onClick={() => handleDelete(order.id)}
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

export default AdminOrder;
