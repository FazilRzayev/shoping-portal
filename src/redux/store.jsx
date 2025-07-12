
import { configureStore } from '@reduxjs/toolkit'
import appReducer from '../pages/AppSlice'
import productReducer from '../pages/ProductSlice'
import basketReducer from '../pages/basketSlice'

export const store = configureStore({
    reducer: {
        app: appReducer,
        product: productReducer,
        basket: basketReducer
    }

})

export default store
