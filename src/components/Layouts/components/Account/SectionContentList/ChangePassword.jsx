import { Button, Form, Input } from "antd";
import './index.css';

const AccountChangePassword = () => {
    return (
        <>
            <Form
                layout="vertical">
                <Form.Item
                    label="Nhập mật khẩu hiện tại"
                    name="current-password"
                    rules={[
                        {
                            required: true,
                            message: 'Hãy nhập mật khẩu hiện tại!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="Nhập mật khẩu mới"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Hãy nhập mật khẩu mới!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="Nhập lại mật khẩu mới"
                    name="retype-password"
                    rules={[
                        {
                            required: true,
                            message: 'Hãy nhập lại mật khẩu mới!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <button
                        className="w-full bg-[#664545] text-[white] p-[10px] text-[1rem] border-[none] rounded-[6px] cursor-pointer hover:bg-[#7a4f4f] active:bg-[#523636]"
                        htmlType="submit"
                    >Đổi mật khẩu</button>
                </Form.Item>
            </Form>
        </>
    );
};

export default AccountChangePassword;
