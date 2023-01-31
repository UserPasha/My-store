import {Home} from '../app/Components/Home/Home'
import {NextPage} from "next";
import {Header} from "../app/Components/Header/Header";
import Weather from "../app/Components/Weather/Weather";
import {persistor, store} from "../app/store/store";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";

const HomePage: NextPage = () => {
    return (
        <>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                <Header/>
                <Home/>
                <Weather/>
                </PersistGate>
            </Provider>
        </>)
}

export default HomePage

