import { Form, Input, Select } from 'antd';
import { useState } from 'react';
import './index.css';
import addressData from './address.json';
import { getCurrentUser, updateUser } from '~/api/apiUser';
import { setUser } from '~/redux/authSlice';
import { useDispatch } from 'react-redux';

const AccountAddress = ({ currentUser, instance }) => {
  const { TextArea } = Input;
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedWard, setSelectedWard] = useState(null);
  const [wardPathWithType, setWardPathWithType] = useState('');
  const [profile, setProfile] = useState(currentUser?.user);
  const dispatch = useDispatch()
  const provinces = Object.keys(addressData)
    .map((key) => ({
      value: key,
      label: addressData[key].name,
    }))
    .sort((a, b) => a.label.localeCompare(b.label));

  const getDistricts = (provinceCode) => {
    if (!provinceCode) return [];
    return Object.keys(addressData[provinceCode]['quan-huyen'])
      .map((key) => ({
        value: key,
        label: addressData[provinceCode]['quan-huyen'][key].name,
      }))
      .sort((a, b) => a.label.localeCompare(b.label));
  };

  const getWards = (provinceCode, districtCode) => {
    if (!provinceCode || !districtCode) return [];
    return Object.keys(addressData[provinceCode]['quan-huyen'][districtCode]['xa-phuong'])
      .map((key) => ({
        value: key,
        label: addressData[provinceCode]['quan-huyen'][districtCode]['xa-phuong'][key].name,
      }))
      .sort((a, b) => a.label.localeCompare(b.label));
  };

  const handleHomeChange = (value, name) => {
    const address = wardPathWithType.includes('Phường') ? wardPathWithType : `Phường ${profile.address.street}, Quận ${profile.address.district}, Thành phố ${profile.address.province}`
    const fullAddress = [value, address]
        .filter(Boolean) // Loại bỏ giá trị null/undefined/rỗng
        .join(', ');
    setProfile((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        [name]: value,
        full_address: name='home_code' ? fullAddress : ''
      }
    }));
  };

  const handleSubmitAddress = async (e) => {
    e.preventDefault();
    try {
      const res = await updateUser(currentUser?.access_token, profile, instance);
      //console.log(res);
      setSelectedProvince(null)
      setSelectedDistrict(null)
      setSelectedWard(null)
    } catch (err) {
      console.log(err);
    }
    refreshUser();
  };
  const refreshUser = async () => {
    const newUser = await getCurrentUser(instance, currentUser?.access_token);
    if (JSON.stringify(newUser) !== JSON.stringify(currentUser.user)) {
      console.log('New user data:', newUser);
      dispatch(setUser({
        ...currentUser,   // Giữ lại token, nhưng thay user mới
        user: newUser,
      }));
      console.log('Update user: ', currentUser);
    }
  };  

  return (
    <>
      <Form layout="vertical">
        <Form.Item label="Tỉnh/Thành phố">
          <Select
            placeholder="Chọn Tỉnh/Thành phố"
            value={profile.address.province || selectedProvince}
            onChange={(value) => {
              setSelectedProvince(value);
              setSelectedDistrict(null);
              setSelectedWard(null);
              setWardPathWithType('');
              const selectedLabel = provinces.find((province) => province.value === value)?.label;
              handleHomeChange(selectedLabel, 'province')
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
            value={profile.address.district || selectedDistrict}
            disabled={!selectedProvince}
            onChange={(value) => {
              setSelectedDistrict(value);
              setSelectedWard(null);
              setWardPathWithType('');
              const selectedLabel = getDistricts(selectedProvince).find((district) => district.value === value)?.label;
              handleHomeChange(selectedLabel, 'district')
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
            value={profile.address.street || selectedWard}
            disabled={!selectedDistrict}
            onChange={(value) => {
              setSelectedWard(value);
              const ward = addressData[selectedProvince]['quan-huyen'][selectedDistrict]['xa-phuong'][value];
              setWardPathWithType(ward.path_with_type);
              const selectedLabel = getWards(selectedProvince, selectedDistrict).find((ward) => ward.value === value)?.label;
              handleHomeChange(selectedLabel, 'street')
            }}
          >
            {getWards(selectedProvince, selectedDistrict).map((ward) => (
              <Select.Option key={ward.value} value={ward.value}>
                {ward.label}
              </Select.Option>
            ))}
          </Select>
          <div className="p-[10px] text-[#525f7f]">{wardPathWithType && <div>{wardPathWithType}</div>}</div>
        </Form.Item>
        <Form.Item label="Tên đường, Tòa nhà, Số nhà">
          <TextArea onChange={(e) => handleHomeChange(e.target.value, 'home_code')} value={profile.address.home_code} required />
        </Form.Item>
        <Form.Item>
          <button
            onClick={handleSubmitAddress}
            className="w-full cursor-pointer rounded-[6px] border-[none] bg-[#664545] p-[10px] text-[1rem] text-[white] hover:bg-[#7a4f4f] active:bg-[#523636]"
            type="submit"
          >
            Cập nhật địa chỉ
          </button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AccountAddress;
