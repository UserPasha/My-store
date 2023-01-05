import style from './Header.module.scss'
import {FC} from "react";
import {Menu} from "../Menu/Menu";
import {Search} from "../Search/Search";
import {Cart} from "../Cart/Cart";

export const Header: FC = () => {
    return <header className={style.wrapper}>
        <Menu/>
        <Search/>
        <Cart/>
    </header>
}