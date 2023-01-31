import style from './Home.module.scss'
import {FC} from "react";
import {Catalog} from "../Catalog/Catalog";


export const Home: FC = () => {
    return <div className={style.wrapper}>
        <Catalog/>
    </div>
}