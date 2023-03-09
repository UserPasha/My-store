import {Home} from '../app/Components/Home/Home'
import {NextPage} from "next";
import {Header} from "../app/Components/Header/Header";
import Weather from "../app/Components/Weather/Weather";


const HomePage: NextPage = () => {
    return (
        <>
                    <Header/>
                    <Home/>
                    <Weather/>
        </>)
}

export default HomePage