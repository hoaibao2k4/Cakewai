import { Button, Input, Modal, Select, notification } from "antd";
import { useState } from "react";
import AddVariantProduct from "./AddVariantProduct";
import { createCake } from "~/api/apiCakes";

const AddProductModal = (props) => {
    const { fetchProducts } = props;
    const { TextArea } = Input;
    const [productName, setProductName] = useState("");
    const [imageLink, setImageLink] = useState("");
    const [description, setDescription] = useState("");
    const [productType, setProductType] = useState(null);
    const [productVariant, setProductVariant] = useState([]);



    const [isModalOpen, setIsModelOpen] = useState(false);

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
                description: "Sản phẩm phải có ít nhất 1 variant."
            });
            return;
        }
        const res = await createCake(
            productName,
            imageLink,
            description,
            productType,
            productVariant
        );
        if (res.data) {
            notification.success({
                message: "Add Product",
                description: "Thêm bánh thành công"
            })
            resetAndCloseModal();
            await fetchProducts();
        } else {
            notification.error({
                message: "Error Add Product",
                description: "Thêm thất bại"
            })
        }
    }

    const resetAndCloseModal = () => {
        setIsModelOpen(false);
        setProductType(null);
        setProductName("");
        setImageLink("");
        setDescription("");
        setProductVariant(null);
    }

    return (
        <>
            <Button
                onClick={() => setIsModelOpen(true)}
                type="primary"
                style={{ backgroundColor: "#664545" }}
            >Thêm sản phẩm</Button>

            <Modal
                title="Thêm sản phẩm"
                open={isModalOpen}
                onOk={() => handleSubmitBtn()}
                onCancel={() => resetAndCloseModal()}
                okButtonProps={{ style: { backgroundColor: "#664545" } }}
                maskClosable={false}
                okText={"Thêm"}
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
                        <AddVariantProduct
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
export default AddProductModal;