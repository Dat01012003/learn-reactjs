import React from "react";
import PropTypes from "prop-types";
import { Controller, useFormContext } from "react-hook-form";
import { TextField } from "@mui/material";
import { string } from "yup";

InputField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  disable: PropTypes.bool,
};

function InputField({ name, label, disable }) {
  // const { name, label, disable } = props;
  const { control, watch } = useFormContext();
  const { values } = watch();

  console.log("name", values);

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, onBlur, value, name },
        fieldState: { invalid, error },
      }) => (
        <TextField
          margin="normal"
          variant="outlined"
          fullWidth
          label={label}
          error={invalid}
          helperText={error?.message}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          value={value}
          disabled={disable}
        />
      )}
    />
  );
}

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disable: PropTypes.bool,
};

export default InputField;
