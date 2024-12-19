import { Form, Input } from 'antd';
import './index.css';
import { useState } from 'react';
import { changePasswordUser } from '~/api/apiUser';
import { useDispatch, useSelector } from 'react-redux';
import { createInstance } from '~/redux/interceptors';
import { loginSuccess } from '~/redux/authSlice';
import { toast } from 'react-toastify';

const AccountChangePassword = () => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const { currentUser } = useSelector((state) => state.auth.login);
  const dispatch = useDispatch();
  let instance = createInstance(currentUser, dispatch, loginSuccess);
  const handleSubmit = async (e) => {
    //e.preventDefault()
    if (newPassword === confirm) {
      let data = {
        current_password: password,
        new_password: newPassword,
      };
      try {
        const res = await changePasswordUser(instance, currentUser.access_token, data);
        console.log(res);
        toast.success('Đổi mật khẩu thành công', {
          position: 'bottom-right',
          onClose: 3000,
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      toast.error('Nhập lại mật khẩu mới không khớp', {
        position: 'bottom-right',
        onClose: 3000,
      });
    }
  };
  return (
    <>
      <Form onFinish={(e) => handleSubmit(e)} layout="vertical">
        <Form.Item
          label="Nhập mật khẩu hiện tại"
          name="current-password"
          rules={[
            {
              required: true,
              message: 'Hãy nhập mật khẩu hiện tại!',
            },
          ]}
        >
          <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Nhập mật khẩu mới"
          name="email"
          rules={[
            {
              required: true,
              message: 'Hãy nhập mật khẩu mới!',
            },
          ]}
        >
          <Input.Password value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Nhập lại mật khẩu mới"
          name="retype-password"
          rules={[
            {
              required: true,
              message: 'Hãy nhập lại mật khẩu mới!',
            },
          ]}
        >
          <Input.Password value={confirm} onChange={(e) => setConfirm(e.target.value)} />
        </Form.Item>
        <Form.Item>
          <button
            className="w-full cursor-pointer rounded-[6px] border-[none] bg-[#664545] p-[10px] text-[1rem] text-[white] hover:bg-[#7a4f4f] active:bg-[#523636]"
            type="submit"
          >
            Đổi mật khẩu
          </button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AccountChangePassword;
