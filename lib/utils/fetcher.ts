import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetcher = (url: string, token?: string): Promise<any> =>
  token
    ? axios
        .get(url, { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => res.data)
    : axios.get(url).then((res) => res.data);
