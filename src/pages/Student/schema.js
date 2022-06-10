import * as Yup from "yup";

export const Schema = Yup.object().shape({
  name: Yup.string().required("namw is required"),
  age: Yup.string().required("Age required"),
  course: Yup.string().required("Course required"),
  school: Yup.string().required("School required"),
});

export const initialValues = {
    name: '',
    age: '',
    course: '',
    school: '',
}

