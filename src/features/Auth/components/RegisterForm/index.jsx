import React from "react";
import PropTypes from "prop-types";
import InputField from "../../../../components/form-controls/InputField";
import PasswordField from "../../../../components/form-controls/PasswordField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
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

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const classes = useStyles();
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

  const handleSubmit = (values) => {
    console.log("Submitting form with values:", values); // Thêm console log để kiểm tra
    const { onSubmit } = props;

    if (onSubmit) {
      onSubmit(values);
    }
    form.reset();
  };

  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar}>
        <LockOutlined />
      </Avatar>

      <Typography component="h3" variant="h5" className={classes.title}>
        Create An Account
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullName" label="Full Name" form={form} />
        <InputField name="email" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <PasswordField
          name="retypePassword"
          label="Retype Password"
          form={form}
        />

        <Button
          type="submit"
          className={classes.submit}
          variant="contained"
          color="primary"
          fullWidth
        >
          Create an account
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
