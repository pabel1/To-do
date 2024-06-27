// src/features/todos/todosSlice.js
import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        title: action.payload.title,
        description: action.payload.description,
        status: "Pending",
        date: action.payload.date,
      });
    },
    updateTodoStatus: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.status = action.payload.status;
      }
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, updateTodoStatus, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;
