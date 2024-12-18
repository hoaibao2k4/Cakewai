import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { requestPasswordUser } from '~/api/apiUser';
function EmailRecovery() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const handleRequest = async () => {
    if (email !== '') {
      try {
        const res = await requestPasswordUser(email);
        console.log(res);
        sessionStorage.setItem('recovery', 'true');
        navigate('/email/message');
      } catch (err) {
        console.log(err);
      }
    }
    else {
      toast.error('Bạn chưa nhập email', {
        position: 'bottom-right',
        onClose: 3000
      })
    }
  };
  return (
    <div className="mb-5 mt-16 h-fit w-full bg-slate-50">
      <div className="mx-[5rem]">
        <div className="flex h-11 items-center text-primary">
          <div className="capitalize">
            <NavLink to="/">Trang chủ </NavLink>
            <span>&gt;&gt;</span>
            <NavLink to="/category"> Quên mật khẩu </NavLink>
          </div>
        </div>
        <div className="my-10">
          <div className="flex h-12 w-11/12 items-center bg-[#455666]">
            <p className="ml-5 text-sm text-slate-50">
              Quên mật khẩu? Vui lòng nhập địa chỉ email bạn đã đăng ký. Bạn sẽ nhận được một liên kết tạo mật khẩu mới
              qua email.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="text">Email</label>
          <input
            type="text"
            className="mt-2 w-64 rounded-xl border-primary"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <button
            onClick={handleRequest}
            className="my-6 rounded-lg bg-primary px-6 py-3 text-sm uppercase text-slate-50 hover:bg-secondary hover:text-black"
          >
            Đặt lại mật khẩu
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmailRecovery;
