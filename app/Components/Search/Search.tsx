import React, {ChangeEvent, FC, useState} from 'react';
import style from './Search.module.scss'
import searchIcon from "../../../assets/images/Search_icon.svg";
import Image from "next/image";

interface IData {
    name: string
    email: string
    password: string
    address: string
}

export const Search: FC = () => {
    const [searchValue, setSearchValue] = useState<string>('')

    // useState with a lot of lengthy ones
    // const [data, setData] = useState<IData>({
    //     name: '',
    //     email: '',
    //     password: '',
    //     address: ''
    // })
    // <input type='search' value={data.name}
    // onChange={e=>setData(prev=> ({...prev, name: e.target.value}))}/>

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value)
    }

    return (
        <div className={style.wrapper}>
            <div>
                <Image src={searchIcon}
                       width='20'
                       height='20'
                       alt='Search Icon'/>
                <input type='search'
                       className={style.input}
                       placeholder={'search...'}
                       value={searchValue}
                       onChange={onChangeHandler}/>

            </div>

        </div>
    );
};

