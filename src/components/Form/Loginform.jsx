import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { login } from "../../services/authenticationService";
import "./Form.css";

const Loginform = ({ setLoggedIn }) => {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisiible] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async ({ email, password, secret, rememberMe }) => {
    setLoading(true);
    setErrorMsg(false);
    localStorage.setItem("key", secret);
  
    let data = {
      password: password,
      email: email,
      rememberMe: rememberMe
    };

    try {
      const res = await login(data);
      localStorage.setItem("jwt", res.data.jwt); // store jwt
      setLoggedIn(true);

      if (rememberMe) {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
      }

    } catch {
      console.log("login failed");
      setErrorMsg(true);
      localStorage.clear()
    } finally {
      setLoading(false);
    }

  };

  return (
    <form className="form-login" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-input-container">
        <label>Enter your email address</label>
        <input
          className="form-input box"
          placeholder="Your email address"
          name="email"
          {...register("email", { required: true })}
        />
      </div>
      <div className="form-input-container">
        <label>Enter your Speedoc key</label>
        <input
          className="form-input box"
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
            className="form-input box"
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

      <input className="button" type="submit" value={loading ? "Loading.." : "Login"} />

      <br />

      {errorMsg && <p>You have entered innvalid login credentials</p>}
    </form>
  );
};

export default Loginform;
