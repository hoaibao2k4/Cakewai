import {response} from '~/services/axios'

export const getListOrders = async (token,instance) => {
    
    try {
      const res = await instance.get('/api/protected/orders', {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log('Response từ API:', res.data);
      return res.data; 
    } catch (err) {
    //   console.error('Lỗi API:', err.response?.data || err.message);
    //   throw new Error(err.response?.data?.message || 'Lỗi khi lấy danh sách đơn hàng');
    if(err.response){
        console.error('Server error: ', err.response.data, err.response.status);
        console.error('Request error: ', err.message);
        throw err;
    }
    }
  };

  export const deleteOrders = async (token, id, instance) => {
    try{
        const res = await instance.delete(`/api/protected/order/${id}`, {
            headers: {Authorization: `Bearer ${token}`},
        });
        console.log('Xóa thành công:', res.data);
        return res.data;
    } catch (err) {
        if(err.response){
            console.error('Server error: ', err.response.data, err.response.status);
            console.error('Request error: ', err.message);
            throw err;
        }
    }
  }; 

  export const OrderStatus = async (token, id, newStatus ,instance) => {
    try {
        const res = await instance.patch(`/api/protected/order/order_status/${id}`, 
            { order_status: newStatus },
            {
                headers: {Authorization: `Bearer ${token}`},
            }
           
        );
        console.log('Cập nhật trạng thái thành công:', res.data);
        return res.data;
    } catch (err){
        if(err.response){
            console.error('Server error: ', err.response.data, err.response.status);
            console.error('Request error: ', err.message);
            throw err;
        } 
    }
  };

  export const DeliveryStatus = async (token, id, newStatus ,instance) => {
    try {
        const res = await instance.patch(`/api/protected/order/deliverystatus/${id}`, 
            { shipping_status: newStatus },
            {
                headers: {Authorization: `Bearer ${token}`},
            }
           
        );
        console.log('Cập nhật trạng thái thành công:', res.data);
        return res.data;
    } catch (err){
        if(err.response){
            console.error('Server error: ', err.response.data, err.response.status);
            console.error('Request error: ', err.message);
            throw err;
        } 
    }
  };

  export const PaymentStatus = async (token, id, newStatus, instance) => {
    try {
        const res = await instance.patch(`/api/protected/order/status/paid/${id}`, 
            { 
                payment_info: { 
                    is_paid: newStatus 
                } 
            },
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );
        console.log('Cập nhật trạng thái thành công:', res.data);
        return res.data;
    } catch (err) {
        if (err.response) {
            console.error('Server error: ', err.response.data, err.response.status);
            console.error('Request error: ', err.message);
            throw err;
        }
        console.error('Unexpected error: ', err.message);
        throw err;
    }
};


export const getListOrdersByUserId = async (token,instance, id) => { 
    try {
      const res = await instance.get(`/api/protected/order/cus?customer_id=${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log('Response từ API:', res.data);
      return res.data; 
    } catch (err) {
    //   console.error('Lỗi API:', err.response?.data || err.message);
    //   throw new Error(err.response?.data?.message || 'Lỗi khi lấy danh sách đơn hàng');
    if(err.response){
        console.error('Server error: ', err.response.data, err.response.status);
        console.error('Request error: ', err.message);
        throw err;
    }
    }
  };