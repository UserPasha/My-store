import React, {FC} from 'react';
import style from './MenuItem.module.scss'
import {IMenuLink} from "../../types/InterfaceMenuItem";
import Link from "next/link";

interface IMenuItem {
    item: IMenuLink
}
export const MenuItem: FC<IMenuItem> = ({item}) => {
    return (
        <li className={style.wrapper}>
            <Link href={item.link}>
                {item.name}
            </Link>
        </li>
    );
};

