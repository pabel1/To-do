import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  route: "/",
};

export const routeSlice = createSlice({
  name: "routeSlice",
  initialState,
  reducers: {
    setRoute: (state, action) => {
      state.route = action.payload;
    },

    clearRoute: (state) => {
      state.route = "/";
    },
  },
});

export const { setRoute, clearRoute } = routeSlice.actions;

export default routeSlice.reducer;
