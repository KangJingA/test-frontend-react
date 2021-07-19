import React from "react";
import Loginform from "../components/Form/Loginform";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <img className="icon" src={"/images/speedoc.svg"} alt=""></img>
      <Loginform />
    </div>
  );
}
