import React, {useState} from "react";
import { Redirect } from "react-router-dom"
import Loginform from "../components/Form/Loginform";
import "./login.css";

export default function Login() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("jwt") ? true: false);

  if (loggedIn) {
    return <Redirect to={"/"} />;
  }
  return (
    <div className="main">
      <img className="icon" src={"/images/speedoc.svg"} alt=""></img>
      <Loginform setLoggedIn={setLoggedIn}/>
    </div>
  );
}
