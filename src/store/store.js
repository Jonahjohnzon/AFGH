import {configureStore} from '@reduxjs/toolkit'
import slice from '../feature/menu/slice'
export const store = configureStore({
    reducer:{menu:slice},
})