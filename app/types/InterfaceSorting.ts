export enum EnumSorting {
    MORE_EXPENSIVE = 'MORE_EXPENSIVE',
    CHEAPER = 'CHEAPER',
    NEWER = 'NEWER',
    OLDER = 'OLDER'
}

export interface ISortingItem {
    label: 'Price: high to low' | 'Price: low to high' | 'By newest' | 'By oldest'
    value: EnumSorting
}