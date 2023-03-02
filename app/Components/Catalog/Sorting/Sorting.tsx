import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import style from "./Sorting.module.scss"
import Select, {ActionMeta, SingleValue} from "react-select";
import {sortingData} from "./sorting.data";
import {EnumSorting} from "../../../types/InterfaceSorting";

interface IOption {
    value: string
    label: string
}

interface ISorting {
    sort: EnumSorting
    setSort: Dispatch<SetStateAction<EnumSorting>>
}

export const Sorting: FC<ISorting> = ({sort, setSort}) => {
    //export const Sorting: FC = () => {

    const options: IOption[] = sortingData

    const [currentCountry, setCurrentCountry] = useState<IOption[] | string>('france')

    const getValue = () => {
        return currentCountry ? options.find(country => country.value === currentCountry) : ''
    }

    const onChangeHandler = (newValue: SingleValue<string | IOption>, actionMeta: ActionMeta<string | IOption>) => {
        if (newValue) {
            setCurrentCountry((newValue as IOption).value)
        }

    }


    return (
        <div className={style.wrapper}>
            {/*<h1>Choose Your country :</h1>*/}
            <Select value={getValue()}
                    onChange={onChangeHandler}
                    options={options}
                    placeholder={'Filter'}
                    classNamePrefix='custom-select'/>
        </div>
    );
};


