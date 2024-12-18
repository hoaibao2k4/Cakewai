import { RiErrorWarningLine } from 'react-icons/ri';
import { IoClose } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
function ImageAIModal({ isLogin }) {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/auth?mode=signin');
    isLogin(false);
  };

  return (
    <div className="fixed inset-0 z-[102] flex items-center justify-center bg-black/10 bg-opacity-10">
      <div className="relative flex flex-col items-center gap-2 rounded-lg bg-white px-12 py-10 shadow-lg">
        <RiErrorWarningLine size={50} className="text-orange-500" />
        <h3 className="text-center text-xl font-semibold text-slate-800">
          Quý khách cần đăng nhập <br /> để sử dụng tính năng này!
        </h3>
        <button onClick={handleLogin} className="pt-4 text-xl font-medium text-blue-800 hover:text-blue-500">
          Đồng ý
        </button>
        <IoClose
          size={30}
          onClick={() => isLogin(false)}
          className="absolute right-2 top-2 cursor-pointer hover:text-black/60"
        />
      </div>
    </div>
  );
}

export default ImageAIModal;
