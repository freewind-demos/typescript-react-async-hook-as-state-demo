import {useAsync} from 'react-async-hook';
import fetchRemoteMessage from './fetchRemoteMessage';

export function useRemoteMessage()  {
  return useAsync(fetchRemoteMessage, ['RemoteHello1'])
}
