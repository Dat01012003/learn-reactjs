import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

function InputField(props) {
  const { form, name, label, disabled } = props;

  const {
    formState: { errors },
  } = form;
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field }) => (
        <TextField
          {...field}
          fullWidth
          margin="normal"
          variant="outlined"
          label={label}
          disabled={disabled}
          error={!!errors}
          helperText={errors[name]?.message}
        />
      )}
    />
  );
}

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

export default InputField;
