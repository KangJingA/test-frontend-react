import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { login } from "../../services/authenticationService";
import "./Form.css";

const Loginform = () => {
  const { register, handleSubmit } = useForm();
  const [passwordVisible, setPasswordVisiible] = useState(false);
  // some form of loading state here

  const onSubmit = async ({ email, password, secret, rememberMe }) => {
    console.log(rememberMe);

    localStorage.setItem("key", "qOg1IIg9vC5DyC4XCJG7R4HhUnFxmFja8YxXsj2p");
    
    let data = {
      password: "speedocdemo",
      email: "jarvis@speedoc.com",
      rememberMe: true
    };
    const res = await login(data);
    console.log(res);
    localStorage.setItem("jwt", res.data.jwt); // store jwt

    //error handling here
  };

  return (
    <form className="form-login" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-input-container">
        <label>Enter your email address</label>
        <input
          className="form-input-box"
          placeholder="Your email address"
          name="email"
          {...register("email", { required: true })}
        />
      </div>
      <div className="form-input-container">
        <label>Enter your Speedoc key</label>
        <input
          className="form-input-box"
          placeholder="Your secret key"
          name="secret"
          {...register("secret", { required: true })}
        />
      </div>
      <div className="form-input-container">
        <label>Enter your password</label>
        <div className="form-input-wrapper">
          {passwordVisible ? (
            <img
              className="icon"
              src={"/images/eye-slash-solid.svg"}
              alt=""
              onClick={e => {
                setPasswordVisiible(!passwordVisible);
              }}></img>
          ) : (
            <img
              className="icon"
              src={"/images/eye-solid.svg"}
              alt=""
              onClick={e => {
                setPasswordVisiible(!passwordVisible);
              }}></img>
          )}
          <input
            className="form-input-box"
            type={passwordVisible ? "text" : "password"}
            name="password"
            {...register("password", { required: true })}
          />
        </div>
      </div>
      <div className="form-checkbox-container">
        <input type="checkbox" name="rememberMe" {...register("rememberMe")} />

        <label>Remember me</label>
      </div>

      <input className="button" type="submit" value="Login" />
      <i className="fas fa-eye"></i>
    </form>
  );
};

export default Loginform;
