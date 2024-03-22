import React from "react";
import PropTypes from "prop-types";
import InputField from "../../../../components/form-controls/InputField";
import { useForm } from "react-hook-form"; // Import useForm hook from react-hook-form
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
  onSubmit: PropTypes.func, // Fix typo: onSubmit instead of onsubmit
};

function RegisterForm(props) {
  const classes = useStyles();
  const schema = yup
    .object({
      title: yup
        .string()
        .required("please enter title")
        .min(5, "Title is too short"),
    })
    .required();

  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      retypePassWord: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }
    form.reset();
  };

  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar}>
        <LockOutlined></LockOutlined>
      </Avatar>

      <Typography component="h3" variant="h5" className={classes.title}>
        Create An Account
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullName" label="Full Name" form={form} />
        <InputField name="email" label="Email" form={form} />
        <InputField name="password" label="Password" form={form} />
        <InputField name="retypePassWord" label="Retype Password" form={form} />

        <Button
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
