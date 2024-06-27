// src/features/todos/todosSlice.js
import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        number: state.length + 1,
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
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      if (index !== -1) {
        state.splice(index, 1);
        // Update numbering for remaining todos
        for (let i = index; i < state.length; i++) {
          state[i].number--;
        }
      }
    },
  },
});

export const { addTodo, updateTodoStatus, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;
