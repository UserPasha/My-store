import style from './Home.module.scss'
import {FC} from "react";


export const Home: FC = () => {
    return <div className={style.wrapper}>
        <h1 className={style.title}>Hello</h1>
    </div>
}