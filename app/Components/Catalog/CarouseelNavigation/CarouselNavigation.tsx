import React, {FC} from 'react';
import style from './CarouselNavigation.module.scss'
import Image from "next/image";
import LeftArrow from "../../../../assets/images/ArrowToTheLeft.svg";
import RightArrow from "../../../../assets/images/ArrowToTheRight.svg";
import {ICarouselNavigation} from "../../../types/InterfaceCarousel";


export const CarouselNavigation: FC<ICarouselNavigation> = ({
                                                                product,
                                                                isActive,
                                                                prevIndexHandler,
                                                                nextIndexHandler
                                                            }) => {
    return (
        <div className={style.wrapper}>
            {isActive && <div className={style.buttons}>
                <button className={style.selectItemButton}
                        onClick={prevIndexHandler}>
                    <Image src={LeftArrow}
                           alt={'to the left'}
                           width={'10'}/>
                </button>
                <button className={style.selectItemButton}
                        onClick={nextIndexHandler}>
                    <Image src={RightArrow}
                           alt={'to the right'}
                           width={'10'}/>
                </button>
            </div>}
            <Image className={isActive ? style.imageActive : style.image}
                   src={product.images[0]}
                   alt={product.description}
                   width={200}
                   draggable={false}/>
        </div>
    );
};

