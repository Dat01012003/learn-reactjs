import { yupResolver } from "@hookform/resolvers/yup";
import { LockOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import { Avatar, Button, LinearProgress, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import * as yup from "yup";
import { register } from "../../userSlice";
import FormProvider from "../../../../components/hook-form/FormProvider";
import TextFieldHF from "../../../../components/hook-form/TextFieldHF";

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
    margin: "16px 0 16px 0",
  },
  submit: {
    margin: "24px 0 16px 0",
  },
}));

function RegisterForm(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleShowRetypePassword = () => {
    setShowRetypePassword((prevShowRetypePassword) => !prevShowRetypePassword);
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

  const { handleSubmit, reset, watch } = form;

  const values = watch();

  const handleSubmit3 = async (values) => {
    console.log("Form Submit", values);

    try {
      const valuesRegister = {
        email: values.email,
        username: values.email,
        password: values.password,
        retypePassword: values.retypePassword,
        fullName: values.fullName,
      };

      console.log("valuesRegister", valuesRegister);

      // Dispatch the register action
      const action = register(valuesRegister);
      const resultAction = await dispatch(action);

      // Unwrap the result to get the user data
      const user = unwrapResult(resultAction);

      console.log("New user", user);

      // Reset form after successful registration
      reset();
    } catch (error) {
      console.log("Failed to register:", error);
    }

    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
    reset();
  };

  const { isSubmitting } = form.formState;
  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress />}
      <Avatar className={classes.avatar}>
        <LockOutlined />
      </Avatar>

      <Typography component="h3" variant="h5" className={classes.title}>
        Create An Account
      </Typography>

      <FormProvider methods={form} onSubmit={handleSubmit(handleSubmit3)}>
        <TextFieldHF
          className={classes.title}
          name="fullName"
          label="Full name"
        />
        <TextFieldHF className={classes.title} name="email" label="Email" />
        <TextFieldHF
          className={classes.title}
          name="password"
          label="Password"
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
        <TextFieldHF
          className={classes.title}
          name="retypePassword"
          label="Retype Password"
          type={showRetypePassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={toggleShowRetypePassword}
                  edge="end"
                >
                  {showRetypePassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button
          className={classes.submit}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Create an account
        </Button>
      </FormProvider>
    </div>
  );
}

export default RegisterForm;
