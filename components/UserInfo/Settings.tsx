import React, { useState } from 'react';
import { Button, Form, Input, Select, Spin, message } from 'antd';

const { Option } = Select;

const Settings: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = () => {
    setLoading(true);
    setTimeout(() => {
      message.success('Update successful');
      setLoading(false);
    }, 1000);
  };

  return (
    <Spin spinning={loading}>
      <Form layout="vertical" onFinish={onFinish} autoComplete="off">
        <Form.Item name="note" label="Note" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
          <Select
            placeholder="Select a option and change input text above"
            allowClear
          >
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Save changes
          </Button>
        </Form.Item>
      </Form>
    </Spin>
  );
};

export default Settings;
