import React, {FC} from 'react';
import {useRemoteMessage} from './api';

type Props = {}

export const Inner: FC<Props> = ({}) => {
  const result = useRemoteMessage()
  return <div>Inner: {result.result}</div>;
}
