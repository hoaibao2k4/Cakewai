import { Spinner, Textarea } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
import { Button } from 'flowbite-react';
import { Flex, Radio } from 'antd';
import imageCake from '~/assets/images/about_1.jpg';
import { useContext, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { generateImage } from '~/api/apiAI';
import { useDispatch, useSelector } from 'react-redux';
import { createInstance } from '~/redux/interceptors';
import { loginSuccess } from '~/redux/authSlice';
import { toast } from 'react-toastify';
import ImageDownloader from '~/components/Layouts/components/ImageDownloader';
import { AddToCartContext } from '~/components/Layouts/DefaultLayout';

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
  const { setIsLogin } = useContext(AddToCartContext);
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
    if (!user) setIsLogin(true);
    else {
      setLoading(true);
      try {
        const res = await generateImage(user.access_token, input, instance);
        console.log(res);
        setImage(res[0].tmp_url);
        inputRef.current.focus();
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
  };
  const handleEditImage = async (e) => {
    e.preventDefault();
    if (!user) setIsLogin(true);
    else if (!input) {
      toast.info('Quý khách chưa nhập ý tưởng của mình', {
        position: 'bottom-right',
        onClose: 3000,
      });
    } else if (!selectedLabel) {
      toast.info('Quý khách chưa chọn phong cách', {
        position: 'bottom-right',
        onClose: 3000,
      });
    } else {
      setLoading(true);
      const inputStyle = input + 'theo cách thiết kế' + selectedLabel;
      try {
        const res = await generateImage(user.access_token, inputStyle, instance);
        console.log(res);
        setImage(res[0].tmp_url);
        inputRef.current.focus();
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
  };
  console.log('image: ', image);
  return (
    <div className="mt-16 h-fit w-full bg-white/70 pb-5">
      <div className="mx-auto px-6 lg:px-[5rem]">
        <div className="flex h-11 items-center px-4 text-primary sm:px-6">
          <div className="capitalize">
            <NavLink to="/">Trang chủ </NavLink>
            <span>&gt;&gt;</span>
            <NavLink to="/category"> AI </NavLink>
          </div>
        </div>
        <h1 className="text-center text-3xl font-bold leading-[48px] sm:text-4xl sm:leading-[56px] lg:text-5xl lg:leading-[72px]">
          Tạo bánh với CakewAI
        </h1>
        <p className="text-center text-base font-normal leading-[32px] sm:text-lg sm:leading-[48px] lg:text-xl lg:leading-[64px]">
          Cakewai - Làm bạn với AI
        </p>
        <div className="mx-auto max-w-screen-lg rounded-3xl border border-black lg:px-[3rem]">
          <div className="m-4 flex flex-col gap-6 sm:m-6 lg:flex-row lg:gap-10">
            {/* Form Section */}
            <div className="w-full lg:basis-2/5">
              <div className="promt mb-5">
                <form id="promt" onSubmit={(e) => handleSubmit(e)}>
                  <label htmlFor="userInput" className="ml-4 text-base font-semibold sm:text-lg">
                    Tạo bánh theo suy nghĩ của bạn!
                  </label>
                  <Textarea
                    id="userInput"
                    rows={5}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    ref={inputRef}
                    className="mt-2 w-full"
                  />
                  <Button type="submit" color="blue" className="mt-4 w-full">
                    Tạo bánh
                  </Button>
                </form>
              </div>
              <div className="quality my-6">
                <h3 className="my-2 text-base font-semibold sm:text-lg">Chất lượng ảnh</h3>
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
                <h3 className="my-2 text-base font-semibold sm:text-lg">Ưu tiên</h3>
                <Flex vertical gap="middle">
                  <Radio.Group block options={prefer} defaultValue="Tốc độ" optionType="button" buttonStyle="solid" />
                </Flex>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex w-full flex-col items-center justify-center lg:basis-3/5">
              {!image && !loading ? (
                <div className="mx-auto flex h-[200px] w-full max-w-[520px] items-center justify-center bg-slate-50 sm:h-[300px] lg:h-[400px]">
                  <p className="text-sm text-gray-500 sm:text-base">Chưa có ảnh bánh được tạo.</p>
                </div>
              ) : loading ? (
                <div
                  role="status"
                  className="mx-auto flex h-[200px] w-full max-w-[520px] items-center justify-center bg-slate-50 sm:h-[300px] lg:h-[400px]"
                >
                  <Spinner color="info" aria-label="Success spinner example" size="xl" />
                </div>
              ) : (
                <img
                  src={image}
                  alt="Generated cake"
                  className="mx-auto h-[200px] w-full max-w-[520px] object-contain sm:h-[300px] lg:h-[400px]"
                />
              )}
              <div className="mt-4 flex flex-col items-center justify-between gap-4 sm:flex-row">
                <ImageDownloader imageUrl={image} />
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
                <button
                  onClick={(e) => handleEditImage(e)}
                  className="rounded-xl bg-[#1a56db] px-5 py-2 text-slate-50 hover:bg-[#1e429f]"
                >
                  Chỉnh sửa
                </button>
              </div>
            </div>
          </div>

          {/* Success Message */}
          {image && (
            <div className="flex p-4">
              <p className="text-sm font-medium text-green-400 sm:text-base">
                Tạo bánh thành công! Nếu quý khách muốn đặt bánh này, vui lòng liên hệ với Cakewai qua zalo 0966.888888
                để được nhân viên tư vấn chi tiết!
              </p>
            </div>
          )}
        </div>
        <div className="py-8">
          <div className="mx-auto px-4">
            <h1 className="mb-6 text-center text-4xl font-bold text-gray-800">
              Biến Ý Tưởng Thành Tác Phẩm Nghệ Thuật Với <span className="text-pink-500">Cakewai AI</span>
            </h1>
            <p className="mb-8 text-center text-lg text-gray-600">
              Chỉ cần nhập ý tưởng, Cakewai sẽ giúp bạn tạo ra những hình ảnh bánh độc đáo trong vài giây. Dành cho
              người làm nội dung, thợ làm bánh, hay bất kỳ ai đam mê sáng tạo.
            </p>

            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-2xl font-semibold text-gray-700">Tạo Ảnh Bánh Từ Ý Tưởng Với AI</h2>
                <p className="mb-4 text-gray-600">
                  Cakewai sử dụng công nghệ AI tiên tiến để chuyển đổi mô tả văn bản thành hình ảnh bánh chất lượng cao.
                  Từ những thiết kế đơn giản đến những chi tiết phức tạp, tất cả đều trong tầm tay bạn.
                </p>
                <ul className="list-inside list-disc text-gray-600">
                  <li>Chọn nhiều phong cách: Hiện đại, cổ điển, chân thực và hơn thế nữa.</li>
                  <li>Tuỳ chỉnh màu sắc, ánh sáng và bố cục theo ý muốn.</li>
                  <li>Xuất ảnh chất lượng cao phù hợp cho web, in ấn, hoặc mạng xã hội.</li>
                  <li>Giao diện thân thiện, dễ sử dụng cho mọi người.</li>
                </ul>
              </div>
              <div>
                <img src={imageCake} alt="Cakewai" className="mx-auto size-[20rem] rounded-full" />
              </div>
            </div>
            <div className="mt-12 text-center">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">Cách Sử Dụng Cakewai</h2>
              <div className="grid gap-6 text-left md:grid-cols-3">
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="mb-2 text-lg font-bold text-pink-500">1. Nhập Ý Tưởng</h3>
                  <p className="text-gray-600">
                    Hãy mô tả chiếc bánh bạn muốn tạo ra. Ví dụ:
                    <i>"Một chiếc bánh sinh nhật với hoa văn hoa hồng và ánh sáng lung linh."</i>
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="mb-2 text-lg font-bold text-pink-500">2. Chọn Phong Cách</h3>
                  <p className="text-gray-600">
                    Lựa chọn phong cách hình ảnh phù hợp như Hiện đại, chân thực, hoặc Tối giản. Tuỳ chỉnh màu sắc và tỷ
                    lệ khung hình để phù hợp với ý tưởng của bạn.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="mb-2 text-lg font-bold text-pink-500">3. Tải Xuống</h3>
                  <p className="text-gray-600">
                    Nhấn "Tạo Ảnh" để xem kết quả. Nếu chưa hài lòng, hãy điều chỉnh và tạo lại. Khi hoàn tất, bạn có
                    thể tải ảnh về hoặc chia sẻ trực tiếp.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h2 className="mb-6 text-2xl font-semibold text-gray-800">Lý Do Nên Chọn Cakewai</h2>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="text-center">
                  <h3 className="mb-2 text-lg font-bold text-pink-500">Dành Cho Người Làm Nội Dung</h3>
                  <p className="text-gray-600">
                    Tạo hình ảnh bánh đẹp mắt cho blog, bài đăng mạng xã hội, và bài viết thu hút người xem.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="mb-2 text-lg font-bold text-pink-500">Dành Cho Thợ Làm Bánh</h3>
                  <p className="text-gray-600">
                    Tìm cảm hứng thiết kế bánh hoặc trình bày ý tưởng cho khách hàng dễ dàng hơn.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="mb-2 text-lg font-bold text-pink-500">Dành Cho Người Kinh Doanh</h3>
                  <p className="text-gray-600">
                    Tạo ảnh quảng cáo và vật liệu truyền thông nhanh chóng, không cần kỹ năng thiết kế.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">Câu Hỏi Thường Gặp</h2>
              <div className="grid gap-6 text-left md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-bold text-pink-500">
                    Có được sử dụng ảnh cho mục đích thương mại không?
                  </h3>
                  <p className="text-gray-600">
                    Có, bạn hoàn toàn có thể sử dụng ảnh cho mục đích thương mại. Xem thêm chi tiết trong Điều Khoản
                    Dịch Vụ của chúng tôi.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-pink-500">Ảnh có phù hợp để in ấn không?</h3>
                  <p className="text-gray-600">
                    Chất lượng ảnh phù hợp để in kích thước nhỏ. Đối với ảnh lớn, độ rõ nét có thể bị giảm.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenImage;
