import React, {FC} from 'react';
import style from './CarouselNavigation.module.scss'
import Image from "next/image";
import LeftArrow from "../../../../assets/images/ArrowToTheLeft.svg";
import RightArrow from "../../../../assets/images/ArrowToTheRight.svg";
import {ICarouselNavigation} from "../../../types/InterfaceCarousel";
import {useActions} from "../../../hooks/useActions";

import {cart} from "../../CartItem/DataCart";


export const CarouselNavigation: FC<ICarouselNavigation> = ({product, isActive, selectSlide, index}) => {

    const {nextSlide, prevSlide} = useActions()

    return (
        <div className={style.wrapper}>
            {isActive && <div className={style.buttons}>
                <button className={style.selectItemButton}
                        onClick={()=>prevSlide()}>
                    <Image src={LeftArrow}
                           alt={'to the left'}
                           width={'10'}/>
                </button>
                <button className={style.selectItemButton}
                        onClick={()=>nextSlide({carouselLength: cart.length})}>
                    <Image src={RightArrow}
                           alt={'to the right'}
                           width={'10'}/>
                </button>
            </div>}
            <Image className={isActive ? style.imageActive : style.image}
                   src={product.images[0]}
                   alt={product.description}
                   width={200}
                   draggable={false}
                   onClick={() => selectSlide(index)}/>
        </div>
    );
};

