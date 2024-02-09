import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from '../Slices/States/counterSlice.js'
import userReducer from "../Slices/States/userSlice.js"
import { postApi } from '../Slices/Api/postApiSlice';

export const store = configureStore({
    reducer: {
        counter: CounterReducer,
        user: userReducer,
        [postApi.reducerPath]: postApi.reducer,
        
    },
    middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(postApi.middleware),
})
