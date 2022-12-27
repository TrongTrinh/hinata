/* eslint-disable @typescript-eslint/no-explicit-any */

export interface IPaginationExpand {
    handleClick: (page: number) => void;
    currentPage: number;
}

export interface IPaginationItem extends IPaginationExpand {
    item: number;
}

export interface IPaginationProps extends IPaginationExpand {
    className?: string;
    totalPages: number;
}
