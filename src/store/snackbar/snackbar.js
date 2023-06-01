import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  severity: "",
  message: "",
};

export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    doSuccess(state) {
      state.open = true;
      state.severity = "success";
      state.message = "Successfully added";
    },
    doError(state, action) {
      state.open = true;
      state.severity = "error";
      state.message = action.payload;
    },
    closeSnackbar(state) {
      state.open = false;
    },
  },
});

export const ActionSnackbar = snackbarSlice.actions;
