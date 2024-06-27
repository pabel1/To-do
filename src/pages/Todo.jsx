import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import todo1 from "../assets/images/todo/todo1.webp";
import todo2 from "../assets/images/todo/todo2.webp";
import todo3 from "../assets/images/todo/todo3.webp";
import CreateTodoModal from "../components/Modals/CreateTodoModal";
import useTitle from "../hooks/useTitle";
import Greeting from "../utiles/Greeting";
import TodoDayWised from "./Shared/Todo/TodoDayWise";
import TodoStatusCard from "./Shared/Todo/TodoStatusCard";

const Todo = () => {
  const [pendingCount, setPendingCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);
  const [ongoingCount, setOngoingCount] = useState(0);

  const [createTodoMOpen, setCreateTodoMOpen] = useState(false);

  const currentDate = moment();

  const defaultDate = currentDate.format("MM/YYYY");

  const [month, setMonth] = useState(defaultDate);
  const [week, setWeek] = useState(currentDate);
  const [todoFilter, setTodoFilter] = useState("View All");
  const [selectedDataMonth, setSelectedDataMonth] = useState(defaultDate);
  const [todos, setTodos] = useState([]);

  useTitle("Todo");

  const allTodo = useSelector((state) => state.todo);
  console.log(allTodo);

  const totalCount = allTodo?.length;

  useEffect(() => {
    if (allTodo) {
      setTodos(allTodo);
      const allTodos = allTodo || [];
      const pendingCount = allTodos.filter(
        (todo) => todo.status === "Pending"
      ).length;
      const completedCount = allTodos.filter(
        (todo) => todo.status === "Completed"
      ).length;
      const ongoingCount = allTodos.filter(
        (todo) => todo.status === "Ongoing"
      ).length;

      setPendingCount(pendingCount);
      setCompletedCount(completedCount);
      setOngoingCount(ongoingCount);
    }
  }, [allTodo]);

  return (
    <>
      <div className="flex justify-between items-center">
        <Greeting page={"To-do"} />
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-4 md:gap-4 gap-2">
        <>
          <TodoStatusCard
            img={todo1}
            title={"Pending List"}
            value={pendingCount}
            total={totalCount}
          />
          <TodoStatusCard
            img={todo2}
            title={"Completed List"}
            value={completedCount}
            total={totalCount}
          />
          <TodoStatusCard
            img={todo3}
            title={"Ongoing List"}
            value={ongoingCount}
            total={totalCount}
          />
        </>
      </div>

      <TodoDayWised
        createTodoMOpen={createTodoMOpen}
        setCreateTodoMOpen={setCreateTodoMOpen}
        setTodos={setTodos}
        todos={allTodo}
      ></TodoDayWised>

      {createTodoMOpen && (
        <CreateTodoModal
          createTodoMOpen={createTodoMOpen}
          setCreateTodoMOpen={setCreateTodoMOpen}
        ></CreateTodoModal>
      )}
    </>
  );
};

export default Todo;
