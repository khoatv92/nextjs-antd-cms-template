import React from 'react';
import dynamic from 'next/dynamic';
import { Typography } from 'antd';

const { Title } = Typography;

const DynamicList = dynamic(() => import('components/List'), {
  ssr: false
});

const App = () => {
  return (
    <>
      <Title level={3}>Lists</Title>
      <DynamicList />
    </>
  );
};

export default App;
