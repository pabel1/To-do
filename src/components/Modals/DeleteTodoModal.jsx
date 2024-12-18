import { Dialog, DialogContent } from "@mui/material";
import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import Lordicon from "../../utiles/Lordicon";

const DeleteTodoModal = ({
  deleteMOpen,
  setDeleteMOpen,
  deleteTarget,
  handleDelete,
  selectedOption,
  deleteLoading,
  setSelectedOption,
}) => {
  const todoId = deleteMOpen;

  const customDialogStyle = {
    borderRadius: "12px",
    padding: "8px",
    maxWidth: "450px",
  };

  const handleClose = () => {
    setDeleteMOpen("");
    setSelectedOption("");
  };

  return (
    <Dialog
      open={Boolean(deleteMOpen)}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      classes={{
        paper: "rounded-lg",
        root: "rounded-lg",
      }}
      PaperProps={{ style: customDialogStyle }}
    >
      <DialogContent>
        <div className="flex justify-between">
          <div className="w-14 h-14 bg-red-100 p-1 grid place-items-center rounded-full">
            <div className="bg-red-200 h-10 w-10 p-1 rounded-full grid place-items-center">
              <Lordicon link={"kfzfxczd"} color={"#D92D20"} trigger={"loop"} />
            </div>
          </div>
          <IoCloseOutline
            onClick={handleClose}
            className="text-4xl p-1 rounded-full hover:bg-purple-200 cursor-pointer trasition duration-300"
          />
        </div>
        <h2 className="text-xl font-bold mt-4">Delete {deleteTarget}</h2>
        <p className="text-gray-500 mt-2 text-sm">
          Are you sure you want to delete this {deleteTarget}? This action
          cannot be undone.
        </p>

        <div className="grid grid-cols-2 gap-3 mt-8">
          <button
            onClick={handleClose}
            className="py-2  border-2 border-gray-400 rounded-lg text-gray-600 font-medium hover:bg-slate-100 transition duration-200"
          >
            Cancel
          </button>

          <button
            onClick={() => handleDelete(todoId, selectedOption)}
            className={
              deleteLoading
                ? "py-2 border-2 border-gray-200 rounded-lg bg-gray-200"
                : `py-2  border-2 border-red-500 rounded-lg bg-red-500 text-white hover:bg-red-600 hover:border-red-600 transition duration-200`
            }
            // disabled={deleteLoading}
          >
            {deleteLoading ? (
              <div class="border-gray-400 h-5 w-5 animate-spin rounded-full border-[3px] border-t-gray-600 mx-auto" />
            ) : (
              "Delete"
            )}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteTodoModal;
