import { Result } from 'antd';

export default function Custom500() {
  return (
    <div className="flex-center">
      <Result
        status="500"
        title="500"
        subTitle="Sorry, something went wrong."
      />
    </div>
  );
}
