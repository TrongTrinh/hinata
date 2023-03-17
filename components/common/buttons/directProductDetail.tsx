import { useRouter } from 'next/router';
import { FC, ReactNode, useCallback } from 'react';
interface ButtonDirectProductCardProps {
    link: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    positionItem: any;
    children: ReactNode;
}

const ButtonDirectProductCard: FC<ButtonDirectProductCardProps> = ({ positionItem, link, children }) => {
    const { push } = useRouter();
    const onDirectLink = useCallback(() => {
        localStorage.setItem('ProductPositionItem', positionItem || '');
        push(link);
    }, [link, positionItem, push]);
    return <button onClick={onDirectLink}>{children}</button>;
};

export default ButtonDirectProductCard;
