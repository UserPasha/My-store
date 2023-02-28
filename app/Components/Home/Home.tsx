import style from './Home.module.scss'
import {FC} from "react";
import {Catalog} from "../Catalog/Catalog";
import {Title} from "../Catalog/Title/Title";
import {Sorting} from "../Catalog/Sorting/Sorting";


export const Home: FC = () => {
    return <div className={style.wrapper}>
        <Title>
          Choose your taste
        </Title>
        <Catalog/>
    </div>
}