import { Form, Input, Select } from "antd";
import { useState } from "react";
import './index.css';
import addressData from './address.json';

const AccountAddress = () => {
    const { TextArea } = Input;
    const [selectedProvince, setSelectedProvince] = useState(null);
    const [selectedDistrict, setSelectedDistrict] = useState(null);
    const [selectedWard, setSelectedWard] = useState(null);
    const [wardPathWithType, setWardPathWithType] = useState("");

    const provinces = Object.keys(addressData).map(key => ({
        value: key,
        label: addressData[key].name
    })).sort((a, b) => a.label.localeCompare(b.label));

    const getDistricts = (provinceCode) => {
        if (!provinceCode) return [];
        return Object.keys(addressData[provinceCode]['quan-huyen']).map(key => ({
            value: key,
            label: addressData[provinceCode]['quan-huyen'][key].name
        })).sort((a, b) => a.label.localeCompare(b.label));
    };

    const getWards = (provinceCode, districtCode) => {
        if (!provinceCode || !districtCode) return [];
        return Object.keys(addressData[provinceCode]['quan-huyen'][districtCode]['xa-phuong']).map(key => ({
            value: key,
            label: addressData[provinceCode]['quan-huyen'][districtCode]['xa-phuong'][key].name
        })).sort((a, b) => a.label.localeCompare(b.label));
    };

    return (
        <>
            <Form layout="vertical">
                <Form.Item label="Tỉnh/Thành phố">
                    <Select
                        placeholder="Chọn Tỉnh/Thành phố"
                        onChange={(value) => {
                            setSelectedProvince(value);
                            setSelectedDistrict(null);
                            setSelectedWard(null);
                            setWardPathWithType("");
                        }}
                    >
                        {provinces.map((province) => (
                            <Select.Option key={province.value} value={province.value}>
                                {province.label}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item label="Quận/Huyện">
                    <Select
                        placeholder="Chọn Quận/Huyện"
                        disabled={!selectedProvince}
                        onChange={(value) => {
                            setSelectedDistrict(value);
                            setSelectedWard(null);
                            setWardPathWithType("");
                        }}
                    >
                        {getDistricts(selectedProvince).map((district) => (
                            <Select.Option key={district.value} value={district.value}>
                                {district.label}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item label="Phường/Xã">
                    <Select
                        placeholder="Chọn Phường/Xã"
                        disabled={!selectedDistrict}
                        onChange={(value) => {
                            setSelectedWard(value);
                            const ward = addressData[selectedProvince]['quan-huyen'][selectedDistrict]['xa-phuong'][value];
                            setWardPathWithType(ward.path_with_type);
                        }}
                    >
                        {getWards(selectedProvince, selectedDistrict).map((ward) => (
                            <Select.Option key={ward.value} value={ward.value}>
                                {ward.label}
                            </Select.Option>
                        ))}
                    </Select>
                    <div className=" text-[#525f7f] p-[10px]">

                        {wardPathWithType && <div>{wardPathWithType}</div>}
                    </div>
                </Form.Item>
                <Form.Item label="Tên đường, Tòa nhà, Số nhà">
                    <TextArea />
                </Form.Item>
                <Form.Item>
                    <button
                        className="w-full bg-[#664545] text-[white] p-[10px] text-[1rem] border-[none] rounded-[6px] cursor-pointer hover:bg-[#7a4f4f] active:bg-[#523636]"
                        htmlType="submit"
                    >
                        Cập nhật địa chỉ
                    </button>
                </Form.Item>
            </Form>
        </>
    );
};

export default AccountAddress;