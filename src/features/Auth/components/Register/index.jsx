// Register.js
import React from "react";

import RegisterForm from "../RegisterForm";

function Register() {
  const handleSubmit = async (values) => {
    console.log("Form Submit", values);
  };

  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
