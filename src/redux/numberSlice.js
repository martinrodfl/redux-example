/* logica del estado*/

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // se pasa como parametro en createSlice
  value: 0,
};

/* Porcion del estado para usuaios -> crear users y modificar email */
export const numberSlice = createSlice({
  name: "number",
  initialState,
  reducers: {
    addNumber: (state, action) => {
      const { number } = action.payload;
      state.value = number;
    },

    changeNumber: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addNumber, changeNumber } = numberSlice.actions;
export default numberSlice.reducer;
