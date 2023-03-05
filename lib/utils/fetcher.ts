import { APP_CONFIG } from '@lib/constants';
import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetcher = (url: string, token?: string): Promise<any> =>
    token
        ? axios
              .get(`${APP_CONFIG.HOST}${url}`, { headers: { Authorization: `Bearer ${token}` } })
              .then((res) => res.data)
        : axios.get(`${APP_CONFIG.HOST}${url}`).then((res) => res.data);
