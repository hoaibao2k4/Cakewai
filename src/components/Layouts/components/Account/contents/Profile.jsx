import { Form, Input } from 'antd';
import './index.css';
import { Pencil } from 'lucide-react';
import avatar from '~/assets/default_avt.jpg';
import { useRef, useState } from 'react';
import { getCurrentUser, updateImageUser, updateUser } from '~/api/apiUser';
import { setUser } from '~/redux/authSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const AccountProfile = ({ currentUser, instance }) => {
  const [profile, setProfile] = useState(currentUser?.user);
  const [editProfile, setEditProfile] = useState({
    name: false,
    email: false,
    phone: false,
  });
  const [image, setImage] = useState('');
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (profile !== currentUser?.user) {
      try {
        await updateUser(currentUser?.access_token, profile, instance);
        toast.success('Cập nhật thành công!', {
          position: 'bottom-right',
          autoClose: 3000,
        });
        await refreshUser();
      } catch (err) {
        console.log(err);
      }
    }
    setEditProfile((prev) =>
      Object.keys(prev).reduce((acc, index) => {
        acc[index] = false;
        return acc;
      }, {}),
    );
    
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const refreshUser = async () => {
    const newUser = await getCurrentUser(instance, currentUser?.access_token);
    if (JSON.stringify(newUser) !== JSON.stringify(currentUser.user)) {
      console.log('New user data:', newUser);
      dispatch(
        setUser({
          ...currentUser, // Giữ lại token, nhưng thay user mới
          user: newUser,
        }),
      );
      setProfile(newUser)
      console.log('Update user: ', currentUser);
    }
  };

  const handleImage = async (e) => {
    const file = e.target.files[0];
    setImage(file);
    const res = await updateImageUser(instance, currentUser?.access_token, file);
    setProfile({
      ...profile,
      profile_picture: res,
    });
  };
  return (
    <>
      <div className="flex-col">
        <div className="flex basis-1/3 flex-col items-center justify-center">
          <div className="relative size-40 rounded-full border-2">
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt="Ảnh đại diện"
                className="absolute right-0 top-0 size-40 rounded-full"
              />
            ) : (
              <img
                src={currentUser?.user?.profile_picture || avatar}
                alt="Ảnh đại diện"
                className="absolute right-0 top-0 size-40 rounded-full"
              />
            )}
            <input type="file" className="hidden" ref={inputRef} onChange={handleImage} />
            <div
              onClick={() => inputRef.current.click()}
              className="absolute bottom-2 right-2 flex size-8 cursor-pointer items-center justify-center rounded-full bg-black/60 bg-opacity-20 text-slate-50 hover:text-amber-300"
            >
              <Pencil size={20} />
            </div>
          </div>
        </div>
        <div className="relative basis-2/3">
          <Form layout="vertical">
            <Form.Item
              label="Họ tên"
              name="username"
              rules={[
                {
                  message: 'Please input your username!',
                },
              ]}
            >
              <div>
                <Input name="name" disabled={!editProfile.name} value={profile.name} onChange={handleProfileChange} />
                <Pencil
                  onClick={() =>
                    setEditProfile((prev) => ({
                      ...prev,
                      name: !prev.name,
                    }))
                  }
                  size={20}
                  className="absolute bottom-3 right-2 cursor-pointer text-black/30 hover:text-black/60"
                />
              </div>
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  type: 'email',
                  message: 'Please input your username!',
                },
              ]}
            >
              <div>
                <Input
                  name="email"
                  disabled={!editProfile.email}
                  value={profile.email}
                  onChange={handleProfileChange}
                />
                <Pencil
                  onClick={() =>
                    setEditProfile((prev) => ({
                      ...prev,
                      email: !prev.email,
                    }))
                  }
                  size={20}
                  className="absolute bottom-3 right-2 cursor-pointer text-black/30 hover:text-black/60"
                />
              </div>
            </Form.Item>
            <Form.Item
              label="Số điện thoại"
              name="phonenumber"
              rules={[
                {
                  type: 'string',
                  message: 'Vui lòng nhập số điện thoại',
                },
              ]}
            >
              <div>
                <Input
                  name="phone"
                  disabled={!editProfile.phone}
                  value={profile.phone}
                  onChange={handleProfileChange}
                />
                <Pencil
                  onClick={() =>
                    setEditProfile((prev) => ({
                      ...prev,
                      phone: !prev.phone,
                    }))
                  }
                  size={20}
                  className="absolute bottom-3 right-2 cursor-pointer text-black/30 hover:text-black/60"
                />
              </div>
            </Form.Item>
            <Form.Item>
              <button
                onClick={(e) => handleSubmit(e)}
                className="w-full cursor-pointer rounded-[6px] border-[none] bg-[#664545] p-[10px] text-[1rem] text-[white] hover:bg-[#7a4f4f] active:bg-[#523636]"
                type="submit"
              >
                Cập nhật hồ sơ
              </button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default AccountProfile;
