import moment from "moment";
import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { HiOutlineDocumentText } from "react-icons/hi";
import {
  HiOutlineDocumentChartBar,
  HiOutlineDocumentCheck,
} from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { updateTodoStatus } from "../../../feature/todo/todosSlice";
import { scrollbar } from "../../../utiles/tailwindClasses";
import TodoDataCard from "./TodoDataCard";

function getStyle(style, snapshot) {
  const animationClass = snapshot.isDragging
    ? "border-red-500 animate-flash"
    : "";

  if (!snapshot.isDropAnimating) {
    return style;
  }

  const { duration } = snapshot.dropAnimation;

  // patching the existing style
  return {
    ...style,
    transition: `${duration + 0.1}s`,
    animation: animationClass,
  };
}

const TodoColumn = ({
  droppableId,
  todos,
  addBtn,
  createTodoMOpen,
  setCreateTodoMOpen,
}) => (
  <Droppable droppableId={droppableId} type="drag">
    {(provided, snapshot) => (
      <div
        style={{ height: todos?.length > 2 ? "400px" : "200px" }}
        ref={provided.innerRef}
        {...provided.droppableProps}
        className={`overflow-y-auto pt-4 flex flex-col gap-4 ${scrollbar} ${
          snapshot.isDraggingOver ? "bg-gray-50 mt-4" : "transparent"
        }`}
      >
        {todos &&
          todos?.map((todo, index) => (
            <Draggable
              key={todo?.id}
              draggableId={todo?.id.toString()}
              index={index}
            >
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  // isDragging={snapshot.isDragging && !snapshot.isDropAnimating}
                  style={getStyle(provided.draggableProps.style, snapshot)}
                >
                  <TodoDataCard todo={todo} />
                </div>
              )}
            </Draggable>
          ))}
        {addBtn && (
          <div
            onClick={() => setCreateTodoMOpen(!createTodoMOpen)}
            className={`${
              snapshot.isDraggingOver ? "hidden" : ""
            }  cursor-pointer text-primaryColor transition duration-300 bg-white font-semibold rounded-lg px-2 py-3 border border-gray-300 hover:border-primaryColor flex items-center mb-2 ${
              todos?.length > 0 ? "bottom-0" : ""
            }`}
          >
            <button className="ml-2">
              <span className="text-lg mr-1">+</span> Create List
            </button>
          </div>
        )}
        {provided.placeholder}
      </div>
    )}
  </Droppable>
);

const TodoDayWised = ({
  todos,
  setTodos,
  createTodoMOpen,
  setCreateTodoMOpen,
}) => {
  const dispatch = useDispatch();
  const [ongoing, setOngoing] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [others, setOthers] = useState([]);

  useEffect(() => {
    const sortedTodos = [...todos].sort((a, b) => b.id - a.id);
    const ongoingDueToday = sortedTodos.filter(
      (todo) => todo.status === "Ongoing"
    );
    const completedDueToday = sortedTodos.filter(
      (todo) => todo.status === "Completed"
    );
    const othersDueToday = sortedTodos.filter(
      (todo) => todo.status !== "Ongoing" && todo.status !== "Completed"
    );

    setOngoing(ongoingDueToday);
    setCompleted(completedDueToday);
    setOthers(othersDueToday);
  }, [todos]);
  const handleDragEnd = async (result) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;

    const movedTodo = todos.find((todo) => todo?.id === draggableId);
    const updatedTodos = [...todos];
    if (
      (source.droppableId === "ongoing" ||
        source.droppableId === "completed") &&
      destination.droppableId === "alldayother"
    ) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      // Reordering within the same column
      const sourceList =
        source.droppableId === "alldayother"
          ? others
          : source.droppableId === "ongoing"
          ? ongoing
          : completed;

      const updatedList = Array.from(sourceList);
      updatedList.splice(source.index, 1);
      updatedList.splice(destination.index, 0, movedTodo);

      if (source.droppableId === "alldayother") setOthers(updatedList);
      else if (source.droppableId === "ongoing") setOngoing(updatedList);
      else setCompleted(updatedList);
    } else {
      // Moving between columns
      const sourceList =
        source.droppableId === "alldayother"
          ? others
          : source.droppableId === "ongoing"
          ? ongoing
          : completed;

      const destinationList =
        destination.droppableId === "alldayother"
          ? others
          : destination.droppableId === "ongoing"
          ? ongoing
          : completed;

      const sourceListUpdated = Array.from(sourceList);
      const destinationListUpdated = Array.from(destinationList);

      sourceListUpdated.splice(source.index, 1);
      destinationListUpdated.splice(destination.index, 0, movedTodo);

      if (source.droppableId === "alldayother") setOthers(sourceListUpdated);
      else if (source.droppableId === "ongoing") setOngoing(sourceListUpdated);
      else setCompleted(sourceListUpdated);

      if (destination.droppableId === "alldayother")
        setOthers(destinationListUpdated);
      else if (destination.droppableId === "ongoing")
        setOngoing(destinationListUpdated);
      else setCompleted(destinationListUpdated);

      const updatedMovedTodo = { ...movedTodo };

      // Update the status of the copied object to match the destination column
      updatedMovedTodo.status =
        destination.droppableId.charAt(0).toUpperCase() +
        destination.droppableId.slice(1);

      console.log(updatedMovedTodo);
      dispatch(
        updateTodoStatus({
          id: updatedMovedTodo.id,
          status: updatedMovedTodo.status,
        })
      );
    }
    setTodos(updatedTodos);
  };
  // const handleDragEnd = async (result) => {
  //   const { source, destination, draggableId } = result;

  //   if (!destination) return;

  //   const updatedTodos = Array.from(todos);
  //   console.log(updatedTodos);
  //   console.log(source);
  //   let [reorderedItem] = updatedTodos.splice(source.index, 1);
  //   console.log(reorderedItem);
  //   updatedTodos.splice(destination.index, 0, reorderedItem);

  //   console.log(reorderedItem);

  //   if (source.droppableId !== destination.droppableId) {
  //     const newStatus =
  //       destination.droppableId === "alldayother"
  //         ? "Other"
  //         : destination.droppableId.charAt(0).toUpperCase() +
  //           destination.droppableId.slice(1);
  //     console.log(newStatus);
  //     // reorderedItem.status = newStatus;

  //     console.log(reorderedItem);
  //     dispatch(
  //       updateTodoStatus({
  //         id: reorderedItem.id,
  //         status: newStatus,
  //       })
  //     );
  //   }

  //   // setTodos(updatedTodos);
  // };

  return (
    <div>
      <div className={`mt-10 grid grid-cols-1 lg:grid-cols-3 gap-7 `}>
        <DragDropContext onDragEnd={handleDragEnd}>
          <div className="flex flex-col">
            <div className="h-14 bg-white shadow flex flex-col px-4 text-sm rounded-md border-b-[4px] border-primaryColor  text-gray-500 justify-center">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <HiOutlineDocumentText className="text-md mb-0.5" />
                  <span>{moment().format("dddd")}</span>
                  <span>|</span>
                  <span>{moment().format("MMM D")}</span>
                </div>
                <button
                  className="text-sm font-bold text-primaryColor hover:text-blue-600 transition duration-300"
                  onClick={() => setCreateTodoMOpen(!createTodoMOpen)}
                >
                  + Create List
                </button>
              </div>
            </div>
            <div>
              <TodoColumn
                setCreateTodoMOpen={setCreateTodoMOpen}
                createTodoMOpen={createTodoMOpen}
                droppableId="alldayother"
                todos={others}
                setTodos={setOthers}
                addBtn={true}
              />
            </div>
          </div>
          <div>
            <div className="h-14 bg-white shadow flex flex-col px-4 text-sm rounded-md border-b-[4px] border-orange-500 text-gray-500 justify-center">
              <div className="flex items-center gap-2 text-orange-600">
                <HiOutlineDocumentChartBar className="text-md mb-0.5" />
                <strong className="font-medium">Ongoing</strong>
              </div>
            </div>
            <div>
              <TodoColumn
                droppableId="ongoing"
                todos={ongoing}
                setTodos={setOngoing}
                addBtn={false}
              />
            </div>
          </div>
          <div>
            <div className="h-14 bg-white shadow flex flex-col px-4 text-sm rounded-md border-b-[4px] border-emerald-600 text-gray-500 justify-center">
              <div className="flex items-center gap-2 text-emerald-600">
                <HiOutlineDocumentCheck className="text-md mb-0.5" />
                <strong className="font-medium">Completed</strong>
              </div>
            </div>
            <div>
              <TodoColumn
                droppableId="completed"
                todos={completed}
                setTodos={setCompleted}
                addBtn={false}
              />
            </div>
          </div>
        </DragDropContext>
      </div>
    </div>
  );
};

export default TodoDayWised;
