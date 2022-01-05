import React, { useState } from "react";
import Form from "../common/Form";
import axios from "axios";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // let navigate = useNavigate();

  // const [query, setQuery] = useState({
  //   username: "",
  //   password: ""
  // });

  // const updateForm = (field, value) => {
  //   setQuery({
  //     ...query,
  //     [field]: value
  //   })
  // }

  return (
    <div>
      <h1>Login</h1>
    </div>
  );
};

export default Login;
