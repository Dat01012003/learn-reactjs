// Register.js
import React from "react";
import { unwrapResult } from "@reduxjs/toolkit";
import { register } from "../../userSlice";
import RegisterForm from "../RegisterForm";
import { useDispatch } from "react-redux";

function Register() {
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    console.log("Form Submit", values);

    try {
      // Auto set username = email
      values.username = values.email;

      // Dispatch the register action
      const action = register(values);
      const resultAction = await dispatch(action);

      // Unwrap the result to get the user data
      const user = unwrapResult(resultAction);

      console.log("New user", user);
    } catch (error) {
      console.log("Failed to register:", error);
    }
  };

  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
