import { BadgeCheck } from 'lucide-react';
export function SuccessPopup () {
    return (
        <div className="fixed inset-0 z-[1002] flex items-center justify-center bg-black/10 bg-opacity-10">
        <div className="rounded-lg bg-black/50 px-6 py-20 shadow-lg flex items-center gap-2">
          <BadgeCheck className='text-green-300'/>
          <h3 className="text-xl font-semibold text-green-300">Thêm vào giỏ hàng thành công!</h3>
        </div>
      </div>
    )
}