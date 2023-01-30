import {Home} from '../app/Components/Home/Home'
import {NextPage} from "next";
import {Header} from "../app/Components/Header/Header";
import Weather from "../app/Components/Weather/Weather";
import {store} from "../app/store/store";
import {Provider} from "react-redux";

const HomePage: NextPage = () => {
    return (
        <>
            <Provider store={store}>
                <Header/>
                <Home/>
                <Weather/>
            </Provider>
        </>)
}

export default HomePage

