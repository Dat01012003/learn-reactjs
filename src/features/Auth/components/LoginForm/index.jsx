import { yupResolver } from "@hookform/resolvers/yup";
import { LockOutlined } from "@mui/icons-material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Avatar, Button, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
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
function LoginF() {
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const [showretypePassword, setShowRetypePassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const toggleShowRetypePassword = () => {
    setShowRetypePassword((prevShowRetypePassword) => !prevShowRetypePassword);
  };
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email")
      .required("Please enter your email"),
    password: yup.string().required("Please enter your password"),
  });

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const { handleSubmit, watch } = form;

  const values = watch();

  console.log("values", values);

  const onSubmit2 = (data) => {
    console.log("data", data);
    form.reset();
  };

  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar}>
        <LockOutlined />
      </Avatar>

      <Typography component="h3" variant="h5" className={classes.title}>
        Sign In
      </Typography>

      <FormProvider methods={form} onSubmit={handleSubmit(onSubmit2)}>
        <TextFieldHF className={classes.title} name="email" label="Email" />
        <TextFieldHF
          className={classes.title}
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

        <Button
          className={classes.submit}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          SIGN IN
        </Button>
      </FormProvider>
    </div>
  );
}

export default LoginF;
