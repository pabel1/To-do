import { Checkbox } from "@mui/material";
import React, { useState } from "react";
import TodoDropdownOptions from "../../../components/Buttons/TodoDropdownOptions";
import DeleteTodoModal from "../../../components/Modals/DeleteTodoModal";

const TodoDataCard = ({ todo, index }) => {
  const statusOptions = [
    {
      id: 1,
      name: "Completed",
      color: "#CCFBF1",
    },
    {
      id: 2,
      name: "Pending",
      color: "#fffff",
    },
    {
      id: 3,
      name: "Ongoing",
      color: "#FEE2E2",
    },
  ];

  const options = [
    {
      title: "Change Status",
      icon: "akuwjdzh",
      subOptions: statusOptions, // Include subOptions (statusOptions) here
      open: 1,
    },
    { title: "Delete", icon: "kfzfxczd" },
  ];

  const [selectedTodo, setSelectedTodo] = useState("");

  const [selectedOption, setSelectedOption] = useState("");

  const handleCheckboxChange = async () => {
    const status = "Completed";
    // const res = await updateTodoStatusApi({
    //   token,
    //   status,
    //   id: todo?._id,
    // });
    // Update the todo status to "Completed"
    // console.log(res);
  };

  const handleDelete = async (id, text) => {
    if (text === "Delete") {
      // const res = await deleteTodoApi({ token, id });
      // if (res?.data?.success) {
      //   toast.success("Todo Deleted Successfully");
      // }
    } else return;
  };

  return (
    <div
      className={`shadow rounded-lg p-2 flex justify-between transition duration-300  ${
        todo?.status === "Ongoing" &&
        "bg-red-100 hover:bg-orange-100 text-orange-600"
      } ${
        todo?.status === "Completed" &&
        "bg-emerald-100 hover:bg-teal-100 text-emerald-600"
      }  ${todo?.status === "Pending" && "bg-white"} `}
    >
      <div className="flex items-center">
        {todo?.status !== "Completed" && (
          <Checkbox
            onChange={handleCheckboxChange}
            className="items-start"
            disableRipple
            sx={{
              "& .MuiSvgIcon-root": {
                fontSize: 18,
                marginTop: -0.6,
                border: "none", // Remove border
                boxShadow: "none",
                color:
                  !todo.status || todo.status === "Pending"
                    ? ""
                    : "rgb(234 88 12)",
                padding: 0,
              },
            }}
          />
        )}
        <div
          className={`space-y-1 ${todo?.status === "Completed" ? "ml-5" : ""}`}
        >
          {todo.title}

          {<div className="text-xs">{todo.description}</div>}
        </div>
      </div>
      <div onClick={() => setSelectedTodo(todo.id)} className="my-auto">
        {selectedOption !== "Delete" && (
          <TodoDropdownOptions
            todo={todo}
            setSelectedOption={setSelectedOption}
            options={options}
          />
        )}
      </div>

      {selectedOption === "Delete" && (
        <DeleteTodoModal
          deleteLoading={deleteLoading}
          deleteTarget={"Todo"}
          setSelectedOption={setSelectedOption}
          selectedOption={selectedOption}
          handleDelete={handleDelete}
          setDeleteMOpen={setSelectedTodo}
          deleteMOpen={selectedTodo}
        ></DeleteTodoModal>
      )}
    </div>
  );
};

export default TodoDataCard;
