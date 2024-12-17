import { Spinner, Textarea } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
import { Button } from 'flowbite-react';
import { Flex, Radio } from 'antd';
import imageCake from '~/assets/images/about_1.jpg';
import { IoDownloadOutline } from 'react-icons/io5';
import { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { generateImage, translatePromt } from '~/api/apiAI';
import { useDispatch, useSelector } from 'react-redux';
import { createInstance } from '~/redux/interceptors';
import { loginSuccess } from '~/redux/authSlice';

function GenImage() {
  const [selectedLabel, setSelectedLabel] = useState('');
  const [input, setInput] = useState('');
  const handleChange = (event) => {
    setSelectedLabel(event.target.value);
  };
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);
  const user = useSelector((state) => state.auth.login.currentUser);
  const dispatch = useDispatch();
  let instance = createInstance(user, dispatch, loginSuccess);

  const options = [
    { label: 'Tiêu chuẩn', value: 'Tiêu chuẩn' },
    { label: 'HD', value: 'HD' },
  ];
  const prefer = [
    { label: 'Tốc độ', value: 'Tốc độ' },
    { label: 'Chất lượng', value: 'Chất lượng' },
  ];
  const label = 'Tùy chọn phong cách';
  const items = ['Mặc định', 'Chân thực', 'Đơn giản', 'Cổ điển', 'Hoạt hình', 'Sang trọng', 'Chi tiết, cầu kì'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const prompt = await translatePromt(user.access_token, input, instance);
      console.log(prompt);
      const res = await generateImage(prompt);
      console.log(res);
      setImage(res?.output[0]?.tmp_url);
      //setInput('');
      inputRef.current.focus();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="mt-16 h-fit w-full bg-white/70 pb-5">
      <div className="mx-[5rem]">
        <div className="flex h-11 items-center text-primary">
          <div className="capitalize">
            <NavLink to="/">Trang chủ </NavLink>
            <span>&gt;&gt;</span>
            <NavLink to="/category"> AI </NavLink>
          </div>
        </div>
        <h1 className="text-center text-5xl font-bold leading-[72px]">Tạo bánh với CakewAI</h1>
        <p className="text-center text-lg font-normal leading-[64px]">Cakewai - Làm bạn với AI</p>
        <div className="mx-[5rem] rounded-3xl border border-black">
          <div className="m-6 flex gap-8">
            <div className="basis-2/5">
              <div className="promt mb-5">
                <form id="promt" onSubmit={(e) => handleSubmit(e)}>
                  <label htmlFor="userInput" className="ml-4 text-lg font-semibold">
                    Tạo bánh theo suy nghĩ của bạn!
                  </label>
                  <Textarea
                    id="userInput"
                    rows={5}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    ref={inputRef}
                  />
                  <Button type="submit" className="w-full">
                    Tạo bánh
                  </Button>
                </form>
              </div>
              <div className="quality my-10">
                <h3 className="my-2 text-lg font-semibold">Chất lượng ảnh</h3>
                <Flex vertical gap="middle">
                  <Radio.Group
                    block
                    options={options}
                    defaultValue="Tiêu chuẩn"
                    optionType="button"
                    buttonStyle="solid"
                  />
                </Flex>
              </div>
              <div className="prefer">
                <h3 className="my-2 text-lg font-semibold">Ưu tiên</h3>
                <Flex vertical gap="middle">
                  <Radio.Group block options={prefer} defaultValue="Tốc độ" optionType="button" buttonStyle="solid" />
                </Flex>
              </div>
            </div>
            <div className="basis-3/5">
              {!image && !loading ? (
                <div className="flex h-[400px] w-[520px] items-center justify-center bg-slate-50">
                  <p className="text-gray-500">Chưa có ảnh được tạo.</p>
                </div>
              ) : loading ? (
                <div role="status" className="flex h-[400px] w-[520px] items-center justify-center bg-slate-50">
                  <Spinner color="success" aria-label="Success spinner example" size="xl" />
                </div>
              ) : (
                <img src={image} alt="Generated cake" className="h-[400px] w-[520px]" />
              )}
              <div className="mt-4 flex justify-around">
                <IoDownloadOutline size={36} className="cursor-pointer" />
                <div className="">
                  <Box sx={{ minWidth: 280 }}>
                    <FormControl fullWidth size="small">
                      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedLabel}
                        label={label}
                        onChange={handleChange}
                      >
                        {items.map((item, index) => (
                          <MenuItem key={index} value={item}>
                            {item}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </div>
                <button className="rounded-full bg-secondary px-5 hover:text-slate-50">Chỉnh sửa</button>
              </div>
            </div>
          </div>
          <div className="flex p-5">
            {imageCake && (
              <p className="mx-28 text-base font-medium text-green-400">
                Tạo bánh thành công! Nếu quý khách muốn đặt bánh này, vui lòng liên hệ với Cakewai qua zalo 0966.888888
                để được nhân viên tư vấn chi tiết!{' '}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenImage;
