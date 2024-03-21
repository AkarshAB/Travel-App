import {configureStore} from '@reduxjs/toolkit'
import userSlice from '../Reducer/Reducer'

const Store=configureStore({
    reducer:{
        user:userSlice,
    }
})

export default Store;
