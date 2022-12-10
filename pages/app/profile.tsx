import React, { useEffect, useState } from 'react';
import { Typography, Card, Descriptions, Row, Col, Avatar, Tabs } from 'antd';
import Settings from 'components/UserInfo/Settings';
import Activity from 'components/UserInfo/Activity';

const { Title } = Typography;

const Profile: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const itemsTab = [
    {
      label: 'Activity',
      key: 'item-1',
      children: <Activity loading={loading} />
    }, // remember to pass the key prop
    { label: 'Settings', key: 'item-2', children: <Settings /> }
  ];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Title level={3}>User Info</Title>
      <Row gutter={[16, 16]}>
        <Col flex={1}>
          <Card loading={loading}>
            <div className="text-center">
              <Avatar size={64} src="https://i.pravatar.cc/300" />
              <h4>John</h4>
            </div>
            <Descriptions bordered>
              <Descriptions.Item label="Email" span={3}>
                John@email.com
              </Descriptions.Item>
              <Descriptions.Item label="Address" span={3}>
                Newyork
              </Descriptions.Item>
              <Descriptions.Item label="Order time">
                2018-04-24 18:00:00
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>
        <Col flex={4}>
          <Card>
            <Tabs items={itemsTab} />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Profile;
