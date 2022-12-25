interface ConvertParamProps {
    queryParams: any;
}
export const convertParamToBuffer = ({ queryParams }: ConvertParamProps) => {
    const query = JSON.stringify(queryParams);
    return Buffer.from(query).toString('base64') || '';
};

export const getCurrenctySign = (currency: string) =>
    currency === 'JPY' ? '¥' : '＄';
