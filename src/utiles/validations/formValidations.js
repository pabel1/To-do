import * as Yup from "yup";

export const createTodovalidationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  date: Yup.date().required("Date is required"),
});
