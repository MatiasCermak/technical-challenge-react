import { configureStore } from '@reduxjs/toolkit'
import {apiDataSlice} from "./reducers/apiDataSlice";

export default configureStore({
    reducer: {
        apiData: apiDataSlice.reducer,
    }
})