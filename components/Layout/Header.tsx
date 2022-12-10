import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import nookies from 'nookies';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { Layout, theme, Avatar, Space, Dropdown, Modal } from 'antd';
import type { MenuProps } from 'antd';

const { Header } = Layout;
const { confirm } = Modal;

const HeaderLayout: React.FC = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken();

  const router = useRouter();

  const showSignOutConfirm = () => {
    confirm({
      centered: true,
      title: 'Are you sure you want to sign out?',
      content: 'Some descriptions',
      okType: 'danger',
      onOk() {
        nookies.destroy(null, 'signed');
        router.push('/');
      }
    });
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <Link href="/app/profile">Profile</Link>,
      icon: <UserOutlined />
    },
    {
      key: '2',
      label: <a onClick={showSignOutConfirm}>Sign out</a>,
      danger: true,
      icon: <LogoutOutlined />
    }
  ];

  return (
    <Header
      style={{
        padding: '0 24px',
        background: colorBgContainer,
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%'
      }}
    >
      <div className="text-right">
        <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <Avatar src="https://i.pravatar.cc/300" />
              John
            </Space>
          </a>
        </Dropdown>
      </div>
    </Header>
  );
};

export default HeaderLayout;
