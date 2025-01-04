import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  leftMenu: false,
}

const conditionSlice = createSlice({
  name: "condition",
  initialState,
  reducers: {
    changeLeftMenu: (state, action) => {
      state.leftMenu = !state.leftMenu
    },
  }
})
export const { changeLeftMenu } =
  conditionSlice.actions;
export default conditionSlice.reducer;