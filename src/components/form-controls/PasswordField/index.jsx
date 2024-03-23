import React, { useState } from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function PasswordField(props) {
  const { form, name, label, disabled } = props;

  const {
    formState: { errors },
  } = form;
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((x) => !x);
  };

  return (
    <FormControl fullWidth margin="normal" variant="standard">
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Controller
        name={name}
        control={form.control}
        render={({ field }) => (
          <Input
            {...field}
            id={name} // Chuyển id như là một prop của Input
            type={showPassword ? "text" : "password"}
            label={label}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={toggleShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        )}
        disabled={disabled}
        error={!!errors[name]}
        helperText={errors[name]?.message}
      />
    </FormControl>
  );
}

PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default PasswordField;
