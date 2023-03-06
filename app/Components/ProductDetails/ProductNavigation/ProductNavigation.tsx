import React, {FC} from 'react';
import style from './ProductNavigation.module.scss'
import LeftArrow from './../../../../assets/images/ArrowToTheLeft.svg'
import RightArrow from './../../../../assets/images/ArrowToTheRight.svg'
import Link from "next/link";
import Image from "next/image";
import {useProductNavigation} from "../../../hooks/useProductNavigation";

export const ProductNavigation: FC<{productId: number}> = ({productId}) => {

    const {prevProductSlug, nextProductSlug} = useProductNavigation(productId)

    return (
        <div className={style.wrapper}>
           <Link href={`/product/${prevProductSlug}`}
           className={!prevProductSlug? style.link : ''}>
               <Image src={LeftArrow}
                      className={style.imageArrows}
                      alt={'to the left'}
                      width={'10'}/>
           </Link>
            <Link href={`/product/${nextProductSlug}`}
                  className={!nextProductSlug? style.link : ''}>
                <Image src={RightArrow}
                       className={style.imageArrows}
                       alt={'to the right'}
                       width={'10'}/>
            </Link>
        </div>
    );
};

