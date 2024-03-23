import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
// import { useForm } from "formik"; // Import hook 'useForm' from Formik
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
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="title" label="Todo" form={form} />
    </form>
  );
}

export default TodoForm;
