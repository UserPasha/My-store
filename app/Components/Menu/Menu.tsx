import React, {FC} from 'react';
import style from './Menu.module.scss'
import Link from "next/link";
import Image from "next/image";
import logoImage from './../../../assets/images/logoJija.png'
import {menu} from "../MenuItem/DataMenu";
import {MenuItem} from "../MenuItem/MenuItem";

export const Menu: FC = () => {
    return (
        <div className={style.wrapper}>
           <Link href='/'>
               <Image src={logoImage}
                      width='500'
                      height='250'
                      alt='Logo'/>
           </Link>

            <nav className={style.navigation}>
                <ul className={style.list}>
                    {menu.map(item=><MenuItem key={item.name} item={item}/>)}
                </ul>
            </nav>
        </div>
    );
};

