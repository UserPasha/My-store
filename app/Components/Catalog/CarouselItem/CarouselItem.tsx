import React, {FC, useState} from 'react';
import {IProduct} from "../../../types/InterfaceProduct";
import Image from "next/image";
import style from "./CarouselItem.module.scss"

export const CarouselItem: FC<{ product: IProduct }> = ({product}) => {

    const [isActive, setIsActive] = useState<boolean>(true)

    return (
        <div className={isActive ? style.selected : style.wrapper}>
            <Image className={isActive ? style.imageActive : style.image}
                   src={product.images[0]}
                   alt={product.description}
                   width={200}/>
            <div className={isActive ? style.active : style.header}>
                <div>
                    {product.name}
                </div>
            </div>
            {!isActive ? <div className={style.description}>
                {product.description}
            </div>
                :
            <button className={style.openButton}> OPEN </button>}

        </div>
    );
};

