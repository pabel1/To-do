import React from "react";
import TodoDateCard from "./TodoDateCard";
import TodoDataCard from "./TodoDataCard";
import moment from "moment";
import { scrollbar } from "../../../utiles/tailwindClasses";
import NoDataComponent from "../../../utiles/NoDataComponent";

const TodoWeekorMonthWise = ({ todos, todoFilter }) => {
  let filteredTodos = todos;

  if (todoFilter !== "View All") {
    filteredTodos = todos?.filter((todo) => todo?.status === todoFilter);
  }

  const groupedTodosByDate = filteredTodos.reduce((acc, todo) => {
    const date = moment(todo.forDate).format("YYYY-MM-DD");
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(todo);
    return acc;
  }, {});

  const dates = Object.keys(groupedTodosByDate);

  if (filteredTodos.length <= 0) {
    return <NoDataComponent />;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10 overflow-x-auto">
      {dates.map((date, index) => (
        <div key={index}>
          <TodoDateCard date={date} />
          <div
            style={{
              maxHeight: `${
                groupedTodosByDate[date].length > 2 ? "400px" : "auto"
              }`,
            }}
            className={` mt-0 ${scrollbar}`}
          >
            {groupedTodosByDate[date].map((todo, index) => (
              <div className={`my-[1rem]`} key={index}>
                <TodoDataCard todo={todo} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoWeekorMonthWise;
