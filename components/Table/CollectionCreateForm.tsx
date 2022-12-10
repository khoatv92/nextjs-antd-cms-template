import React from 'react';
import { Form, FormInstance, Input, Modal } from 'antd';
import { InewPosts } from 'interfaces/posts';

interface CollectionCreateFormProps {
  open: boolean;
  confirmLoading: boolean;
  // eslint-disable-next-line no-unused-vars
  onCreate: (values: InewPosts) => void;
  onCancel: () => void;
  form: FormInstance;
}

const CollectionCreateForm: React.FC<CollectionCreateFormProps> = ({
  open,
  form,
  confirmLoading,
  onCreate,
  onCancel
}) => {
  return (
    <Modal
      centered
      open={open}
      title="Create a new collection"
      onCancel={onCancel}
      confirmLoading={confirmLoading}
      onOk={() => {
        form.validateFields().then((values) => {
          onCreate(values);
        });
      }}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="title"
          label="Title"
          rules={[
            { required: true, message: 'Please input the title of collection!' }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="body" label="Body">
          <Input type="textarea" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CollectionCreateForm;
