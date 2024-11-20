'use client';

import { Button, Dropdown, Tooltip } from 'flowbite-react';
import avatar from '~/assets/react.svg';
import { Link } from 'react-router-dom';
export function CakeDropdown() {
  return (
    <Dropdown label="Dropdown button" dismissOnClick={false}>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
  );
}
const customThemeTooltip = {
    "target": "w-fit",
    "animation": "transition-opacity",
    "arrow": {
      "base": "absolute z-10 h-2 w-2 rotate-45 group",
      "style": {
        "dark": "bg-secondary dark:bg-gray-700",
        "light": "bg-white",
        "auto": "bg-white dark:bg-gray-700"
      },
      "placement": "-4px"
    },
    "base": "absolute z-10 inline-block rounded-lg  text-sm font-medium shadow-sm",
    "hidden": "invisible opacity-0",
    "style": {
      "dark": "bg-secondary text-black dark:bg-gray-700",
      "light": "border border-gray-200 bg-white text-gray-900",
      "auto": "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white"
    },
    "content": "relative z-20"
}
export function UserTooltip() {
  return (
    <Tooltip
      theme={customThemeTooltip}
      content={
        <div>
          <ul className=''>
            <li className=' px-3 py-2 rounded-tl-lg rounded-tr-lg hover:bg-primary'>
              <Link> Tài khoản của tôi</Link>
            </li>
            <li className=' px-3 py-2 hover:bg-primary'>
              <Link>Lịch sử mua hàng</Link>
            </li>
            <li className=' px-3 py-2 hover:bg-primary rounded-bl-lg rounded-br-lg'>
              <Link>Đăng xuất</Link>
            </li>
          </ul>
        </div>
      }
    >
      <img src={avatar} alt="User account" className="h-7 w-7 rounded-full border-2" />
    </Tooltip>
  );
}
