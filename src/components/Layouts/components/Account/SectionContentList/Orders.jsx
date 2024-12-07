import { Table } from "antd";

const AccountOrders = () => {
    const columns = [
        {
            title: 'STT',
            // render: (_, record, index) => {
            //     console.log("check index", index)
            //     return (
            //         <>{(index + 1) + (current - 1) * pageSize}</>
            //     )
            // }
        },
        {
            title: 'Chi tiết sản phẩm',
            dataIndex: 'product-detail',
        },
        {
            title: 'Ngày & Thời gian thanh toán',
            dataIndex: 'payment-date-time',
        },
        {
            title: 'Mã vận chuyển',
            dataIndex: 'transaction-id'
        },
        {
            title: 'Số tiền thanh toán',
            dataIndex: 'pay-amount'
        },
        {
            title: 'Trạng thái đơn hàng',
            dataIndex: 'order-status'
        },
    ];
    const data = [
        {
            "product-detail": "tên sản phẩm, size, số lượng, đơn giá",
            "payment-date-time": "2024-11-24 09:45:28",
            "transaction-id": "584395219",
            "pay-amount": "40.000 vnđ",
            "order-status": "Đang xét duyệt"

        }
    ]
    return (
        <>
            <Table
                columns={columns}
                dataSource={data}
                scroll={{ x: "800" }}
                pagination={false}

            />
        </>
    );
};

export default AccountOrders;
