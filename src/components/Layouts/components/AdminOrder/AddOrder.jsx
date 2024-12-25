import ProductDetails from "./ProductDetail";
import { createOrders, getProductsByType } from "~/api/apiOrder"; 
import { useState } from 'react';
import { Input, Modal, Select, notification } from "antd";
import { useSelector, useDispatch } from 'react-redux';
import { createInstance } from '~/redux/interceptors';
import { loginSuccess } from '~/redux/authSlice';

const AddOrderModal = ({ isModalOpen, handleCloseModal, fetchOrders, handleAddOrder }) => {
    const { TextArea } = Input;
    const [customerName, setCustomerName] = useState("");
    const [customerPhone, setCustomerPhone] = useState("");
    const [productType, setProductType] = useState(null);
    const [productVariant, setProductVariant] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const user = useSelector(state => state.auth.login.currentUser);
    const dispatch = useDispatch();
    const instance = createInstance(user, dispatch, loginSuccess);

    const handleProductTypeChange = async (value) => {
        setProductType(value);
        try {
            const filteredProducts = await getProductsByType(value);
            console.log('Filtered products:', filteredProducts);
            setProducts(filteredProducts);
        } catch (err) {
            notification.error({
                message: "Error", 
                description: err.message || "Không thể lấy danh sách sản phẩm"
            });
        }
    };
    // const handleSubmitBtn = async () => {
    //     if (!customerName || !customerPhone || !productType || !selectedProduct || productVariant.length === 0) {
    //         notification.error({
    //             message: "Validation Error",
    //             description: "Vui lòng điền đầy đủ thông tin"
    //         });
    //         return;
    //     }
    //     // if (productVariant.length === 0) {
    //     //     notification.error({
    //     //         message: "Validation Error",
    //     //         description: "Sản phẩm phải có ít nhất 1 variant."
    //     //     });
    //     //     return;
    //     // }
    //     try {
            
    //             const res = await createOrders(
    //                 user.access_token,
    //                 instance,
    //                 customerName,
    //                 customerPhone,
    //                 productType,
    //                 productVariant,
    //                 { payment_method: "Cash", is_paid: 0 }, 
    //                 totalPrice
    //         );
    //         if (res.data) {
    //             notification.success({
    //                 message: "Add Order",
    //                 description: "Thêm đơn hàng thành công"
    //             });
    //             resetAndCloseModal();
    //             await fetchOrders(); // Gọi hàm fetchOrders để cập nhật danh sách đơn hàng
    //         } else {
    //             notification.error({
    //                 message: "Error Add Order",
    //                 description: "Thêm thất bại"
    //             });
    //         }
    //     } catch (err) {
    //         notification.error({
    //             message: "Error",
    //             description: err.message || "Không thể tạo đơn hàng"
    //         });
    //     }
    // };

    const handleSubmitBtn = async () => {
        if (!customerName || !customerPhone || !productType || !selectedProduct || productVariant.length === 0) {
            notification.error({
                message: "Validation Error",
                description: "Vui lòng điền đầy đủ thông tin"
            });
            return;
        }
    
        try {
            // Tính tổng giá trị đơn hàng
            const totalPrice = productVariant.reduce((acc, item) => {
                return acc + (item.price * item.quantity * (1 - item.discount / 100)); // Tổng tiền cần trả
            }, 0);
    
            const newOrder = {
                id: Date.now(), 
                name: customerName,
                phone: customerPhone,
                order_items: productVariant.map((item) => ({
                    name: selectedProduct.product_name,
                    variant: item.variant_features,
                    buy_quantity: item.quantity,
                })),
                payment_info: { payment_method: "Cash", is_paid: 0 }, // Giả sử thanh toán bằng tiền mặt
                total_price: totalPrice,
                order_status: 'Đang xử lý', // Giả sử trạng thái mặc định
                shipping_status: 'Đang xử lý', // Giả sử trạng thái mặc định
            };    
            notification.success({
                message: "Add Order",
                description: "Thêm đơn hàng thành công"
            });
        
            // Gọi handleAddOrder để cập nhật đơn hàng
            handleAddOrder(newOrder);
            resetAndCloseModal(); // Đóng modal và reset các giá trị form
        } catch (err) {
            notification.error({
                message: "Error",
                description: err.message || "Không thể tạo đơn hàng"
            });
        }
    };
    

    const resetAndCloseModal = () => {
        handleCloseModal();
        setProductType(null);
        setCustomerName("");
        setCustomerPhone("");
        setProductVariant([]);
        setTotalPrice(0);
        setProducts([]);
        setSelectedProduct(null);
    };

    return (
        <>
            <Modal
                title="Thêm đơn hàng"
                open={isModalOpen} // Thay thế visible bằng open
                onOk={handleSubmitBtn}
                onCancel={resetAndCloseModal}
                okButtonProps={{ style: { backgroundColor: "#664545" } }}
                maskClosable={false}
                okText="Thêm"
                width={1000}
            >
                <div
                    style={{
                        display: "flex",
                        gap: "15px",
                        flexDirection: "column",
                    }}
                >
                    <div>
                        <span>Tên khách hàng</span>
                        <Input
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                        />
                    </div>

                    <div>
                        <span>Số điện thoại</span>
                        <Input
                            value={customerPhone}
                            onChange={(e) => setCustomerPhone(e.target.value)}
                        />
                    </div>

                    <div>
                        <span>Loại bánh</span>
                        <Select
                            style={{ width: "100%" }}
                            placeholder="Chọn loại bánh"
                            options={[
                                { value: '672ece906add28a7d3c76449', label: 'Bánh sinh nhật' },
                                { value: '672ecefe6add28a7d3c7644c', label: 'Bánh mỳ & Bánh khác' },
                                { value: '672ecede6add28a7d3c7644b', label: 'Cookies & Mini Cake' },
                                { value: '672ecebd6add28a7d3c7644a', label: 'Bánh truyền thống' }
                            ]}
                            value={productType}
                            onChange={handleProductTypeChange}
                        />
                    </div>

                    <div>
                        <span>Sản phẩm</span>
                        <Select
                            style={{ width: "100%" }}
                            placeholder="Chọn sản phẩm" 
                            options={products.map(product => ({ value: product._id, label: product.product_name }))} 
                            value={selectedProduct?._id}
                            onChange={(value) => {
                                const product = products.find((p) => p._id === value); 
                                setSelectedProduct(product);
                            }}
                        /> 

                    </div>

                    <div>
                        <span>Chi tiết sản phẩm</span>
                        <ProductDetails
                            selectedProduct={selectedProduct}
                            productVariant={productVariant}
                            setProductVariant={setProductVariant}
                        />
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default AddOrderModal;