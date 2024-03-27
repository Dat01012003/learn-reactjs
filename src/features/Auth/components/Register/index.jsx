import React from "react";
import LoginForm from "../LoginForm";
function Login(props) {
  const handleSubmit = (values) => {
    console.log("Form Submit", values);
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Login;
