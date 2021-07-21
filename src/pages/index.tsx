import { useEffect, useState } from 'react';
import { Input, Result, Row } from 'antd';
import { testWasm } from '../utils/workers';

export default function () {
  const [worker] = useState(new testWasm());
  const [message, setMessage] = useState('');
  useEffect(() => {
    worker.onmessage = async ({ data }) => {
      setMessage(data);
    };
  }, []);
  return (
    <Result
      status="success"
      title={message}
      extra={[<Input.Search onSearch={(value) => worker.postMessage(value)} />]}
    />
  );
}
