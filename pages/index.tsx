import {Home} from '../app/Components/Home/Home'
import {NextPage} from "next";
import {Header} from "../app/Components/Header/Header";

const HomePage: NextPage = () => {
    return (
        <>
            <Header/>
            <Home/>
        </>)
}

export default HomePage

