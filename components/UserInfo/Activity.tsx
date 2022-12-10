import React from 'react';
import { List, Typography } from 'antd';

interface Props {
  loading: boolean;
}

const Activity: React.FC<Props> = ({ loading }) => {
  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.'
  ];

  return (
    <List
      loading={loading}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Typography.Text mark>[01/12/2022 15:00]</Typography.Text> {item}
        </List.Item>
      )}
    />
  );
};

export default Activity;
