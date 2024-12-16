import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { notification, Popconfirm, Table } from 'antd';
import { useEffect, useState } from 'react';
import { deleteCake, getAllCakes } from '~/api/apiCakes';
import AddProductModal from '~/components/Layouts/components/AdminProduct/AddProduct';
import UpdateProductModal from '~/components/Layouts/components/AdminProduct/UpdateProduct';

const AdminProduct = () => {
    const [data, setData] = useState([]); // Lưu danh sách sản phẩm
    const [loading, setLoading] = useState(true); // Trạng thái loading
    const [error, setError] = useState(null); // Trạng thái lỗi
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null);

    // Gọi API để lấy danh sách sản phẩm
    useEffect(() => {
        fetchProducts();
    }, [dataUpdate]);
    const fetchProducts = async () => {
        try {
            const response = await getAllCakes(); // Gọi API từ hàm getAllCakes
            if (response.code === 200) {
                setData(response.data); // Lưu dữ liệu sản phẩm
            } else {
                setError('Failed to fetch products');
            }
        } catch (err) {
            setError('Error while fetching products');
        } finally {
            setLoading(false); // Tắt trạng thái loading
        }
    };

    const handleDeleteCake = async (id) => {
        try {
            const res = await deleteCake(id);
            if (!res.data) {
                notification.success({
                    message: "Delete Product",
                    description: "Xóa sản phẩm thành công"
                });
                await fetchProducts(); // Fetch updated product list
            } else {
                notification.error({
                    message: "Error delete user",
                    description: "Xóa sản phẩm thất bại"
                });
            }
        } catch (error) {
            notification.error({
                message: "Error delete user",
                description: "Xóa sản phẩm thất bại"
            });
        }
    };


    const columns = [
        {
            title: 'STT',
            dataIndex: 'index',
            render: (_, record, index) => index + 1,

        },
        {
            title: 'Ảnh sản phẩm',
            dataIndex: 'image_link',
            //render ảnh sản phẩm
            render: (text, record) => {
                return (
                    <img
                        src={record['image_link']}
                        alt="image_link"
                        style={{ width: "60px", height: "90px", objectFit: "cover" }}
                    />
                )
            },
        },
        {
            title: 'Tên sản phẩm',
            dataIndex: 'product_name',
            key: 'product_name',
        },

        {
            title: 'Size - Price - Quantity',
            dataIndex: 'product_variant',
            key: 'product_variant',
            render: (variants) => {
                if (!variants) {
                    return <ul></ul>;
                }
                return (
                    <ul>
                        {variants.map((item, index) => (
                            <li key={index}>
                                {item.variant_features ? `${item.variant_features} - ` : ''}{item.price}đ
                                - {item.num_in_store} cái
                            </li>
                        ))}
                    </ul>
                );
            }
        },
        {
            title: 'Loại bánh',
            dataIndex: 'product_type_id',
            render: (text) => {
                const types = {
                    "672ece906add28a7d3c76449": "Bánh sinh nhật",
                    "672ecefe6add28a7d3c7644c": "Bánh mỳ & Bánh khác",
                    "672ecede6add28a7d3c7644b": "Cookies & Mini Cake",
                    "672ecebd6add28a7d3c7644a": "Bánh truyền thống",
                };
                return types[text] || "Unknown";
            }
        },
        {
            title: 'Thao tác',
            dataIndex: 'action',
            render: (_, record) => (
                <div style={{ display: "flex", gap: "20px" }}>
                    <EditOutlined
                        onClick={() => {
                            setDataUpdate(record);
                            setIsModalUpdateOpen(true);
                        }}
                        style={{ cursor: "pointer", color: "orange" }} />
                    <Popconfirm
                        title="Xóa sản phẩm"
                        description="Bạn chắc chắn xóa sản phẩm này?"
                        onConfirm={() => { handleDeleteCake(record._id) }}
                        okText="Yes"
                        cancelText="No"
                        placement="left"
                        okButtonProps={{ style: { backgroundColor: "#664545" } }}
                        cancelButtonProps={{ style: { color: "#664545", borderColor: "#664545" } }}
                        style={{ cursor: "pointer", color: "red" }}
                    >
                        <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
                    </Popconfirm>
                </div>
            ),
        },

    ];
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <div className='p-3 flex justify-between items-end'>
                <h1 className='text-[x-large] font-bold text-[#664545]'>Quản lý sản phẩm</h1>
                <AddProductModal
                    fetchProducts={fetchProducts} />
            </div>
            <div>
                <Table
                    columns={columns}
                    dataSource={data}
                    rowKey="_id"
                    pagination={false}
                    scroll={{ x: true, y: 500 }}
                />
                <UpdateProductModal
                    isModalUpdateOpen={isModalUpdateOpen}
                    setIsModalUpdateOpen={setIsModalUpdateOpen}
                    dataUpdate={dataUpdate}
                    setDataUpdate={setDataUpdate}
                    fetchProducts={fetchProducts}
                />
            </div>
        </div>
    );
}
export default AdminProduct;