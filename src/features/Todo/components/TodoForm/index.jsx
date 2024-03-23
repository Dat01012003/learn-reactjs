import React from "react";
import PropTypes from "prop-types";
import { useForm } from "formik"; // Import hook 'useForm' from Formik
import InputField from "../../../../components/form-controls/InputField";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
  const form = useForm({
    defaultValues: {
      title: " ",
    },
  });
  const handleSubmit = (values) => {
    console.log("TODO FORM: ", values);
  };
  return (
    <div onSubmit={form.handleSubmit(handleSubmit)}>
      {" "}
      {/* Thay `onsubmit` thành `onSubmit` */}
      <InputField name="title" label="Todo" form={form} />
    </div>
  );
}

export default TodoForm;
