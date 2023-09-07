import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

export const Authentication = () => {
  const [toggleForm, setToggleForm] = useState(true);

  const formMode = () => {
    setToggleForm(!toggleForm);
  };

  return toggleForm ? (
    <Login toggle={() => formMode()} />
  ) : (
    <SignUp toggle={() => formMode()} />
  );
};
