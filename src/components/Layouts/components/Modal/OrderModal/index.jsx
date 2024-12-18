import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function OrderModal({isOrder}) {
    const navigate = useNavigate()
    const backToHome = () => {
        isOrder(false)
        navigate('/')
    }
    const continuetoShopping = () => {
        isOrder(false)
        navigate('/category?page=1')
    }
    return (
        <div className="fixed inset-0 z-[102] flex items-center justify-center bg-black/20 bg-opacity-10">
        <div className="rounded-lg bg-slate-50 px-12 py-10 shadow-lg flex flex-col items-center gap-2">
            <FaCheckCircle size={50} className="text-green-400"/>
            <h2 className="text-primary font-bold text-3xl">Đặt hàng thành công!</h2>
          <h3 className="text-lg font-semibold text-slate-800 text-center">Cakewai sẽ liên hệ Quý khách để xác nhận đơn hàng trong thời gian sớm nhất!</h3>
          <div className="flex gap-20 mt-4">
            <button onClick={backToHome} className="text-primary border-primary border-2 hover:text-fourth px-[18px] py-1 rounded-xl text-xl font-medium">Về trang chủ</button>
            <button onClick={continuetoShopping} className="text-slate-100 hover:text-third px-4 py-2 bg-primary rounded-xl text-xl font-medium">Tiếp tục mua hàng</button>
          </div>
        </div>
      </div>
    )
}

export default OrderModal;