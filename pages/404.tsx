import { Result } from 'antd';

export default function Custom404() {
  return (
    <div className="flex-center">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
      />
    </div>
  );
}
