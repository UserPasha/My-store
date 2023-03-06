import React, {FC, useState} from 'react';
import {Carousel} from "./Carousel/Carousel";
import {Sorting} from "./Sorting/Sorting";
import {EnumSorting} from "../../types/InterfaceSorting";


export const Catalog: FC = () => {

    const [sort, setSort] = useState<EnumSorting>(EnumSorting.NEWER)

    return (
        <div>
            <Sorting sort={sort} setSort={setSort}/>
            <Carousel products={[]}/>
        </div>
    );
};
