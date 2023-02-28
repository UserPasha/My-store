import {EnumSorting, ISortingItem} from "../../../types/InterfaceSorting";

export const sortingData: ISortingItem[] = [
    {
        label: "Price: high to low",
        value: EnumSorting.MORE_EXPENSIVE
    },
    {
        label: "Price: low to high",
        value: EnumSorting.CHEAPER
    },
    {
        label: "By newest",
        value: EnumSorting.NEWER
    },
    {
        label: "By oldest",
        value: EnumSorting.OLDER
    }
]