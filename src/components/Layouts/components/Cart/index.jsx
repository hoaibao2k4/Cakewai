import closeIcon from "~/assets/images/Close.svg"
import thumbNail from "~/assets/images/CakeBestSeller/tessacake.png"
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Cart = () => {
    const [cake, setCakes] = useState(1);

    return (
        <>
            <div className="mt-16 w-full bg-slate-100">
                <div className="mx-[5rem]">
                    <div className="flex h-11 items-center text-primary">
                        <div>
                            <NavLink to="/">Trang chủ </NavLink>
                            <span> &gt;&gt;</span>
                            <span> Giỏ hàng </span>
                        </div>
                    </div>
                    <h1 className="text-center text-5xl font-bold leading-[72px]">Giỏ hàng</h1>
                    <p className="py-5 text-center text-sm font-normal leading-4">
                        Nơi cập nhật những trạng thái tốt nhất
                    </p>
                    <table className="w-full h-auto mx-auto ">
                        <thead className="pt-[20px] px-[var(--Number,] pb-[0px)] items-center ">
                            <tr className="items-center">
                                <th colSpan={2}>Thông tin chi tiết sản phẩm</th>
                                <th>Đơn giá</th>
                                <th>Số lượng</th>
                                <th>Tổng giá</th>
                            </tr>
                        </thead>
                        <tbody className="w-[1106px] pt-[20px] px-[var(--Number,] pb-[0px)] items-center">
                            <tr className="items-center">
                                <td className="text-center align-middle">
                                    <div className="flex justify-center items-center">

                                        <img src={closeIcon} alt="close icon" />
                                    </div>
                                </td>
                                <td className="flex items-center text-center align-middle m-[20px] space-x-4 gap-[20px]">
                                    <div className="flex-shrink-0">
                                        <img src={thumbNail} alt="" width={180} height={180} />
                                    </div>
                                    <div>
                                        <label htmlFor="name-of-cake" className="text-center">Bánh mỳ kem mật ong</label>
                                    </div>
                                </td>
                                <td className="text-center align-middle text-[20px] text-[#664545]">95.000 vnđ</td>
                                <td>
                                    <div className='flex justify-center items-center'>
                                        <button className="h-10 w-10 rounded-tl-lg rounded-bl-lg border border-primary" onClick={() => { cake === 1 ? setCakes(cake) : setCakes(cake - 1) }}>-</button>
                                        <input type="text" value={cake} className='h-10 w-10 border-t border-b border-primary text-center' disabled />
                                        <button className="h-10 w-10 rounded-tr-lg rounded-br-lg border border-primary" onClick={() => setCakes(cake + 1)}>+</button>
                                    </div>
                                </td>
                                <td className="text-center align-middle text-[20px] text-[#664545]">95.000 vnđ</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th colSpan={4} className="text-right italic pr-[20px]">Tổng tiền</th>
                                <th className="text-center align-middle text-[20px] text-[#664545]">95.000 vnđ</th>
                            </tr>
                            <tr className="h-[120px]">
                                <th colSpan={3}></th>
                                <th colSpan={2}>
                                    <div className="float-right pr-[60px]">
                                        <button className="w-[270px] h-[56px] bg-[#664545] text-white rounded-[8px]">Thanh toán</button>
                                    </div>
                                </th>

                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </>

    )
}

export default Cart;