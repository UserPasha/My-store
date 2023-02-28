import React, {FC} from 'react';
import {Carousel} from "./Carousel/Carousel";
import {Sorting} from "./Sorting/Sorting";

export const Catalog: FC = () => {
    return (
        <div>
            <Sorting/>
            <Carousel products={[]}/>
        </div>
    );
};
