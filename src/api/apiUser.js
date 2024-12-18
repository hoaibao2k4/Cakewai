import {response} from '~/services/axios';

export const updateUser = async (token, user, instance) => {
  try {
    const res = await instance.put(`/api/protected/user/${user.id}`, user, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log('Update Ok');
    return res.data;
  } catch (err) {
    if (err.response) console.error('Server error: ', err.response.message, err.response.status);
    console.error('Request error: ', err.message);
  }
};
export const getCurrentUser = async (instance, token) => {
  try {
    const res = await instance.get('/api/protected/user/current_user', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (err) {
    if (err.response) console.error('Server error: ', err.response.message, err.response.status);
    console.error('Request error: ', err.message);
  }
};

export const updateImageUser = async (instance, token, file) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await instance.post('/api/upload', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data', 
        },
      });
  
      return res.data;
    } catch (err) {
      if (err.response) {
        console.error('Server error: ', err.response.message, err.response.status);
      } else {
        console.error('Request error: ', err.message);
      }
    }
  };
  
  export const requestPasswordUser = async (email) => {
    try {
      const res = await response.post('/api/public/request-password-reset', {"email": email})
      return res.message
    }
    catch(err) {
     console.log(err)
    }
  }

  export const changePasswordUser = async (instance, token, data) => {
    try {
      const res = await instance.post('/api/protected/account-recover/update-password', data, {
        headers: {Authorization: `Bearer: ${token}`}
      })
      return res.message
    }
    catch(err) {
      console.log(err)
    }
}

export const getListUsers = async (token, instance) => {
    try {
      const res = await instance.get('/api/protected/user/all', {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log('Response từ API:', res.data);
      return res.data; 
    } catch (err) {
      console.error('Lỗi API:', err.response?.data || err.message);
      throw new Error(err.response?.data?.message || 'Lỗi khi lấy danh sách người dùng');
    }
  };

  export const deleteUsers = async (token, id, instance) => {
    try{
        const res = await instance.delete(`/api/protected/user/${id}`, {
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
