import { Table } from "antd";
import { useEffect, useState } from "react";
import { getListOrdersByUserId } from "~/api/apiOrder";

const AccountOrders = ({ currentUser, instance }) => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrderList = async () => {
            try {
                const res = await getListOrdersByUserId(
                    currentUser?.access_token,
                    instance,
                    currentUser.user.id
                );

                const data = res || []; 

                const isEmpty =
                    data.length === 0 ||
                    (data.length === 1 && (!data[0]?.order_items || data[0]?.order_items.length === 0));

                if (isEmpty) {
                    setOrders([]); 
                } else {
                    const mappedOrders = data.map((order, index) => ({
                        key: order.id || index, 
                        "product-detail": order.order_items.map((item) => (
                            `${item.name} (Kích thước: ${item.variant}, Số lượng: ${item.buy_quantity}, Giá: ${item.price} VNĐ)`
                        )).join(", "),
                        "payment-date-time": new Date(order.created_at).toLocaleString() || "N/A",
                        "transaction-id": order.shipping_status === "pending" ? "Đang xử lí" : "Đã giao hàng",
                        "order-status": order.order_status === "pending" ? "Đang xử lí" : "Đã thanh toán",
                        "pay-amount": `${order.total_price || 0} VNĐ`,
                        "payment-status": order.payment_info?.is_paid === 1 ? "Đã thanh toán" : "Chưa thanh toán",
                    }));

                    setOrders(mappedOrders);
                }
            } catch (err) {
                console.error(err);
            }
        };

        fetchOrderList();
    }, [currentUser, instance]);

    const columns = [
        {
            title: "STT",
            render: (_, __, index) => index + 1, 
            key: "stt",
        },
        {
            title: "Chi tiết sản phẩm",
            dataIndex: "product-detail",
            key: "product-detail",
        },
        {
            title: "Ngày tạo đơn",
            dataIndex: "payment-date-time",
            key: "payment-date-time",
        },
        {
            title: "Trạng thái giao hàng",
            dataIndex: "transaction-id",
            key: "transaction-id",
        },
        {
            title: "Trạng thái đơn hàng",
            dataIndex: "order-status",
            key: "order-status",
        },
        {
            title: "Số tiền thanh toán",
            dataIndex: "pay-amount",
            key: "pay-amount",
        },
        {
            title: "Trạng thái thanh toán",
            dataIndex: "payment-status",
            key: "payment-status",
        },
    ];

    return (
        <>
            <Table
                columns={columns}
                dataSource={orders}
                scroll={{ x: "800" }} 
                locale={{
                    emptyText: "Chưa có đơn hàng", 
                }}
            />
        </>
    );
};

export default AccountOrders;
