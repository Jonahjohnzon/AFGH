import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
    name : 'menu',
    initialState:{open:false,secondopen:false,game:[],cate:null},
    reducers:{
        openmenu: (state, action) =>{
                state.open = action.payload;       
        },
        secondopen: (state,action) =>{
            state.secondopen = action.payload;
        },
        game:(state, action)=>{
            state.game = action.payload
        },
        cate:(state, action)=>{
            state.cate = action.payload
        }
        
    }
})
export const {openmenu, secondopen, game, cate} = slice.actions

export default slice.reducer