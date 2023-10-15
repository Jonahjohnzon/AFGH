import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
    name : 'menu',
    initialState:{open:false,secondopen:false},
    reducers:{
        openmenu: (state, action) =>{
                state.open = action.payload;       
        },
        secondopen: (state,action) =>{
            state.secondopen = action.payload;
        }
        
    }
})
export const {openmenu, secondopen} = slice.actions

export default slice.reducer