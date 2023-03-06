import './../styles/styles.scss'
import type { AppProps } from 'next/app'
import {persistor, store} from "../app/store/store";
import {PersistGate} from "redux-persist/integration/react";
import {Header} from "../app/Components/Header/Header";
import {Home} from "../app/Components/Home/Home";
import Weather from "../app/Components/Weather/Weather";
import {Provider} from "react-redux";

const App = ({ Component, pageProps }: AppProps)=> {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Component {...pageProps} />
            </PersistGate>
        </Provider>


    )
}
export default App