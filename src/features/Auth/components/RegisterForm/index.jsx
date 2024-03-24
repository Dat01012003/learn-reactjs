import React, { useState } from "react";
import PropTypes from "prop-types";
import InputField from "../../../../components/form-controls/InputField";
import PasswordField from "../../../../components/form-controls/PasswordField";
import TextFieldHF from "../../../../components/hook-form/TextFieldHF";
import FormProvider from "../../../../components/hook-form/FormProvider";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import * as yup from "yup";
import { Avatar, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { LockOutlined } from "@mui/icons-material";

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: "32px",
  },
  avatar: {
    margin: "0 auto",
    backgroundColor: "red",
  },
  title: {
    textAlign: "center",
    margin: "16px 0 24px 0",
  },
  submit: {
    margin: "24px 0 16px 0",
  },
}));

// RegisterForm.propTypes = {
//   onSubmit: PropTypes.func,
// };

function RegisterForm() {
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const schema = yup.object().shape({
    fullName: yup.string().required("Please enter your full name"),
    email: yup
      .string()
      .email("Invalid email")
      .required("Please enter your email"),
    password: yup.string().required("Please enter your password"),
    retypePassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Please retype your password"),
  });

  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      retypePassword: "",
    },
    resolver: yupResolver(schema),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = form;

  const values = watch();

  console.log("values", values);

  const onSubmit2 = (data) => {
    console.log("data", data);
  };

  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar}>
        <LockOutlined />
      </Avatar>

      <Typography component="h3" variant="h5" className={classes.title}>
        Create An Account
      </Typography>

      <FormProvider methods={form} onSubmit={handleSubmit(onSubmit2)}>
        <TextFieldHF name="fullName" label="Full name" />
        <TextFieldHF name="email" label="Email" />
        <TextFieldHF
          name="password"
          label="Pass Word"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={toggleShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextFieldHF name="retypePassword" label="Retype Password" />

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Create an account
        </Button>
      </FormProvider>
    </div>
  );
}

export default RegisterForm;
