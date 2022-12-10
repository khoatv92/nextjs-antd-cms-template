import React, { useState } from 'react';
import Link from 'next/link';
import { DesktopOutlined, FileOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, Avatar, MenuProps, Affix } from 'antd';

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(
    <Link href="/app/profile">Profile</Link>,
    'profile',
    <UserOutlined />
  ),
  getItem(<Link href="/app/table">Table</Link>, 'table', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5')
  ]),
  getItem(<Link href="/">Login</Link>, 'login', <FileOutlined />)
];

const SidebarLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Affix offsetTop={0}>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh'
          // position: 'fixed',
          // left: 0,
          // top: 0,
          // bottom: 0
        }}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div style={{ padding: 12 }} className="text-center">
          <Avatar
            shape="square"
            size={64}
            src="https://cdn-icons-png.flaticon.com/128/2867/2867263.png"
          />
        </div>
        <Menu theme="dark" mode="inline" items={items} />
      </Sider>
    </Affix>
  );
};

export default SidebarLayout;
