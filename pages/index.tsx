import React, { useState } from 'react';
import nookies from 'nookies';
import { useRouter } from 'next/router';
import {
  Button,
  Form,
  Input,
  Card,
  Typography,
  Avatar,
  Space,
  Checkbox,
  Spin
} from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

const { Paragraph, Link } = Typography;

const Login = () => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const onFinish = () => {
    setLoading(true);
    setTimeout(() => {
      nookies.set(null, 'signed', 'yes', {
        maxAge: 30 * 24 * 60 * 60,
        path: '/'
      });
      const from = router.query?.from as string;
      router.push(from || '/app/profile');
    }, 1000);
  };

  return (
    <div className="flex-center form-login">
      <div className="text-center">
        <Avatar
          shape="square"
          size={128}
          src="https://cdn-icons-png.flaticon.com/128/2867/2867263.png"
        />
      </div>
      <Card>
        <Paragraph className="text-center">
          Sign in to start your session
        </Paragraph>
        <Spin spinning={loading} tip="Login...">
          <Form
            size="large"
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Please input your email!' },
                { type: 'email', message: 'Please input your email!' }
              ]}
            >
              <Input placeholder="Email" prefix={<MailOutlined />} />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' }
              ]}
            >
              <Input.Password
                placeholder="Password"
                prefix={<LockOutlined />}
              />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Login
              </Button>
            </Form.Item>
          </Form>
          <Space direction="vertical">
            <Link>I forgot my password</Link>
            <Link>Register a new membership</Link>
          </Space>
        </Spin>
      </Card>
    </div>
  );
};

export default Login;
