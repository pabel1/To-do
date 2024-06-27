import React from "react";

import TodoDateCard from "./TodoDateCard";
import TodoDataCard from "./TodoDataCard";

const TodoStatusWised = ({ todos, statusButton }) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-y-8 mt-10">
        {todos
          .filter((todo) => todo.status === statusButton)
          .map((todo, index) => {
            const isLastInRow = (index + 1) % 3 === 0; // Check if it's the last element in the row
            const marginClass = isLastInRow ? "" : "mr-5"; // Apply margin only if it's not the last in the row

            return (
              <div key={index} className="col-span-3 md:col-span-1">
                <TodoDateCard todo={todo}></TodoDateCard>
                <div key={index} className={marginClass}>
                  <TodoDataCard todo={todo}></TodoDataCard>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default TodoStatusWised;
