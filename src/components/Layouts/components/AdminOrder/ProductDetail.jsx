import React, { useState, useEffect } from 'react';
import { Table, InputNumber, Select, notification } from 'antd';

const ProductDetails = ({ selectedProduct, productVariant, setProductVariant }) => {
    const [dataSource, setDataSource] = useState([]);
    const [selectedSize, setSelectedSize] = useState(null); // Lưu size đã chọn

    useEffect(() => {
        if (selectedProduct && selectedProduct.product_variant) {
            const variants = selectedProduct.product_variant.map((variant) => ({
                key: variant?.variant_features, // Dùng variant_features làm key duy nhất
                variant_features: variant?.variant_features || 'N/A',
                price: variant?.price || 0,
                num_in_store: variant?.num_in_store || 0,
                discount: variant?.discount || 0,
                quantity: 1,
            }));
            setDataSource(variants);
    
            // Cập nhật selectedSize mặc định nếu có một hoặc nhiều size
            if (!selectedSize && variants.length > 0) {
                setSelectedSize(variants[0].variant_features);
            }
        } else {
            setDataSource([]);
        }
    }, [selectedProduct]);
    
    const handleQuantityChange = (value, record) => {
        if (value > record.num_in_store) {
            notification.error({
                message: "Số lượng vượt quá tồn kho",
                description: `Số lượng hiện có: ${record.num_in_store}`,
            });
            return;
        }

        const newData = dataSource.map((item) =>
            item.key === record.key ? { ...item, quantity: value } : item
        );
        setDataSource(newData);
        setProductVariant(newData); // Cập nhật state ở parent component
    };

    const handleSizeChange = (value) => {
        setSelectedSize(value); // Cập nhật selectedSize khi người dùng chọn size mới

        // Cập nhật lại dataSource dựa trên size đã chọn
        const updatedData = dataSource.map((item) =>
            item.variant_features === value ? { ...item, quantity: 1 } : item
        );
        setDataSource(updatedData);
        setProductVariant(updatedData); // Cập nhật state ở parent component
    };
//     console.log(selectedProduct);  // Log sản phẩm được chọn
// console.log(dataSource);  // Log dữ liệu trong dataSource
// console.log(selectedSize);  

    const columns = [
        {
            title: 'Size',
            dataIndex: 'variant_features',
            render: (text) => {
                const sizes = selectedProduct?.product_variant.map((variant) => variant?.variant_features);
                return (
                    <Select
                        value={text}
                        style={{ width: '100%' }}
                        options={sizes.map((size) => ({ value: size, label: size }))}
                        onChange={ handleSizeChange}// Cập nhật size khi người dùng chọn
                    />
                );
            },
        },
        {
            title: 'Price',
            dataIndex: 'price',
            render: (text) => <span>{text}</span>, 
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            render: (text, record) => (
                <InputNumber
                    value={text}
                    min={1} 
                    max={record.num_in_store}
                    onChange={(value) => handleQuantityChange(value, record)}
                />
            ),
        },
        {
            title: 'Discount (%)',
            dataIndex: 'discount',
            render: (text) => <span>{text}</span>,
        },
        {
            title: 'Total Price',
            dataIndex: 'total_price',
            render: (_, record) => (
                <span>
                    {(record.price * record.quantity * (1 - record.discount / 100))}
                </span>
            ),
        },
    ];

    const filteredData = selectedProduct && selectedProduct.product_variant && selectedProduct.product_variant.length === 1
    ? dataSource // Nếu chỉ có 1 loại variant, không cần lọc
    : selectedSize
    ? dataSource.filter((item) => item.variant_features === selectedSize) // Nếu có nhiều loại, lọc theo size đã chọn
    : dataSource; // Nếu không có size được chọn, hiển thị tất cả



    return (
        <div>
            <Table
                rowClassName={() => 'editable-row'}
                bordered
                dataSource={filteredData}
                columns={columns}
                pagination={false}
            />
        </div>
    );
};

export default ProductDetails;
