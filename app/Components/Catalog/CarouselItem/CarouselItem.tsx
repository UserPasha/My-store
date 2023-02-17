import React, {FC,  useState} from 'react';
import style from "./CarouselItem.module.scss"
import {useActions} from "../../../hooks/useActions";
import {CarouselButton} from "../CarouselButton/CarouselButton";
import {CarouselVariation} from "../CarouselVariation/CarouselVariation";
import {TypeSize} from "../../../store/cart/cart.types";
import {CarouselNavigation} from "../CarouseelNavigation/CarouselNavigation";
import {ICarousel} from "../../../types/InterfaceCarousel";
import {useCarousel} from "../../../hooks/useCarousel";


export const CarouselItem: FC<ICarousel> = ({product, index}) => {

    const [selectedSize, setSelectedSize] = useState<TypeSize>('30 ml')
    const {selectedItemIndex} = useCarousel()
    const {selectSlide} = useActions()
    const isActive = selectedItemIndex === index

    return (
        <button className={isActive ? style.selected : style.wrapper}>
            <div>
                <div className={style.itemContainer}>

                    <CarouselNavigation product={product}
                                        isActive={isActive}
                                        selectSlide={selectSlide}
                                        index={index}
                    />

                </div>
                <button className={isActive ? style.active : style.header}
                        onClick={() => selectSlide(index)}
                >
                    <span>
                        {product.name}
                    </span>
                </button>
            </div>
            {isActive
                ?
                <>
                    <CarouselVariation productId={product.id} selectedSize={selectedSize}
                                       setSelectedSize={setSelectedSize}/>
                    <CarouselButton product={product} selectedSize={selectedSize} setSelectedSize={setSelectedSize}/>
                </>

                :
                <div className={style.description}>
                    {product.description}
                </div>}

        </button>
    );
};

