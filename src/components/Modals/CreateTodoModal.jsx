import { Dialog, DialogContent } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../feature/todo/todosSlice";
import { cancelBtn, createBtn } from "../../utiles/tailwindClasses";
import { createTodovalidationSchema } from "../../utiles/validations/formValidations";

const CreateTodoModal = ({ createTodoMOpen, setCreateTodoMOpen }) => {
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const customDialogStyle = {
    borderRadius: "12px",
    padding: "8px",
    // maxWidth: "40%",
    width: "100%",
  };

  const buttonResponsiveStyles = {
    width: "100%", // Make buttons full width on smaller screens
  };

  const initialValues = {
    title: "",
    description: "",
    date: new Date().toISOString().split("T")[0], // Set default date to today
  };

  const handleClose = () => {
    setCreateTodoMOpen(false);
  };

  const handleSubmit = async (values) => {
    if (!values.title || !values.description) {
      setError("Title and description can't be empty");
      return;
    }
    setError(""); // Clear any previous error

    const newTodo = {
      title: values.title,
      description: values.description,
      date: values.date,
    };

    dispatch(addTodo(newTodo));
    handleClose();
  };

  return (
    <Dialog
      open={createTodoMOpen}
      onClose={handleClose}
      fullWidth={true}
      maxWidth="sm"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      classes={{
        paper: "rounded-lg",
        root: "rounded-lg",
      }}
      PaperProps={{
        style: {
          ...customDialogStyle,
          // ...dialogResponsiveStyles, // Apply responsive styles to the dialog
        },
      }}
    >
      <Formik
        validationSchema={createTodovalidationSchema}
        onSubmit={handleSubmit}
        initialValues={initialValues}
      >
        {({ errors, touched }) => (
          <Form>
            <DialogContent>
              <div className="mb-4">
                <h2 className="text-xl text-primaryColor font-bold text-center mb-4">
                  Add a new List
                </h2>
              </div>

              <div className="mx-0 md:mx-8">
                <div className="flex flex-col gap-2">
                  <Field
                    type="text"
                    placeholder="Title"
                    className="py-2 px-4 text-sm w-full border border-1 border-gray-300 rounded-lg"
                    name="title"
                  />
                  {errors.title && touched.title ? (
                    <div className="text-red-500 text-xs">{errors.title}</div>
                  ) : null}
                  <Field
                    component="textarea"
                    placeholder="Start writing..."
                    className="py-2 px-4 mb-3 mt-5 text-sm w-full h-40 border border-1 border-gray-300 rounded-lg"
                    name="description"
                  />
                </div>
                {errors.description && touched.description ? (
                  <div className="text-red-500 text-xs my-1">
                    {errors.description}
                  </div>
                ) : null}

                <Field
                  type="date"
                  className="py-2 px-4 text-sm w-full border border-1 border-gray-300 rounded-lg"
                  name="date"
                />
                {errors.date && touched.date ? (
                  <div className="text-red-500 text-xs">{errors.date}</div>
                ) : null}
              </div>

              <div className="grid grid-cols-2 gap-5 mt-8 max-w-[400px] mx-auto">
                <button
                  onClick={handleClose}
                  className={cancelBtn}
                  style={buttonResponsiveStyles}
                >
                  Cancel
                </button>
                <button type="submit" className={createBtn}>
                  Create
                </button>
              </div>
            </DialogContent>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

export default CreateTodoModal;
