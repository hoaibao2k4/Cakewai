import { Input, Modal, Select, notification } from "antd";
import { useEffect, useState } from "react";
import UpdateVariantProduct from "./UpdateVariantProduct";
import { updateCake } from "~/api/apiCakes";

const UpdateProductModal = (props) => {
    const { isModalUpdateOpen, setIsModalUpdateOpen, dataUpdate, setDataUpdate, fetchProducts } = props;
    const { TextArea } = Input;
    const [id, setId] = useState("");
    const [productName, setProductName] = useState("");
    const [imageLink, setImageLink] = useState("");
    const [description, setDescription] = useState("");
    const [productType, setProductType] = useState(null);
    const [productVariant, setProductVariant] = useState([]);

    useEffect(() => {
        if (dataUpdate) {
            console.log("check dataUpdate", dataUpdate)
            setId(dataUpdate._id);
            setProductName(dataUpdate.product_name);
            setImageLink(dataUpdate.image_link);
            setDescription(dataUpdate.description);
            setProductType(dataUpdate.product_type_id);
            setProductVariant(dataUpdate.product_variant || []);
        }
    }, [dataUpdate])

    const handleSubmitBtn = async () => {
        if (!productName || !imageLink || !description || !productType) {
            notification.error({
                message: "Validation Error",
                description: "Vui lòng điền đầy đủ thông tin"
            });
            return;
        }
        if (productVariant.length === 0) {
            notification.error({
                message: "Validation Error",
                description: "Bảng variant phải có ít nhất 1 dòng."
            });
            return;
        }
        const res = await updateCake(
            id,
            productName,
            imageLink,
            description,
            productType,
            productVariant
        );
        if (res.data) {
            notification.success({
                message: "Update Product",
                description: "Cập nhật bánh thành công"
            })
            resetAndCloseModal();
            await fetchProducts();
        } else {
            notification.error({
                message: "Error Update Product",
                description: "Cập nhật thất bại"
            })
        }
    }

    const resetAndCloseModal = () => {
        setIsModalUpdateOpen(false);
        setId("");
        setProductType(null);
        setProductName("");
        setImageLink("");
        setDescription("");
        setProductVariant([]);
        setDataUpdate(null);
    }

    return (
        <>
            <Modal
                title="Cập nhật sản phẩm"
                open={isModalUpdateOpen}
                onOk={() => handleSubmitBtn()}
                onCancel={() => resetAndCloseModal()}
                okButtonProps={{ style: { backgroundColor: "#664545" } }}
                maskClosable={false}
                okText={"Cập nhật"}
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
                        <span>Loại bánh</span>
                        <Select
                            style={{
                                width: "100%",
                            }}
                            placeholder="Chọn loại bánh"
                            options={[
                                { value: '672ece906add28a7d3c76449', label: 'Bánh sinh nhật' },
                                { value: '672ecefe6add28a7d3c7644c', label: 'Bánh mỳ & Bánh khác' },
                                { value: '672ecede6add28a7d3c7644b', label: 'Cookies & Mini Cake' },
                                { value: '672ecebd6add28a7d3c7644a', label: 'Bánh truyền thống' }
                            ]}
                            value={productType}
                            onChange={(value) => setProductType(value)}
                        />
                    </div>


                    <div>
                        <span>Sản phẩm</span>
                        <Input
                            value={productName}
                            onChange={(event) => setProductName(event.target.value)}
                        />
                    </div>
                    <div>
                        <span>Image Link</span>
                        <Input
                            value={imageLink}
                            onChange={(event) => setImageLink(event.target.value)}
                        />
                    </div>
                    <div>
                        <UpdateVariantProduct
                            productVariant={productVariant}
                            setProductVariant={setProductVariant}
                        />
                    </div>
                    <div>
                        <span>Description</span>
                        <TextArea
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                            rows={4}
                        />
                    </div>

                </div>
            </Modal >
        </>

    )
}
export default UpdateProductModal;