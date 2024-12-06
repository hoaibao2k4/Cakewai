'use client';

import { Button, Dropdown, Tooltip } from 'flowbite-react';
import avatar from '~/assets/react.svg';
import { Link } from 'react-router-dom';
export function CakeDropdown() {
  return (
    <Dropdown label="Bộ lọc" dismissOnClick={false}>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
  );
}
const customThemeTooltip = {
  target: 'w-fit',
  animation: 'transition-opacity',
  arrow: {
    base: 'absolute z-10 h-2 w-2 rotate-45 group',
    style: {
      dark: 'bg-slate-50 dark:bg-gray-700',
      light: 'bg-white',
      auto: 'bg-white dark:bg-gray-700',
    },
    placement: '-4px',
  },
  base: 'absolute z-10 inline-block rounded-lg  text-sm font-medium shadow-sm',
  hidden: 'invisible opacity-0',
  style: {
    dark: 'bg-slate-50 text-black dark:bg-gray-700',
    light: 'border border-gray-200 bg-white text-gray-900',
    auto: 'border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white',
  },
  content: 'relative z-20',
};
export function UserTooltip({ onClick }) {
  return (
    <Tooltip
      theme={customThemeTooltip}
      content={
        <div>
          <ul className="">
            <Link>
              <li className="rounded-tl-lg rounded-tr-lg px-3 py-2 hover:bg-slate-100 hover:text-fourth">
                Tài khoản của tôi
              </li>
            </Link>
            <Link>
              <li className="px-3 py-2 hover:bg-slate-100 hover:text-fourth">Lịch sử mua hàng</li>
            </Link>
            <button onClick={() => onClick()}>
              <li className="rounded-bl-lg rounded-br-lg px-3 py-2 hover:bg-slate-100 hover:text-fourth">Đăng xuất</li>
            </button>
          </ul>
        </div>
      }
    >
      <img src={avatar} alt="User account" className="h-7 w-7 rounded-full border-2" />
    </Tooltip>
  );
}
