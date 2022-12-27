import { IDropdownProps } from '@lib/domain/common/dropdown';
import Dropdown from 'rc-dropdown';
import 'rc-dropdown/assets/index.css';
import { FC } from 'react';

const DropdownDefault: FC<IDropdownProps> = ({ overlay, children, ...rest }) => {
    return (
        <Dropdown trigger={['click']} overlay={overlay} animation='slide-up' overlayClassName='z-1' {...rest}>
            {children}
        </Dropdown>
    );
};

export default DropdownDefault;
