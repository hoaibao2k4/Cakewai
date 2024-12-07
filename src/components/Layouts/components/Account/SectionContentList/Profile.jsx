import { Form, Input } from "antd";
import './index.css';

const AccountProfile = () => {
    return (
        <>
            <Form
                layout="vertical">
                <Form.Item
                    label="Họ tên"
                    name="username"
                    rules={[
                        {
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            type: "email",
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input disabled />
                </Form.Item>
                <Form.Item
                    label="Số điện thoại"
                    name="phonenumber"
                    rules={[
                        {
                            type: "string",
                            message: 'Vui lòng nhập số điện thoại'
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item>
                    <button
                        className="w-full bg-[#664545] text-[white] p-[10px] text-[1rem] border-[none] rounded-[6px] cursor-pointer hover:bg-[#7a4f4f] active:bg-[#523636]"
                        htmlType="submit"

                    >Cập nhật hồ sơ</button>
                </Form.Item>
            </Form>
        </>
    )
};

export default AccountProfile;
