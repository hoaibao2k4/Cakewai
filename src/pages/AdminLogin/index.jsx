'use client';
import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import { toast } from 'react-toastify';
import { Cakewai } from '~/assets/icons';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import { loginUser } from '~/redux/apiRequest';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function AdminLogin() {
  const [hidden, setHidden] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const hiddenPassword = () => {
    setHidden((prev) => !prev);
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      const newUser = {
        email: email,
        password: password,
      };
      loginUser(dispatch, newUser, navigate, '/admin/product_management');
    };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#f3d1dc]">
      <Card className="w-[400px] flex-col bg-slate-100">
        <Cakewai className="mx-auto" />
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Tài khoản" />
            </div>
            <TextInput id="email1" type="email" placeholder="Nhập tài khoản của bạn" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='relative'>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Mật khẩu" />
             
            </div>
            <TextInput id="password1" type={hidden ? "password" : "text"} required value={password} onChange={(e) => setPassword(e.target.value)} />
            <i
                className="absolute right-2 mx-1 top-3/4 -translate-y-2/3 cursor-pointer hover:text-slate-900"
                onClick={() => hiddenPassword()}
              >
                {hidden === true ? <FaEyeSlash className="text-slate-500" /> : <FaEye />}
              </i>
          </div>
          <Button type="submit" className="bg-cyan-600">
            Đăng nhập
          </Button>
        </form>
      </Card>
    </div>
  );
}
export default AdminLogin;
