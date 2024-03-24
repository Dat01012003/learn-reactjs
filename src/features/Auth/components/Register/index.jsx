import React from "react";
import RegisterForm from "../RegisterForm";

function Register(props) {
  const handleSubmit = (values) => {
    console.log("Form Submit", values);
  };

  return (
    <div>
      <RegisterForm />
    </div>
  );
}

export default Register;
