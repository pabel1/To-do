import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import todoseReducer from "../feature/todo/todosSlice";

export const store = configureStore({
  reducer: {
    todo: todoseReducer,
  },
  devTools: import.meta.env.VITE_ENV !== "PRODUCTION",
  middleware: (gDM) => gDM().concat(),
});

setupListeners(store.dispatch);
