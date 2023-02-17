import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'my-shop',
    storage,
    whitelist: ['cart']
}

import {cartSlice} from "./cart/cart.slice";
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from "redux-persist";
import {carouselSlice} from "./carousel/carousel.slice";

const rootReducer = combineReducers({
    cart: cartSlice.reducer,
    carousel: carouselSlice.reducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducer>