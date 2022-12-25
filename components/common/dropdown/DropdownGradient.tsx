import { IDropdownProps } from '@lib/domain/common/dropdown';
import Dropdown from 'rc-dropdown';
import 'rc-dropdown/assets/index.css';
import { FC, useCallback } from 'react';

const DropdownGradient: FC<IDropdownProps> = ({ overlay, children, ...rest }) => {
    const onVisibleChange = useCallback(() => {
        console.log('');
    }, []);

    return (
        <Dropdown
            trigger={['click']}
            overlay={overlay}
            animation='slide-up'
            onVisibleChange={onVisibleChange}
            {...rest}
        >
            {children}
        </Dropdown>
    );
};

export default DropdownGradient;
