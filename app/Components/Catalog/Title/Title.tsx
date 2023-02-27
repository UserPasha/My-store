import React, {FC, PropsWithChildren} from 'react';
import style from './Title.module.scss'

export const Title:FC<PropsWithChildren<unknown>> = ({children}) => {
    return (
        <h1 className={style.title}>
            {children}
        </h1>
    );
};

