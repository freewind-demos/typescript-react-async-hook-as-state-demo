import React from 'react';
import {useRemoteMessage} from './api';
import {Inner} from './Inner';

export default function Hello() {
  const result = useRemoteMessage();
  return <div>
    {result.loading && <div>Loading...</div>}
    {result.error && <div>Error: {result.error?.message}</div>}
    {result.result !== undefined && <div>Hello, {result.result}</div>}
    <hr/>
    <Inner />
  </div>;
};
