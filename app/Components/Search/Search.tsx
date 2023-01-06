import React, {ChangeEvent, FC, useState} from 'react';
import style from './Search.module.scss'
import searchIcon from "../../../assets/images/Search_icon.svg";
import Image from "next/image";


export const Search:FC = () => {
    const [searchValue, setSearchValue] = useState<string>('')
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        setSearchValue(e.currentTarget.value)
    }

    return (
        <div className={style.wrapper}>
            <div>
                <Image src={searchIcon}
                       width='20'
                       height='20'
                       alt='Search Icon'/>
                <input className={style.input}
                       placeholder={'search...'}
                       value={searchValue}
                       onChange={onChangeHandler}/>

            </div>

        </div>
    );
};

