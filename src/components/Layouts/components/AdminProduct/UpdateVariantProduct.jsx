import React, { useContext, useEffect, useRef, useState } from 'react';
import { Button, Form, Input, InputNumber, Popconfirm, Table } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

const UpdateVariantProduct = (props) => {
    const { productVariant, setProductVariant } = props;
    const EditableContext = React.createContext(null);
    const EditableRow = ({ index, ...props }) => {
        const [form] = Form.useForm();
        return (
            <Form form={form} component={false}>
                <EditableContext.Provider value={form}>
                    <tr {...props} />
                </EditableContext.Provider>
            </Form>
        );
    };
    const EditableCell = ({
        title,
        editable,
        children,
        dataIndex,
        record,
        handleSave,
        ...restProps
    }) => {
        const [editing, setEditing] = useState(false);
        const inputRef = useRef(null);
        const form = useContext(EditableContext);
        useEffect(() => {
            if (editing) {
                inputRef.current?.focus();
            }
        }, [editing]);

        const toggleEdit = () => {
            setEditing(!editing);
            form.setFieldsValue({
                [dataIndex]: record[dataIndex],
            });
        };

        const save = async () => {
            try {
                const values = await form.validateFields();
                toggleEdit();
                handleSave({
                    ...record,
                    ...values,
                });
            } catch (errInfo) {
                console.log('Save failed:', errInfo);
            }
        };

        let childNode = children;

        if (editable) {
            childNode = editing ? (
                <Form.Item
                    style={{
                        margin: 0,
                    }}
                    name={dataIndex}
                    rules={[
                        {
                            required: true,
                            message: `${title} is required.`,
                        },
                    ]}
                >
                    {dataIndex === 'price' || dataIndex === 'num_in_store' || dataIndex === 'discount' ? (
                        <InputNumber ref={inputRef} onPressEnter={save} onBlur={save} />
                    ) : (
                        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
                    )}
                </Form.Item>
            ) : (
                <div
                    className="editable-cell-value-wrap"
                    style={{
                        paddingRight: 24,
                    }}
                    onClick={toggleEdit}
                >
                    {children}
                </div>
            );
        }

        return <td {...restProps}>{childNode}</td>;
    };

    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        if (productVariant) {
            setDataSource(productVariant.map((item, index) => ({ ...item, key: index })));
        }
    }, [productVariant]);

    const [count, setCount] = useState(productVariant ? productVariant.length : 0);

    const handleDelete = (key) => {
        const newData = dataSource.filter((item) => item.key !== key);
        setDataSource(newData);
        setProductVariant(newData.map(({ key, ...rest }) => rest));
    };

    const handleAdd = () => {
        const newData = {
            key: count,
            variant_features: 'new variant',
            price: 0,
            num_in_store: 0,
            discount: 0,
        };
        setDataSource([...dataSource, newData]);
        setProductVariant([...dataSource, newData].map(({ key, ...rest }) => rest));
        setCount(count + 1);
    };

    const handleSave = (row) => {
        const newData = [...dataSource];
        const index = newData.findIndex((item) => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, {
            ...item,
            ...row,
        });
        setDataSource(newData);
        setProductVariant(newData.map(({ key, ...rest }) => rest));
    };

    const components = {
        body: {
            row: EditableRow,
            cell: EditableCell,
        },
    };

    const columns = [
        {
            title: 'Size',
            dataIndex: 'variant_features',
            editable: true,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            editable: true,
        },
        {
            title: 'Quantity',
            dataIndex: 'num_in_store',
            editable: true,
        },
        {
            title: 'Discount(%)',
            dataIndex: 'discount',
            editable: true,
        },
        {
            title: 'Operation',
            dataIndex: 'operation',
            render: (_, record) =>
                dataSource.length >= 1 ? (
                    <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
                        <a>Delete</a>
                    </Popconfirm>
                ) : null,
        },
    ];

    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record) => ({
                record,
                editable: col.editable,
                dataIndex: col.dataIndex,
                title: col.title,
                handleSave,
            }),
        };
    });

    return (
        <div>
            <Button
                onClick={handleAdd}
                icon={<PlusCircleOutlined />}
                type="primary"
                size="small"
                style={{
                    marginBottom: 16,
                    backgroundColor: "#664545",
                }}
            >
                Thêm variant
            </Button>
            <Table
                components={components}
                rowClassName={() => 'editable-row'}
                bordered
                dataSource={dataSource}
                columns={mergedColumns}
                pagination={false}
            />
        </div>
    );
};

export default UpdateVariantProduct;