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
      state.value = action.payload ?? 0; // Fallback a 0 si es undefined
    },
    changeNumber: (state, action) => {
      state.value = Number(action.payload) || 0; // Fallback a 0 si es NaN
    },
  },
});

export const { addNumber, changeNumber } = numberSlice.actions;
export default numberSlice.reducer;
