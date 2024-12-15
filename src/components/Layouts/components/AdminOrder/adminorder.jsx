import { useEffect, useState } from 'react';


function AdminOrder() {


    return (
        <div className="p-4">
            <h1 className="text-3xl font-semibold mb-4">Đơn hàng</h1>

            <div className="overflow-x-auto text-sm">
                {/* Bảng chính */}
                <table className="table-auto border border-gray-400 w-full">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="border border-gray-400 px-4 py-2">STT</th>
                            <th className="border border-gray-400 px-4 py-2">Thông tin khách hàng</th>
                            <th className="border border-gray-400 px-4 py-2">Chi tiết sản phẩm</th>
                            <th className="border border-gray-400 px-4 py-2">Thông tin thanh toán</th>
                            <th className="border border-gray-400 px-4 py-2">Số tiền cần trả</th>
                            <th className="border border-gray-400 px-4 py-2">Trạng thái thanh toán</th>
                            <th className="border border-gray-400 px-4 py-2">Trạng thái giao hàng</th>
                            <th className="border border-gray-400 px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                   
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminOrder;
