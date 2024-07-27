import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
    name:'score',
    initialState:{
       scorecard:0,
       level:1
    },
    reducers:{
        increseScore:(state,) =>{
            state.scorecard += 1
        },
        increseLevel:(state) =>{
            state.level += 1
        }
    }
})

export const {increseScore, increseLevel} = gameSlice.actions;
export default gameSlice.reducer