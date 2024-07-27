import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './conterSlice'
import gameSlice from "./gameSlice";

const counterStore = configureStore({
  reducer:{
    // this names are your useState names for showing info 
    counter: counterSlice,
    game: gameSlice
  },
})

export default counterStore;