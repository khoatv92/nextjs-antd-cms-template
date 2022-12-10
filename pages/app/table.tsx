import React, { useState } from 'react';
import {
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleFilled
} from '@ant-design/icons';
import {
  Form,
  Typography,
  Table,
  Space,
  Button,
  Card,
  Modal,
  message
} from 'antd';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Search from 'components/Table/Search';
import CollectionCreateForm from 'components/Table/CollectionCreateForm';
import { posts, newPosts } from 'api/posts';
import { InewPosts } from 'interfaces/posts';

const { Title } = Typography;
const { confirm } = Modal;

const Tables: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: posts
  });

  const { mutate, isLoading: confirmLoading } = useMutation({
    mutationFn: newPosts,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    }
  });

  const showDeleteConfirm = () => {
    confirm({
      centered: true,
      title: 'Are you sure delete this task?',
      icon: <ExclamationCircleFilled />,
      content: 'Some descriptions',
      okType: 'danger',
      onOk() {
        message.success('Delete successful');
      }
    });
  };

  const onCreate = (values: InewPosts) => {
    mutate({
      id: 1,
      title: values.title,
      body: values.body,
      userId: 1
    });
    message.success('Add new successful');
    setOpen(false);
  };

  const columns = [
    {
      title: 'User Id',
      dataIndex: 'userId',
      key: 'userId'
    },
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: 'Body',
      dataIndex: 'body',
      key: 'body'
    },
    {
      title: '',
      dataIndex: 'action',
      key: 'action',
      render: () => (
        <Space>
          <Button
            onClick={() => {
              setOpen(true);
              form.resetFields();
            }}
            shape="circle"
            size="small"
            type="primary"
            icon={<EditOutlined />}
          />
          <Button
            onClick={showDeleteConfirm}
            shape="circle"
            size="small"
            type="primary"
            danger
            icon={<DeleteOutlined />}
          />
        </Space>
      )
    }
  ];

  return (
    <>
      <Title level={3}>Table</Title>
      <Space direction="vertical" size="large" style={{ display: 'flex' }}>
        <Card>
          <Search />
        </Card>
        <Table
          rowKey="id"
          loading={isLoading}
          scroll={{
            x: 'auto'
          }}
          size="small"
          dataSource={data}
          columns={columns}
        />
      </Space>
      <CollectionCreateForm
        form={form}
        confirmLoading={confirmLoading}
        open={open}
        onCreate={onCreate}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export default Tables;
