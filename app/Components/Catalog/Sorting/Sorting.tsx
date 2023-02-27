import React, {FC, useState} from 'react';
import style from "./Sorting.module.scss"
import Select, {OnChangeValue} from "react-select";


interface IOption {
    value: string
    label: string
}

export const Sorting: FC = () => {
    // like a props :
    const isMulti = true

    const options: IOption[] = [
        {value: 'italy', label: 'Italy'},
        {value: 'england', label: 'England'},
        {value: 'france', label: 'France'},
        {value: 'spain', label: 'Spain'},
    ]

    const [currentCountries, setCurrentCountries] = useState(['france', 'spain'])

    const getValue = () => {
        return currentCountries
            ? options.filter(option => currentCountries.indexOf(option.value) >= 0)
            : []
    }

    const onChangeHandler = (newValue: OnChangeValue<IOption, boolean>) => {
        setCurrentCountries((newValue as IOption[]).map(val => val.value))
    }


    return (
        <div className={style.wrapper}>
            <h1>Choose Your countries :</h1>
            <Select value={getValue()}
                    onChange={onChangeHandler}
                    options={options}
                    isMulti={isMulti}
                    placeholder={'Choose Your countries'}
                    classNamePrefix='custom-select'
            />
        </div>
    );
};

//  Single Select
// import React, {FC, useState} from 'react';
// import style from "./Sorting.module.scss"
// import Select from "react-select";
//
// export const Sorting: FC = () => {
//     const options = [
//         {value: 'italy', label: 'Italy'},
//         {value: 'england', label: 'England'},
//         {value: 'france', label: 'France'},
//         {value: 'spain', label: 'Spain'},
//     ]
//
//     const [currentCountry, setCurrentCountry] = useState('france')
//
//     const getValue = () => {
//         return currentCountry ? options.find(country => country.value === currentCountry) : ''
//     }
//
//     const onChangeHandler = (newValue: any) => {
//         setCurrentCountry(newValue.value)
//     }
//
//
//     return (
//         <div className={style.wrapper}>
//             <h1>Choose Your country :</h1>
//             <Select value={getValue()} onChange={onChangeHandler} options={options}/>
//         </div>
//     );
// };
